export function Gazete() {
  return (
    <div
      className="overflow-hidden border-[3px] border-[#1a1a1a] py-10 px-6 md:px-16"
      style={{
        background: "#f4eedc",
        fontFamily: "Georgia, serif",
        boxSizing: "border-box",
        borderStyle: "double",
      }}
    >
      {/* Masthead */}
      <div className="text-center">
        <p
          className="text-[12px] tracking-[0.12em] text-[#555]"
          style={{ letterSpacing: "0.12em" }}
        >
          KURULUŞ GÜNÜ — İLK BASKI · %100 TAZE MALZEME
        </p>
        <div className="flex justify-center my-2">
          <div
            className="bg-red-600 text-white font-hero tracking-[0.2em] text-sm md:text-base uppercase flex items-center justify-center gap-2 shrink-0"
            style={{ height: 44, paddingLeft: 24, paddingRight: 24 }}
            aria-hidden
          >
            <span>BULLS</span>
            <span className="text-[14px] italic font-normal" style={{ letterSpacing: "0.08em", fontFamily: "Georgia, serif" }}>GAZETESİ</span>
          </div>
        </div>
        <div
          className="border-b-[3px] border-[#1a1a1a] pb-3 mb-2"
          style={{ borderBottomStyle: "double", paddingBottom: "0.75rem", marginBottom: "0.5rem" }}
        />
      </div>

      {/* Sub-header */}
      <div
        className="flex justify-between text-[12px] text-[#555] border-b border-[#1a1a1a] pb-1 mb-4"
        style={{ paddingBottom: 4, marginBottom: "1rem" }}
      >
        <span>SAYI: 001</span>
        <span className="italic">Aynı masada oturup aynı tadı paylaşmanın hikayesi.</span>
        <span>BULLS BURGER</span>
      </div>

      {/* Manşet */}
      <div className="text-center mb-4 border-b border-[#aaa] pb-3" style={{ marginBottom: "1rem", paddingBottom: "0.75rem" }}>
        <h2 className="text-[32px] font-bold text-[#1a1a1a]" style={{ fontSize: 32, fontWeight: 700 }}>
          &ldquo;BİR DAHAKİNE BİZE DE YAP.&rdquo;
        </h2>
        <p className="text-[14px] italic text-[#555] mt-1">
          — Komşular kapıya dayandı, bugünkü ilk şubemiz doğdu
        </p>
      </div>

      {/* 3 kolon */}
      <div className="grid gap-6 md:gap-0 md:grid-cols-[1fr_1.5px_1fr_1.5px_1fr]">
        {/* Sol kolon */}
        <div className="mb-6 md:mb-0 px-0 md:px-5">
          <p className="text-[14px] leading-[1.8] text-justify text-[#1a1a1a] mb-3" style={{ margin: "0 0 0.75rem" }}>
            Bulls Burger, sadece iyi bir burger yemek değil; aynı masada oturup aynı tadı paylaşmanın hikayesi. Bu hikaye, bir mangal kokusu ve etin tuzla buluştuğu ilk andan başlıyor.
          </p>
          <p className="text-[14px] leading-[1.8] text-justify text-[#1a1a1a] mb-3" style={{ margin: "0 0 0.75rem" }}>
            Kurucumuz yıllar önce, ailesiyle pazar sabahları yaptığı kahvaltıların ardından mutfağa girip denemeler yapardı. <strong>&ldquo;Evde de dışarıdaki gibi bir burger yapılabilir mi?&rdquo;</strong> sorusunun peşine düştü.
          </p>
          <p className="text-[14px] leading-[1.8] text-justify text-[#1a1a1a] mb-3" style={{ margin: "0 0 0.75rem" }}>
            Malzeme seçiminden köftedeki baharat dengesine, sosun kıvamından ekmeğin çıtırlığına kadar her detayı evinde, sevdikleriyle test etti.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gazete2.png"
            alt="Taze malzeme, doğru pişirim"
            style={{
              width: "100%",
              height: 155,
              objectFit: "cover",
              objectPosition: "50% 65%",
              border: "1px solid #aaa",
              filter: "grayscale(100%) contrast(1.1) brightness(0.92)",
              display: "block",
              marginTop: "0.75rem",
            }}
          />
          <p
            className="text-[11px] italic text-center"
            style={{ color: "#444", marginTop: 5, marginBottom: 0 }}
          >
            Taze malzeme, doğru pişirim — her gün, her tabak.
          </p>
        </div>

        {/* Kolon ayracı — sadece desktop */}
        <div
          className="hidden md:block"
          style={{
            background: "#999",
            width: "1.5px",
            margin: "0 14px",
            alignSelf: "stretch",
          }}
        />

        {/* Orta kolon */}
        <div className="mb-6 md:mb-0 px-0 md:px-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gazete.png"
            alt="Kurucumuz ilk tarifini test ederken"
            className="w-full block border border-[#aaa]"
            style={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              objectPosition: "50% 20%",
              filter: "grayscale(100%) contrast(1.15) brightness(0.9)",
            }}
          />
          <p
            className="italic text-center"
            style={{
              fontSize: "12px",
              color: "#444",
              marginTop: 6,
              marginBottom: "0.75rem",
            }}
          >
            Kurucumuz ilk tarifini test ederken — lezzet hiç değişmedi.
          </p>
          <blockquote
            className="border-l-[3px] border-[#cc0000] py-3 px-4 my-3"
            style={{
              background: "rgba(204,0,0,0.06)",
              padding: "0.75rem 1rem",
              margin: "0.75rem 0",
              borderRadius: 0,
            }}
          >
            <p className="text-[14px] italic text-[#1a1a1a] leading-[1.8]">
              İyi yemek, paylaşıldığında anlam kazanır. Biz de bu masada herkesi ağırlamak için buradayız.
            </p>
          </blockquote>
          <p className="text-[14px] leading-[1.8] text-justify text-[#1a1a1a] mb-3" style={{ margin: "0 0 0.75rem" }}>
            Zamanla komşular, arkadaşlar kapıyı çalmaya başladı; &ldquo;Bir dahakine bize de yap&rdquo; dediler. O <em className="italic" style={{ color: "#cc0000" }}>&ldquo;bir dahakine&rdquo;</em> bugünkü ilk şubemiz oldu.
          </p>
        </div>

        {/* Kolon ayracı — sadece desktop */}
        <div
          className="hidden md:block"
          style={{
            background: "#999",
            width: "1.5px",
            margin: "0 14px",
            alignSelf: "stretch",
          }}
        />

        {/* Sağ kolon */}
        <div className="mb-0 px-0 md:px-5">
          <p className="text-[14px] leading-[1.8] text-justify text-[#1a1a1a] mb-3" style={{ margin: "0 0 0.75rem" }}>
            Adımızı &ldquo;Bulls&rdquo; seçmemizin sebebi sadece güç değil; <strong>inat ve tutku.</strong> Kaliteden ödün vermemek, her tabağı ilk günkü heyecanla hazırlamak, mahalledeki dükkân sıcaklığını büyütürken kaybetmemek… Bunlar bizi bugüne taşıyan değerler.
          </p>
          <p className="text-[14px] leading-[1.8] text-justify text-[#1a1a1a] mb-3" style={{ margin: "0 0 0.75rem" }}>
            Hâlâ her burgeri aynı titizlikle hazırlıyoruz: <strong>taze malzeme, doğru pişirim, sade ve net lezzet.</strong> Süsleme değil, tadı öne çıkaran tarifler.
          </p>
          <p className="text-[14px] leading-[1.8] text-justify text-[#1a1a1a] mb-3" style={{ margin: "0 0 0.75rem" }}>
            Bugün birden fazla noktada olabiliriz ama zihniyetimiz hep aynı kaldı: gelen her misafiri evdeki misafir gibi karşılamak. İster tek başına bir öğle yemeği, ister doğum günü kutlaması, ister &ldquo;bugün canım burger çekti&rdquo; anı olsun; kapımız herkese açık. Hikayemiz, sizin masanızda devam ediyor— <strong style={{ color: "#cc0000" }}>her ısırıkta Bulls imzasıyla.</strong>
          </p>
        </div>
      </div>

      {/* Köşe Yazıları — ikinci bölüm */}
      <div className="mt-6 md:px-0" style={{ marginTop: "1.5rem" }}>
        <p
          className="text-center"
          style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#cc0000" }}
        >
          —— KÖŞE YAZILARI ——
        </p>
        <div
          className="grid gap-6 md:gap-0 md:grid-cols-[1fr_1.5px_1fr_1.5px_1fr] mb-0"
          style={{
            borderTop: "2px solid #1a1a1a",
            paddingTop: "1rem",
            marginTop: 0,
          }}
        >
          {/* Sol köşe — Bugünün Menüsü */}
          <div className="mb-8 md:mb-0 px-0 md:px-5">
            <h3
              className="text-[16px] font-bold text-[#1a1a1a] border-b border-[#aaa] mb-3"
              style={{ paddingBottom: 4, marginBottom: "0.75rem" }}
            >
              BİZ NE ÖNERİYORUZ?
            </h3>
            <p className="text-[11px] italic text-[#555] mb-3" style={{ marginBottom: "0.75rem" }}>
              Editörün önerdiği beş seçki
            </p>
            {[
              { name: "Bulls Burger", price: "295 TL", desc: "Çift smash köfte, karamelize soğan ve Bulls imzalı özel sos." },
              { name: "Double Trouble", price: "345 TL", desc: "İçinde gizli çıtır soğan halkası olan, tok ve çıtır burger." },
              { name: "Trüf mü Dedim?", price: "365 TL", desc: "Mantar sote, isli kaşar ve hafif trüf mayo ile gurme lezzet." },
              { name: "Biscoff Crunch Shake", price: "195 TL", desc: "Bisküvi ezmesi ve kıtır dokunuş: menünün en konuşulanı." },
              { name: "Mac & Cheese Balls", price: "175 TL", desc: "Dışı çıtır, içi akışkan. Yanında hafif acı sosla efsane." },
            ].map((item) => (
              <div
                key={item.name}
                className="border-b border-[#bbb] py-1.5"
                style={{ borderBottomStyle: "dotted", padding: "5px 0" }}
              >
                <div className="flex justify-between">
                  <span className="text-[13px] font-bold text-[#1a1a1a]">{item.name}</span>
                  <span className="text-[13px] text-[#cc0000] font-bold">{item.price}</span>
                </div>
                <p className="text-[12px] italic text-[#555] mt-0.5" style={{ lineHeight: 1.5, marginTop: 2 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Kolon ayracı — desktop */}
          <div
            className="hidden md:block"
            style={{ background: "#aaa", width: "1.5px", margin: "0 14px", alignSelf: "stretch" }}
          />

          {/* Orta köşe — Okuyucu Postası */}
          <div className="mb-8 md:mb-0 px-0 md:px-5">
            <h3
              className="text-[16px] font-bold text-[#1a1a1a] border-b border-[#aaa] mb-3"
              style={{ paddingBottom: 4, marginBottom: "0.75rem" }}
            >
              OKUYUCU POSTASI
            </h3>
            {[
              { quote: "Bulls'a ilk gittiğimde sıradan bir burger yeri sandım. Double Trouble'ı ısırdıktan sonra haftalığım çıktı.", sig: "Mert K., İstanbul" },
              { quote: "Trüf mü Dedim? ismi kadar lezzeti de şaşırtıcı. Gurme ama abartısız — tam benim tarzım.", sig: "Selin A., İstanbul" },
              { quote: "Mac & Cheese Balls olmasa eksik kalır her ziyaret. Yanında jalapeno sos şart.", sig: "Emre T., İstanbul" },
            ].map((item, i) => (
              <div key={i} className="border-b border-[#ddd] my-3" style={{ margin: "0.75rem 0" }}>
                <span className="text-[40px] text-[#cc0000] leading-tight block" style={{ lineHeight: 0.8, marginBottom: 4, fontFamily: "Georgia, serif" }}>&ldquo;</span>
                <p className="text-[14px] italic text-[#1a1a1a] text-justify" style={{ lineHeight: 1.7 }}>{item.quote}</p>
                <p className="text-[12px] text-[#555] mt-1" style={{ marginTop: 4 }}>— {item.sig}</p>
              </div>
            ))}
          </div>

          {/* Kolon ayracı — desktop */}
          <div
            className="hidden md:block"
            style={{ background: "#aaa", width: "1.5px", margin: "0 14px", alignSelf: "stretch" }}
          />

          {/* Sağ köşe — Bildiniz mi? */}
          <div className="mb-8 md:mb-0 px-0 md:px-5">
            <h3
              className="text-[16px] font-bold text-[#1a1a1a] border-b border-[#aaa] mb-3"
              style={{ paddingBottom: 4, marginBottom: "0.75rem" }}
            >
              BUNLARI BİLİYOR MUSUNUZ?
            </h3>
            {[
              "Bulls Burger'in imza sosu, kurucunun pazar sabahı kahvaltılarında denediği ilk tariften bugüne hiç değişmedi.",
              "Smash burger tekniği, etin yüksek ısıda tava yüzeyine bastırılmasıyla ortaya çıkan Maillard reaksiyonu sayesinde o çıtır karamelize kenarları oluşturur.",
              "Her gün sabah açılmadan önce taze malzeme hazırlığı yapılır. Dünden kalan köfte Bulls mutfağında yoktur.",
              "Trüf mü Dedim? burgeri menüye girdiği ilk haftada şubenin en çok sipariş edilen ikinci ürünü oldu.",
            ].map((text, i) => (
              <div key={i} className="flex border-b border-[#ddd] py-2.5" style={{ borderBottom: "1px solid #ddd", padding: "0.6rem 0" }}>
                <span className="text-[#cc0000] text-[15px] mr-1.5 shrink-0" style={{ marginRight: 6 }}>★</span>
                <p className="text-[14px] text-[#1a1a1a] m-0" style={{ lineHeight: 1.75 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
