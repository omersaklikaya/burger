"use client";

import { FormEvent, useRef, useState } from "react";

const selectArrowSvg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23cc0000'/%3E%3C/svg%3E\")";

const inputClass =
  "w-full border-[1.5px] border-[#1a1a1a] p-[10px] px-3 text-sm text-[#1a1a1a] bg-white outline-none font-[inherit] box-border focus:border-[#cc0000] rounded-none";
const labelClass = "block text-[13px] font-normal text-[#1a1a1a] mb-1.5";

const CV_MAX_MB = 5;
const CV_MAX_BYTES = CV_MAX_MB * 1024 * 1024;

const PHONE_LENGTH = 10;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validatePhone(digits: string): string | null {
  if (!digits.trim()) return "Bu alan zorunludur.";
  if (digits.length !== PHONE_LENGTH) return `Telefon numarası tam ${PHONE_LENGTH} haneli olmalı (5XX XXX XX XX).`;
  if (digits[0] !== "5") return "Geçerli bir cep telefonu numarası girin (5 ile başlamalı).";
  return null;
}

function validateEmail(value: string): string | null {
  if (!value.trim()) return "Bu alan zorunludur.";
  if (!EMAIL_REGEX.test(value.trim())) return "Geçerli bir e-posta adresi girin (örn: ornek@alan.com).";
  return null;
}

const REQUIRED_MSG = "Bu alan zorunludur.";

