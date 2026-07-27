import Image from "next/image";

const KAKAO_URL = "https://pf.kakao.com/_qYlyV";
const PHONE_HREF = "tel:1599-5952";

const designs = [
  {
    code: "L · L",
    title: "Low & Loose",
    label: "낮은 절개선 · 여유 있는 디자인",
    tone: "soft",
  },
  {
    code: "L · T",
    title: "Low & Tight",
    label: "낮은 절개선 · 탄탄한 디자인",
    tone: "tight",
  },
  {
    code: "H · T",
    title: "High & Tight",
    label: "높은 절개선 · 탄탄한 디자인",
    tone: "high",
  },
  {
    code: "H · L",
    title: "High & Loose",
    label: "높은 절개선 · 여유 있는 디자인",
    tone: "loose",
  },
];

const protocol = [
  {
    title: "정밀 진단",
    copy: "발기 시 예상 길이, 소대 모양, 피부 여유도를 세심하게 측정합니다.",
  },
  {
    title: "절제 범위 디자인",
    copy: "개인별 유형에 맞춰 필요한 만큼의 피부 제거 범위를 설정합니다.",
  },
  {
    title: "표재근막 보존",
    copy: "피부 하부 근막과 미세혈관망을 가능한 온전히 보존합니다.",
  },
  {
    title: "성형외과적 미세 봉합",
    copy: "정교한 봉합으로 흉터 부담을 줄이고 자연스러운 라인을 구현합니다.",
  },
  {
    title: "회복 관리",
    copy: "PDRN 주사 케어를 포함한 단계별 회복 관리를 진행합니다.",
  },
];

