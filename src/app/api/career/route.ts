import nodemailer from "nodemailer";

const gmailUser = process.env.CAREER_GMAIL_USER;
const gmailPass = process.env.CAREER_GMAIL_PASS;

if (!gmailUser || !gmailPass) {
  // eslint-disable-next-line no-console
  console.warn(
    "CAREER_GMAIL_USER / CAREER_GMAIL_PASS env variables are not set. Career form emails will fail."
  );
}

export async function POST(request: Request) {
  if (!gmailUser || !gmailPass) {
    return new Response("Mail configuration missing on server.", {status: 500});
  }

  try {
    const body = await request.json().catch(() => ({}));
    const {
      fullName,
      age,
      phone,
      email,
      branch,
      position,
      workType,
      experience,
      intro,
      cvFileName,
    } = body ?? {};

    if (!fullName || !email) {
      return new Response("fullName and email are required.", {status: 400});
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const lines = [
      `Ad Soyad: ${fullName}`,
      `Yaş: ${age ?? "-"}`,
      `Telefon: ${phone ?? "-"}`,
      `E-posta: ${email}`,
      `Şube Tercihi: ${branch ?? "-"}`,
      `Pozisyon: ${position ?? "-"}`,
      `Çalışma Tercihi: ${workType ?? "-"}`,
      `Sektör Deneyimi: ${experience ?? "-"}`,
      "",
      "Kendini Kısaca Tanıt:",
      intro ?? "-",
      "",
      cvFileName ? `CV Dosyası: ${cvFileName}` : "CV: Yüklenmedi",
    ];

    const adminText = lines.join("\n");

    // Mail to admin
    await transporter.sendMail({
      from: `"Bulls Burger Kariyer" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `Yeni Kariyer Başvurusu - ${fullName}`,
      text: adminText,
    });

    const confirmLines = [
      `Merhaba ${fullName},`,
      "",
      "Bulls Burger ekibine başvurun bize ulaştı.",
      "En kısa sürede değerlendireceğiz; uygun bir",
      "pozisyon olması durumunda seninle iletişime",
      "geçeceğiz.",
      "",
      "Görüşmek üzere,",
      "Bulls Burger",
    ];

    // Mail to applicant
    await transporter.sendMail({
      from: `"Bulls Burger Kariyer" <${gmailUser}>`,
      to: email,
      subject: "Başvurun bize ulaştı",
      text: confirmLines.join("\n"),
    });

    return new Response(JSON.stringify({ok: true}), {
      status: 200,
      headers: {"Content-Type": "application/json"},
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Career mail error", err);
    return new Response("Mail gönderilirken bir hata oluştu.", {status: 500});
  }
}

