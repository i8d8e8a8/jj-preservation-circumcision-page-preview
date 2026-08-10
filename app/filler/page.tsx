import Image from "next/image";
import MotionObserver from "../motion-observer";
import "./filler.css";

const KAKAO_URL = "https://pf.kakao.com/_qYlyV";
const PHONE_HREF = "tel:1599-5952";
const ASSET_BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const facts = [
  ["FORMULA", "3세대 히알루론산", "자연스러운 볼륨과 균형을 고려한 필러"],
  ["TECHNIQUE", "3포인트 주입", "불필요한 자극을 줄이는 정교한 주입 설계"],
  ["STORAGE", "4℃ 이하 쿨링", "시술 전까지 일정한 저온 환경으로 보관"],
];

const differences = [
  {
    number: "01",
    title: "형태를 먼저 설계합니다",
    text: "단순히 많은 양을 주입하는 것이 아니라 현재 둘레와 피부 여유, 원하는 변화의 방향을 함께 확인합니다.",
  },
  {
    number: "02",
    title: "3세대 히알루론산을 사용합니다",
    text: "수분을 머금는 히알루론산의 특성을 활용해 부드러운 촉감과 자연스러운 윤곽을 목표로 합니다.",
  },
  {
    number: "03",
    title: "균일한 층에 나누어 주입합니다",
    text: "3포인트 접근으로 주입 경로를 줄이고, 한곳에 뭉치지 않도록 여러 방향으로 세밀하게 배분합니다.",
  },
  {
    number: "04",
    title: "시술 후까지 확인합니다",
    text: "초기 모양과 불편감을 확인하고, 회복 과정에 맞춘 주의사항과 경과 확인 일정을 안내합니다.",
  },
];

const faqs = [
  [
    "필러 음경확대는 어떤 방식으로 진행되나요?",
    "개인의 현재 형태와 희망하는 변화 정도를 확인한 뒤, 계획한 층에 히알루론산 필러를 나누어 주입합니다. 정확한 주입량과 범위는 상담과 진찰 후 결정됩니다.",
  ],
  [
    "시술 후 바로 일상생활이 가능한가요?",
    "대부분 가벼운 일상생활은 가능하지만 붓기, 멍, 뻐근함이 생길 수 있습니다. 음주·사우나·격한 운동 등은 의료진이 안내한 기간 동안 피해주세요.",
  ],
  [
    "효과는 얼마나 유지되나요?",
    "히알루론산 필러는 시간이 지나며 체내에서 서서히 흡수됩니다. 유지 기간은 제품, 주입량, 생활 습관과 개인의 대사 차이에 따라 달라질 수 있습니다.",
  ],
  [
    "필러가 울퉁불퉁해지지는 않나요?",
    "주입 층과 분포, 시술 후 관리가 모양에 영향을 줍니다. JJ비뇨기과는 한 부위에 집중되지 않도록 균일한 분배를 중요하게 보고 경과를 확인합니다.",
  ],
  [
    "부작용이 걱정됩니다.",
    "붓기, 멍, 통증, 염증, 결절이나 비대칭 등이 발생할 수 있습니다. 증상이 지속되거나 갑작스러운 통증·색 변화가 있으면 지체하지 말고 의료진의 진료를 받아야 합니다.",
  ],
];

function SectionTitle({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={`f-section-title ${light ? "light" : ""}`}>
      <p>{eyebrow}</p>
      <h2>{children}</h2>
      {description ? <span>{description}</span> : null}
    </div>
  );
}