export function CareerFormSection() {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const [phoneDigits, setPhoneDigits] = useState("");
  const [email, setEmail] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const fileInputId = "cv-upload";

  const fullNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const branchRef = useRef<HTMLSelectElement>(null);
  const positionRef = useRef<HTMLSelectElement>(null);
  const workTypeRef = useRef<HTMLSelectElement>(null);
  const experienceRef = useRef<HTMLSelectElement>(null);
  const introRef = useRef<HTMLTextAreaElement>(null);

  function clearError(field: string) {
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors: Record<string, string> = {};

    const fullName = fullNameRef.current?.value?.trim() ?? "";
    if (!fullName) errors.fullName = REQUIRED_MSG;

    const age = ageRef.current?.value?.trim() ?? "";
    if (!age) errors.age = REQUIRED_MSG;

    const pErr = validatePhone(phoneDigits);
    if (pErr) errors.phone = pErr;

    const eErr = validateEmail(email);
    if (eErr) errors.email = eErr;

    const branch = branchRef.current?.value ?? "";
    if (!branch) errors.branch = REQUIRED_MSG;

    const position = positionRef.current?.value ?? "";
    if (!position) errors.position = REQUIRED_MSG;

    const workType = workTypeRef.current?.value ?? "";
    if (!workType) errors.workType = REQUIRED_MSG;

    const experience = experienceRef.current?.value ?? "";
    if (!experience) errors.experience = REQUIRED_MSG;

    const intro = introRef.current?.value?.trim() ?? "";
    if (!intro) errors.intro = REQUIRED_MSG;

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  }

  return (
    <section
      className="w-full box-border grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-0 items-start py-8 px-4 md:py-12 md:px-16"
      style={{ boxSizing: "border-box" }}
    >
      {/* SOL — BAŞVURU FORMU */}
      <div className="pr-0 pb-0 border-0 md:pr-16 md:border-r md:border-r-[#eee]">
        <p
          className="text-[10px] font-bold tracking-[0.15em] text-[#cc0000] mb-2"
          style={{ marginBottom: "8px" }}
        >
          BAŞVURU FORMU
        </p>
        <h2 className="text-[22px] font-bold text-[#1a1a1a] mb-1" style={{ marginBottom: "4px" }}>
          Ekibimize Katıl
        </h2>
        <p className="text-[13px] text-[#555] mb-7" style={{ marginBottom: "28px" }}>
          Formu doldur, seni tanıyalım.
        </p>

        <form onSubmit={handleSubmit}>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
            style={{ gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}
          >
            <div>
              <label className={labelClass}>Ad Soyad</label>
              {fieldErrors.fullName && (
                <p className="text-xs text-[#cc0000] font-medium mb-1.5" role="alert">
                  {fieldErrors.fullName}
                </p>
              )}
              <input
                ref={fullNameRef}
                type="text"
                name="fullName"
                className={`${inputClass} ${fieldErrors.fullName ? "border-[#cc0000]" : ""}`}
                onChange={() => clearError("fullName")}
              />
            </div>
            <div>
              <label className={labelClass}>Yaş</label>
              {fieldErrors.age && (
                <p className="text-xs text-[#cc0000] font-medium mb-1.5" role="alert">
                  {fieldErrors.age}
                </p>
              )}
              <input
                ref={ageRef}
                type="number"
                name="age"
                min={16}
                max={99}
                className={`${inputClass} ${fieldErrors.age ? "border-[#cc0000]" : ""}`}
                onChange={() => clearError("age")}
              />
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
            style={{ gap: "16px", marginBottom: "16px" }}
          >
            <div>
              <label className={labelClass}>Telefon</label>
              {fieldErrors.phone && (
                <p className="text-xs text-[#cc0000] font-medium mb-1.5" role="alert">
                  {fieldErrors.phone}
                </p>
              )}
              <div
                className={`flex w-full border-[1.5px] bg-white rounded-none box-border ${
                  fieldErrors.phone ? "border-[#cc0000]" : "border-[#1a1a1a] focus-within:border-[#cc0000]"
                }`}
              >
                <span className="inline-flex items-center border-r border-[#1a1a1a] px-3 text-sm text-[#1a1a1a] shrink-0 font-[inherit] bg-neutral-50">
                  +90
                </span>
                <input
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="5XX XXX XX XX"
                  className={`${inputClass} border-0 rounded-none focus:ring-0`}
                  style={{ paddingLeft: "8px" }}
                  value={phoneDigits}
                  onChange={(e) => {
                    setPhoneDigits(e.target.value.replace(/\D/g, "").slice(0, PHONE_LENGTH));
                    clearError("phone");
                  }}
                />
              </div>
              <input type="hidden" name="phone" value={phoneDigits ? `+90${phoneDigits}` : ""} />
            </div>
            <div>
              <label className={labelClass}>E-posta</label>
              {fieldErrors.email && (
                <p className="text-xs text-[#cc0000] font-medium mb-1.5" role="alert">
                  {fieldErrors.email}
                </p>
              )}
              <input
                type="email"
                name="email"
                className={`${inputClass} ${fieldErrors.email ? "border-[#cc0000]" : ""}`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearError("email");
                }}
              />
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
            style={{ gap: "16px", marginBottom: "16px" }}
          >
            <div>
              <label className={labelClass}>Şube Tercihi</label>
              {fieldErrors.branch && (
                <p className="text-xs text-[#cc0000] font-medium mb-1.5" role="alert">
                  {fieldErrors.branch}
                </p>
              )}
              <select
                ref={branchRef}
                name="branch"
                className={`${inputClass} ${fieldErrors.branch ? "border-[#cc0000]" : ""}`}
                style={{
                  appearance: "none",
                  backgroundImage: selectArrowSvg,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                  paddingRight: "32px",
                }}
                onChange={() => clearError("branch")}
              >
                <option value="">Seçin</option>
                <option value="kadikoy">Kadıköy</option>
                <option value="besiktas">Beşiktaş</option>
                <option value="atasehir">Ataşehir</option>
                <option value="fark-etmez">Fark etmez</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Pozisyon</label>
              {fieldErrors.position && (
                <p className="text-xs text-[#cc0000] font-medium mb-1.5" role="alert">
                  {fieldErrors.position}
                </p>
              )}
              <select
                ref={positionRef}
                name="position"
                className={`${inputClass} ${fieldErrors.position ? "border-[#cc0000]" : ""}`}
                style={{
                  appearance: "none",
                  backgroundImage: selectArrowSvg,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                  paddingRight: "32px",
                }}
                onChange={() => clearError("position")}
              >
                <option value="">Seçin</option>
                <option value="kasiyer">Kasiyer</option>
                <option value="garson">Garson / Servis Ekibi</option>
                <option value="mutfak">Mutfak Ekibi</option>
                <option value="temizlik">Temizlik / Genel Destek</option>
              </select>
            </div>
          </div>

          <div className="mb-4" style={{ marginBottom: "16px" }}>
            <label className={labelClass}>Çalışma Tercihi</label>
            {fieldErrors.workType && (
              <p className="text-xs text-[#cc0000] font-medium mb-1.5" role="alert">
                {fieldErrors.workType}
              </p>
            )}
            <select
              ref={workTypeRef}
              name="workType"
              className={`${inputClass} ${fieldErrors.workType ? "border-[#cc0000]" : ""}`}
              style={{
                appearance: "none",
                backgroundImage: selectArrowSvg,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                paddingRight: "32px",
              }}
              onChange={() => clearError("workType")}
            >
              <option value="">Seçin</option>
              <option value="full">Tam Zamanlı</option>
              <option value="part">Yarı Zamanlı</option>
            </select>
          </div>

          <div className="mb-4" style={{ marginBottom: "16px" }}>
            <label className={labelClass}>Sektör Deneyimi</label>
            {fieldErrors.experience && (
              <p className="text-xs text-[#cc0000] font-medium mb-1.5" role="alert">
                {fieldErrors.experience}
              </p>
            )}
            <select
              ref={experienceRef}
              name="experience"
              className={`${inputClass} ${fieldErrors.experience ? "border-[#cc0000]" : ""}`}
              style={{
                appearance: "none",
                backgroundImage: selectArrowSvg,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                paddingRight: "32px",
              }}
              onChange={() => clearError("experience")}
            >
              <option value="">Seçin</option>
              <option value="yes">Evet, var</option>
              <option value="no">Hayır, yok</option>
            </select>
          </div>

          <div className="mb-4" style={{ marginBottom: "16px" }}>
            <label className={labelClass}>Kendini Kısaca Tanıt</label>
            {fieldErrors.intro && (
              <p className="text-xs text-[#cc0000] font-medium mb-1.5" role="alert">
                {fieldErrors.intro}
              </p>
            )}
            <textarea
              ref={introRef}
              name="intro"
              className={`${inputClass} ${fieldErrors.intro ? "border-[#cc0000]" : ""}`}
              rows={4}
              style={{ height: "100px", resize: "none" }}
              onChange={() => clearError("intro")}
            />
          </div>

          <div className="mb-6" style={{ marginBottom: "24px" }}>
            <label className={labelClass} htmlFor={fileInputId}>
              CV Yükle (Opsiyonel, max {CV_MAX_MB} MB)
            </label>
            {cvError && (
              <p className="text-xs text-[#cc0000] font-medium mb-2" role="alert">
                {cvError}
              </p>
            )}
            <label
              htmlFor={fileInputId}
              className={`flex flex-col items-center justify-center w-full box-border border-[1.5px] border-dashed py-6 px-4 text-center text-xs text-[#555] cursor-pointer rounded-none outline-none font-[inherit] transition-colors focus-within:ring-2 font-[inherit] ${
                cvError
                  ? "border-[#cc0000] bg-red-50/50 focus-within:border-[#cc0000] focus-within:ring-[#cc0000]/20"
                  : "border-[#1a1a1a] hover:border-[#cc0000] hover:bg-red-50/30 focus-within:border-[#cc0000] focus-within:ring-[#cc0000]/20"
              }`}
              style={{ padding: "12px", minHeight: "72px" }}
            >
              <input
                id={fileInputId}
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                className="sr-only"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) {
                    setFileName(null);
                    setCvError(null);
                    return;
                  }
                  if (file.size > CV_MAX_BYTES) {
                    setCvError(`Dosya boyutu ${CV_MAX_MB} MB sınırını aşıyor. Lütfen daha küçük bir dosya seçin.`);
                    setFileName(null);
                    e.target.value = "";
                    return;
                  }
                  setCvError(null);
                  setFileName(file.name);
                }}
              />
              {fileName ? (
                <span className="text-[#1a1a1a] font-medium">{fileName}</span>
              ) : (
                <span>PDF veya Word dosyası — opsiyonel</span>
              )}
              <span className="mt-1 text-[#999] text-[11px]">
                {fileName ? "Değiştirmek için tıkla" : "Dosya seçmek için tıkla"}
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#cc0000] text-white border-none border-b-4 border-b-[#8b0000] py-3.5 text-sm font-bold tracking-[0.15em] cursor-pointer rounded-none hover:bg-[#b30000] transition-colors disabled:opacity-70"
            style={{ padding: "14px" }}
          >
            {loading ? "Gönderiliyor..." : "BAŞVUR"}
          </button>
        </form>
      </div>

      {/* SAĞ — NEDEN BULLS? */}
      <div className="pl-0 mt-12 md:pl-16 md:mt-0 md:sticky md:top-8">
        <p
          className="text-[10px] font-bold tracking-[0.15em] text-[#cc0000] mb-2"
          style={{ marginBottom: "8px" }}
        >
          NEDEN BULLS?
        </p>
        <h2
          className="text-2xl font-bold text-[#1a1a1a] leading-tight mb-5 border-l-4 border-l-[#cc0000] pl-4"
          style={{ fontSize: "24px", lineHeight: 1.3, marginBottom: "20px", borderLeftWidth: "3px" }}
        >
          Sadece iş değil,
          <br />
          bir ekibin parçası ol.
        </h2>
        <p
          className="text-sm text-[#555] leading-relaxed mb-6"
          style={{ fontSize: "14px", lineHeight: 1.8, marginBottom: "24px" }}
        >
          Bulls Burger&apos;de çalışmak bir pozisyon almaktan ibaret değil. Burada her sabah aynı
          ekiple aynı mutfağa giriyorsun, aynı kalite takıntısını paylaşıyorsun. Küçük ama güçlü bir
          ekip — herkes birbirini tanır, herkes birbirine güvenir.
        </p>

        <div>
          <div
            className="grid gap-3.5 border-t border-[#eee] py-4"
            style={{
              gridTemplateColumns: "36px 1fr",
              gap: "14px",
              alignItems: "flex-start",
              padding: "16px 0",
            }}
          >
            <div
              className="w-9 h-9 border-[1.5px] border-[#1a1a1a] flex items-center justify-center text-sm font-bold text-[#1a1a1a] shrink-0"
              style={{ width: 36, height: 36, fontSize: "14px" }}
            >
              01
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1a1a1a] mb-1.5" style={{ fontSize: "14px" }}>
                Gerçek mutfak deneyimi
              </h3>
              <p className="text-[13px] text-[#555] leading-snug" style={{ lineHeight: 1.7 }}>
                Stüdyo değil, gerçek bir mutfakta çalışırsın. Smash tekniği, malzeme seçimi, servis
                hızı — bunları kitaptan değil, ellerin ve ekibinle öğrenirsin. Her vardiya seni biraz
                daha iyi biri yapar.
              </p>
            </div>
          </div>
          <div
            className="grid gap-3.5 border-t border-[#eee] py-4"
            style={{
              gridTemplateColumns: "36px 1fr",
              gap: "14px",
              alignItems: "flex-start",
              padding: "16px 0",
            }}
          >
            <div
              className="w-9 h-9 border-[1.5px] border-[#1a1a1a] flex items-center justify-center text-sm font-bold text-[#1a1a1a] shrink-0"
              style={{ width: 36, height: 36, fontSize: "14px" }}
            >
              02
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1a1a1a] mb-1.5" style={{ fontSize: "14px" }}>
                Sırtını dayayabileceğin ekip
              </h3>
              <p className="text-[13px] text-[#555] leading-snug" style={{ lineHeight: 1.7 }}>
                Bulls&apos;ta kimse yalnız çalışmaz. Yoğun bir akşam servisi, bir ekibin ne kadar
                güçlü olduğunu gösterir. Burada o ekibin parçasısın — hem işte hem dışında. Yeni biri
                değil, ilk günden itibaren ekibin bir üyesisin.
              </p>
            </div>
          </div>
          <div
            className="grid gap-3.5 border-t border-[#eee] py-4"
            style={{
              gridTemplateColumns: "36px 1fr",
              gap: "14px",
              alignItems: "flex-start",
              padding: "16px 0",
            }}
          >
            <div
              className="w-9 h-9 border-[1.5px] border-[#1a1a1a] flex items-center justify-center text-sm font-bold text-[#1a1a1a] shrink-0"
              style={{ width: 36, height: 36, fontSize: "14px" }}
            >
              03
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1a1a1a] mb-1.5" style={{ fontSize: "14px" }}>
                Büyüyen bir markada erken yer al
              </h3>
              <p className="text-[13px] text-[#555] leading-snug" style={{ lineHeight: 1.7 }}>
                3 şube ve daha fazlası yolda. Büyüyen bir markada erken yer almak, sadece bir iş
                bulmak değil — o büyümenin bir parçası olmak demek. Bugün başlayanlar, yarın bu
                markanın hikayesinde yer alıyor.
              </p>
            </div>
          </div>
        </div>

        <blockquote
          className="border-t border-[#eee] pt-5 mt-1 text-sm italic text-[#555] leading-snug border-l-4 border-l-[#cc0000] pl-4"
          style={{
            paddingTop: "20px",
            marginTop: "4px",
            fontSize: "14px",
            lineHeight: 1.75,
            borderLeftWidth: "3px",
          }}
        >
          Kapımız herkese açık —
          <br />
          tıpkı restoranımız gibi.
        </blockquote>
      </div>
    </section>
  );
}