const faqs = [
  {
    q: "수술 시 통증이 심한가요?",
    a: "단계별 무통 국소마취 시스템을 시행하여 수술 중은 물론 수술 후 통증까지 줄이는 데 집중합니다.",
  },
  {
    q: "회복 기간은 얼마나 걸리나요?",
    a: "수술 당일 가벼운 일상생활이 가능하며, 일반적으로 약 1~2주에 걸쳐 회복됩니다. 개인의 상태에 따라 차이가 있을 수 있습니다.",
  },
  {
    q: "운동은 언제부터 가능한가요?",
    a: "가벼운 산책이나 일상 활동은 당일부터 가능하며, 격렬한 운동이나 헬스는 보통 2~3주 후를 권장합니다.",
  },
  {
    q: "성관계는 언제부터 가능한가요?",
    a: "조직이 안정적으로 회복될 수 있도록 수술 후 약 4주 뒤부터를 권장하며, 정확한 시점은 경과 확인 후 안내합니다.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  inverse?: boolean;
}) {
  return (
    <div className={`section-heading ${inverse ? "inverse" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="JJ비뇨기과 포경수술 페이지 상단">
            <Image
              src="/brand/jj-horizontal.png"
              alt="JJ비뇨기과"
              width={170}
              height={44}
              priority
            />
          </a>
          <nav className="desktop-nav" aria-label="주요 메뉴">
            <a href="#design">맞춤 디자인</a>
            <a href="#preservation">표재근막 보존</a>
            <a href="#protocol">수술 프로토콜</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="header-cta" href={KAKAO_URL} target="_blank" rel="noreferrer">
            빠른 상담
          </a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero-photo" aria-hidden="true">
          <Image
            src="/doctor/consultation-medical.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
        </div>
        <div className="hero-wash" aria-hidden="true" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="hero-kicker">
              PRESERVATION DESIGN CIRCUMCISION
            </p>
            <h1>
              포경수술은
              <span>얼마나 제거하느냐보다</span>
              <strong>무엇을 남기느냐가 중요합니다.</strong>
            </h1>
            <p className="hero-lead">
              개인의 해부학적 특징에 맞춘 디자인과
              <br />
              표재근막 보존 중심의 섬세한 수술
            </p>
            <div className="hero-actions">
              <a className="button primary" href={KAKAO_URL} target="_blank" rel="noreferrer">
                <Image src="/kakaotalk-icon.png" alt="" width={24} height={24} />
                카카오톡 1:1 상담
              </a>
              <a className="button secondary" href={PHONE_HREF}>
                전화 상담 1599-5952
              </a>
            </div>
            <p className="privacy-note">전 직원 남성 의료진 · 1:1 비밀 상담</p>
          </div>
        </div>
        <div className="hero-proof">
          <div className="shell proof-grid">
            <div>
              <strong>20+</strong>
              <span>남성수술 임상경력</span>
            </div>
            <div>
              <strong>10,000+</strong>
              <span>누적 시술 경험</span>
            </div>
            <div>
              <strong>98%+</strong>
              <span>환자 만족도</span>
            </div>
          </div>
        </div>
      </section>

      <section className="intro section">
        <div className="shell intro-grid">
          <div className="intro-mark" aria-hidden="true">
            <span>20</span>
            <small>YEARS</small>
          </div>
          <div>
            <p className="eyebrow">EXPERIENCE MAKES THE DIFFERENCE</p>
            <h2>풍부한 임상경험이 만드는 우수한 차이</h2>
          </div>
          <div className="intro-copy">
            <p>
              20년 이상 쌓아온 비뇨의학과 수술 노하우와 10,000건 이상의
              누적 시술 경험을 바탕으로 안전하고 섬세한 수술을 지향합니다.
            </p>
            <p>
              개인 맞춤형 디자인과 표재근막 보존을 중심으로 정서적·해부학적
              만족도를 함께 고려합니다.
            </p>
          </div>
        </div>
      </section>

      <section id="design" className="section design-section">
        <div className="shell">
          <SectionHeading
            eyebrow="PERSONALIZED DESIGN"
            title={
              <>
                맞춤형 포경수술에도
                <br />
                여러 가지 디자인이 있습니다
              </>
            }
            description="모든 수술을 같은 방식으로 진행하지 않습니다. 개인의 음경 해부학적 특징과 원하는 결과를 고려해 적합한 디자인을 선택합니다."
          />
          <div className="design-grid">
            {designs.map((design) => (
              <article className={`design-card ${design.tone}`} key={design.title}>
                <div className="design-visual" aria-hidden="true">
                  <span className="design-code">{design.code}</span>
                  <span className="design-line" />
                  <span className="design-zone" />
                </div>
                <h3>{design.title}</h3>
                <p>{design.label}</p>
              </article>
            ))}
          </div>
          <aside className="decision-card">
            <span className="decision-number">01</span>
            <div>
              <h3>결과의 차이를 결정하는 요소</h3>
              <p>
                얼마나 피부를 절제할지, 어떤 조직을 온전히 보존할지에 따라
                수술 후 모양과 기능적 편안함이 달라질 수 있습니다. 정밀한
                사전 디자인으로 당김이나 불균형 가능성을 줄입니다.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="preservation" className="section preservation-section">
        <div className="shell preservation-grid">
          <div>
            <SectionHeading
              eyebrow="THE CORE PRINCIPLE"
              title={
                <>
                  왜 <em>보존</em>이
                  <br />
                  중요할까요?
                </>
              }
              description="피부 아래에는 감각과 회복에 관여하는 미세혈관과 신경 조직이 분포합니다. 필요한 피부만 정교하게 다루고 핵심 구조를 존중하는 것이 보존 수술의 출발점입니다."
              inverse
            />
            <div className="preserve-points">
              <div>
                <span>01</span>
                <p>미세혈관과 신경 조직 손상 최소화 지향</p>
              </div>
              <div>
                <span>02</span>
                <p>개인별 피부 여유도에 맞춘 절제 범위</p>
              </div>
              <div>
                <span>03</span>
                <p>기능과 자연스러운 라인을 함께 고려</p>
              </div>
            </div>
          </div>
          <div className="anatomy-card">
            <div className="anatomy-badge">DARTOS FASCIA</div>
            <div className="anatomy-visual" aria-hidden="true">
              <span className="layer skin">피부층</span>
              <span className="layer fascia">표재근막</span>
              <span className="layer vessel">미세혈관망</span>
              <span className="pulse one" />
              <span className="pulse two" />
              <span className="pulse three" />
            </div>
            <div className="anatomy-copy">
              <h3>표재근막 보존 포경수술</h3>
              <p>
                피부 하부의 표재근막(Dartos fascia)을 무조건 제거하지 않고
                가능한 보존하여, 미세혈관과 신경 조직에 대한 불필요한 손상을
                줄이는 수술 원칙입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="protocol" className="section protocol-section">
        <div className="shell">
          <SectionHeading
            eyebrow="PRESERVATION DESIGN PROTOCOL™"
            title="보존과 디자인을 하나의 과정으로"
            description="진단부터 회복까지, 다섯 단계가 하나의 수술 결과를 만듭니다."
          />
          <ol className="protocol-list">
            {protocol.map((step, index) => (
              <li key={step.title}>
                <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="step-copy">
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section result-section">
        <div className="shell">
          <SectionHeading
            eyebrow="3 KEY FACTORS"
            title="포경수술 결과를 결정하는 3가지"
          />
          <div className="factor-grid">
            <article>
              <span>01</span>
              <h3>적정 절제량</h3>
              <p>
                과도한 피부 절제로 인한 발기 시 당김이나 통증을 예방하기 위해
                치밀한 사전 측정을 진행합니다.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>정밀 디자인</h3>
              <p>
                개인별 해부학적 특성과 곡선을 고려하여 수술 후 흉터 위치와
                전체적인 모양을 결정합니다.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>핵심 조직 보존</h3>
              <p>
                표재근막과 신경, 미세혈관 구조를 가능한 보존하여 기능과 감각의
                안정적인 회복을 고려합니다.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section candidate-section">
        <div className="shell candidate-grid">
          <div>
            <p className="eyebrow">WHO IS IT FOR?</p>
            <h2>
              성인 포경수술,
              <br />
              이런 분께 권합니다
            </h2>
            <p>
              불편을 참고 미루기보다 현재 상태와 필요한 수술 범위를 정확히
              확인하는 것이 먼저입니다.
            </p>
          </div>
          <ul>
            <li>
              <span>01</span>반복되는 만성 염증이 걱정되는 분
            </li>
            <li>
              <span>02</span>위생 관리나 악취 문제로 불편한 분
            </li>
            <li>
              <span>03</span>외형과 모양 개선을 원하는 분
            </li>
            <li>
              <span>04</span>이전 수술 후 재수술을 고려하는 분
            </li>
          </ul>
        </div>
      </section>

      <section className="section doctor-section">
        <div className="shell doctor-grid">
          <div className="doctor-photo">
            <Image
              src="/doctor-procedure-final.png"
              alt="강태진 대표원장"
              fill
              sizes="(max-width: 800px) 100vw, 46vw"
            />
            <span>남성수술 20년 이상</span>
          </div>
          <div className="doctor-copy">
            <p className="eyebrow">DIRECTOR&apos;S PHILOSOPHY</p>
            <h2>강태진 원장의 수술 철학</h2>
            <blockquote>
              “수술의 깊이는
              <br />
              최대한 남기고자 하는 정성에서 나옵니다.”
            </blockquote>
            <p>
              좋은 포경수술은 단순히 피부를 많이 절제하는 수술이 아닙니다.
              환자 개개인의 해부학적 조직 구조와 보존해야 할 기능을 세심하게
              고려한 디자인이 중요합니다.
            </p>
            <div className="doctor-sign">
              <span>JJ비뇨기과 대표원장</span>
              <strong>강태진</strong>
            </div>
            <a className="text-link" href="#consult">
              원장 상담 안내 보기 <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="shell faq-grid">
          <div className="faq-heading">
            <p className="eyebrow">FAQ</p>
            <h2>포경수술 전<br />자주 묻는 질문</h2>
            <p>궁금한 점을 먼저 확인해 보세요.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary>
                  <span>Q.</span>
                  {faq.q}
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="consult" className="final-cta">
        <div className="final-cta-grid" aria-hidden="true" />
        <div className="shell final-cta-inner">
          <p className="eyebrow">PRIVATE 1:1 CONSULTATION</p>
          <h2>나에게 꼭 맞는 보존 디자인,<br />상담에서부터 시작합니다</h2>
          <p>
            미세 표재근막 보존 포경수술 플랜을
            <br className="mobile-only" /> 1:1 비밀 상담으로 확인해 보세요.
          </p>
          <div className="cta-buttons">
            <a className="button kakao" href={KAKAO_URL} target="_blank" rel="noreferrer">
              <Image src="/kakaotalk-icon.png" alt="" width={25} height={25} />
              카카오톡 빠른 상담
            </a>
            <a className="button white" href={PHONE_HREF}>
              전화 상담 1599-5952
            </a>
          </div>
          <small>사전 예약제로 운영되며 상담 내용은 철저히 보호됩니다.</small>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <Image src="/brand/jj-horizontal.png" alt="JJ비뇨기과" width={150} height={38} />
          <p>
            본 페이지의 내용은 일반적인 의료 정보이며, 실제 수술 방법과 회복
            기간은 개인의 상태와 의료진의 판단에 따라 달라질 수 있습니다.
          </p>
          <span>© JJ UROLOGY. ALL RIGHTS RESERVED.</span>
        </div>
      </footer>

      <div className="mobile-bar" aria-label="빠른 상담">
        <a href={PHONE_HREF}>전화 상담</a>
        <a href={KAKAO_URL} target="_blank" rel="noreferrer">카카오톡 상담</a>
      </div>
    </main>
  );
}