export default function FillerPage() {
  return (
    <main className="jj-filler-page">
      <MotionObserver />
      <section className="f-hero" id="top">
        <div className="f-hero-orb orb-one" />
        <div className="f-hero-orb orb-two" />
        <div className="f-shell f-hero-grid">
          <div className="f-hero-copy">
            <p className="f-kicker">JJ MEN&apos;S AESTHETIC · HYALURONIC ACID</p>
            <h1>
              보이는 크기보다
              <strong>자연스러운 균형을 설계합니다</strong>
            </h1>
            <p className="f-hero-lead">
              3세대 히알루론산 필러와 정교한 3포인트 주입으로<br />
              촉감과 형태, 회복까지 세심하게
            </p>
            <div className="f-actions">
              <a href={KAKAO_URL} target="_blank" rel="noreferrer" className="f-primary-btn">
                카카오톡 상담
              </a>
              <a href={PHONE_HREF} className="f-secondary-btn">1599-5952</a>
            </div>
            <small>남성 의료진 · 1:1 비공개 상담</small>
          </div>
          <div className="f-hero-visual" aria-label="3세대 히알루론산 필러 이미지">
            <div className="f-gel-card">
              <Image
                src={`${ASSET_BASE}/filler-source/generation-square.jpg`}
                alt="3세대 히알루론산 필러"
                fill
                priority
                sizes="(max-width: 800px) 85vw, 520px"
              />
            </div>
            <div className="f-floating-note">
              <span>JJ FILLER SYSTEM</span>
              <strong>FORM · BALANCE · DETAIL</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="f-facts" aria-label="필러 핵심 정보">
        <div className="f-shell f-fact-grid">
          {facts.map(([label, title, text], index) => (
            <article key={label} className="motion-reveal" style={{ "--reveal-order": index } as React.CSSProperties}>
              <i>{String(index + 1).padStart(2, "0")}</i>
              <div><span>{label}</span><strong>{title}</strong><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="f-section f-intro">
        <div className="f-shell f-intro-grid">
          <SectionTitle eyebrow="FILLER IS A DESIGN">
            필러는 양보다<br /><em>설계의 차이</em>입니다
          </SectionTitle>
          <div className="f-intro-copy motion-reveal">
            <p>남성 필러는 같은 제품, 같은 양을 사용해도 어디에 어떻게 분배하는지에 따라 인상과 촉감이 달라질 수 있습니다.</p>
            <p>JJ비뇨기과는 현재의 형태를 먼저 살피고, 원하는 변화가 과하지 않게 이어지도록 주입 위치와 방향을 계획합니다.</p>
            <div className="f-quote">“크게 만드는 시술이 아니라, 내 몸에 맞는 균형을 찾는 과정입니다.”</div>
          </div>
        </div>
      </section>

      <section className="f-section f-difference">
        <div className="f-shell">
          <SectionTitle eyebrow="JJ FILLER STANDARD" description="상담부터 시술 후 확인까지, 네 가지 기준을 지킵니다.">
            결과를 만드는 <em>디테일</em>
          </SectionTitle>
          <div className="f-difference-grid">
            {differences.map((item, index) => (
              <article key={item.number} className="motion-reveal" style={{ "--reveal-order": index } as React.CSSProperties}>
                <span>{item.number}</span>
                <div className={`f-line-icon icon-${index + 1}`} aria-hidden="true"><i /><b /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="f-section f-generation">
        <div className="f-shell f-generation-grid">
          <div className="f-generation-art motion-reveal">
            <Image
              src={`${ASSET_BASE}/filler-source/generation-wide.jpg`}
              alt="3세대 히알루론산 필러 음경확대"
              fill
              sizes="(max-width: 900px) 100vw, 54vw"
            />
          </div>
          <div className="f-generation-copy motion-reveal">
            <p className="f-kicker">3RD GENERATION HA FILLER</p>
            <h2>수분을 머금는 소재,<br /><em>자연스러운 볼륨</em></h2>
            <p>히알루론산은 인체에도 존재하는 성분으로 수분을 끌어당기는 성질이 있습니다. JJ비뇨기과는 제품 특성과 조직 상태를 함께 고려해 필러를 선택합니다.</p>
            <ul>
              <li><b>균형</b><span>현재 형태와 목표를 고려한 주입 범위</span></li>
              <li><b>촉감</b><span>부드러운 연결감을 위한 고른 분배</span></li>
              <li><b>회복</b><span>절개 없이 진행하는 주입 방식</span></li>
            </ul>
            <small>제품 선택과 시술 가능 여부는 진료 후 개인별로 결정됩니다.</small>
          </div>
        </div>
      </section>

      <section className="f-section f-technique">
        <div className="f-shell">
          <SectionTitle eyebrow="CONTROLLED TECHNIQUE" description="좋은 결과는 필러가 지나가는 경로까지 세심하게 생각합니다." light>
            더 적은 자극, 더 고른 분배<br /><em>3포인트 주입 테크닉</em>
          </SectionTitle>
          <div className="f-tech-grid">
            <article className="motion-reveal">
              <div className="f-tech-figure"><span>01</span><i /><i /><i /></div>
              <h3>주입 경로를 단순하게</h3>
              <p>최소한의 진입점으로 여러 방향에 접근해 불필요한 피부 자극을 줄이는 데 집중합니다.</p>
            </article>
            <article className="motion-reveal">
              <div className="f-tech-figure spread"><span>02</span><i /><i /><i /></div>
              <h3>층을 따라 균일하게</h3>
              <p>해부학적 구조와 피부 여유를 확인하고 계획한 층을 따라 필러를 고르게 배분합니다.</p>
            </article>
            <article className="motion-reveal">
              <div className="f-tech-figure round"><span>03</span><i /><i /></div>
              <h3>끝이 둥근 캐뉼라</h3>
              <p>날카로운 바늘 대신 끝이 둥근 캐뉼라를 활용해 조직 손상 가능성을 낮추는 방향으로 시술합니다.</p>
            </article>
          </div>
          <div className="f-cooling motion-reveal">
            <div className="f-temp"><b>4</b><span>℃ 이하</span></div>
            <div><p>FILLER COOLING SYSTEM</p><h3>제품은 시술 직전까지 저온으로 관리합니다</h3><span>보관부터 준비, 시술까지 제품별 권장 조건과 위생 원칙을 확인합니다.</span></div>
          </div>
        </div>
      </section>

      <section className="f-section f-doctors">
        <div className="f-shell f-doctor-grid">
          <div className="f-doctor-image motion-reveal">
            <Image src={`${ASSET_BASE}/filler-source/detail-8.png`} alt="JJ비뇨기과 의료진 소개" fill sizes="(max-width: 900px) 100vw, 56vw" />
          </div>
          <div className="f-doctor-copy">
            <p className="f-kicker">MEDICAL TEAM</p>
            <h2>수술 경험 많은<br /><em>꼼꼼한 의료진</em></h2>
            <p>남성의 해부학적 구조를 이해하는 비뇨의학과 의료진과 형태의 균형을 보는 성형외과 협진 의료진이 함께합니다.</p>
            <blockquote>“보이지 않는 고민까지<br />편안하게 이야기할 수 있도록.”</blockquote>
            <span>JJ비뇨기과 의료진</span>
          </div>
        </div>
      </section>

      <section className="f-section f-faq">
        <div className="f-shell f-faq-grid">
          <SectionTitle eyebrow="FREQUENTLY ASKED QUESTIONS">
            많이 물어보시는<br /><em>필러 이야기</em>
          </SectionTitle>
          <div className="f-faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} className="motion-reveal" style={{ "--reveal-order": index } as React.CSSProperties}>
                <summary><span>Q{index + 1}</span>{question}<i>+</i></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="f-section f-visit">
        <div className="f-shell f-visit-grid">
          <div>
            <p className="f-kicker">VISIT JJ UROLOGY</p>
            <h2>신분당선 양재역<br /><em>4번 출구</em></h2>
            <p>서울특별시 강남구 강남대로 238 스카이쏠라빌딩<br />진료·상담 14F / 수술실·회복실 13F</p>
            <div className="f-actions">
              <a href={KAKAO_URL} target="_blank" rel="noreferrer" className="f-primary-btn">상담 예약하기</a>
              <a href={PHONE_HREF} className="f-secondary-btn">전화 상담</a>
            </div>
          </div>
          <div className="f-map">
            <Image src={`${ASSET_BASE}/filler-source/detail-9.png`} alt="JJ비뇨기과 오시는 길" fill sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
        </div>
      </section>

      <section className="f-final">
        <div className="f-shell">
          <p>PRIVATE CONSULTATION</p>
          <h2>나에게 맞는 변화,<br /><strong>편안한 상담에서 시작하세요</strong></h2>
          <a href={KAKAO_URL} target="_blank" rel="noreferrer">1:1 비공개 상담하기 <span>→</span></a>
          <small>시술 효과와 회복 과정은 개인에 따라 차이가 있을 수 있습니다.</small>
        </div>
      </section>
    </main>
  );
}
