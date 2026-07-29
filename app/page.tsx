import Image from "next/image";

const KAKAO_URL = "https://pf.kakao.com/_qYlyV";
const PHONE_HREF = "tel:1599-5952";
const ASSET_BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const designs = [
  {
    code: "L · L",
    title: "Low & Loose",
    label: "낮은 절개선 · 여유 있는 디자인",
    image: "low-loose.webp",
    summary:
      "봉합선은 귀두 가까이에 두면서 피부는 여유 있게 남기는 형태입니다. 흉터가 비교적 안쪽에 자리하고 평상시에는 자연스러운 주름이 남는 것이 특징입니다.",
    details: [
      {
        label: "절개선 위치",
        value: "귀두 바로 아래쪽에 가까워 봉합선이 비교적 덜 드러나는 편입니다.",
      },
      {
        label: "피부 여유",
        value: "발기 시 필요한 피부 길이를 충분히 남겨 당김 부담을 줄이는 방향으로 설계합니다.",
      },
      {
        label: "형태적 특징",
        value: "내측 피부가 과도하게 남지 않으면서도 자연스러운 주름과 움직임을 유지합니다.",
      },
    ],
    note: "귀두가 다시 덮일 가능성과 발기 시 여유도를 함께 고려할 수 있어 JJ비뇨기과에서 우선적으로 설명하는 균형형 디자인입니다.",
    tone: "soft",
    recommended: true,
  },
  {
    code: "L · T",
    title: "Low & Tight",
    label: "낮은 절개선 · 탄탄한 디자인",
    image: "low-tight.webp",
    summary:
      "봉합선은 귀두 가까이에 두고 피부 주름은 적게 남기는 형태입니다. 평상시 표면이 매끈하고 정돈되어 보이는 외형을 선호할 때 고려할 수 있습니다.",
    details: [
      {
        label: "절개선 위치",
        value: "귀두 가까이에 위치해 High 타입보다 봉합선이 안쪽에 자리합니다.",
      },
      {
        label: "피부 여유",
        value: "피부를 비교적 팽팽하게 맞춰 평상시 주름이 적고 탄탄해 보입니다.",
      },
      {
        label: "형태적 특징",
        value: "국내에서 흔히 접할 수 있는 형태지만 절제량이 많아지지 않도록 정확한 측정이 중요합니다.",
      },
    ],
    note: "발기 시 길이와 피부 탄력을 충분히 확인하지 않으면 당김이나 불편감이 생길 수 있어 수술 전 여유도 측정이 특히 중요합니다.",
    tone: "tight",
    recommended: false,
  },
  {
    code: "H · L",
    title: "High & Loose",
    label: "높은 절개선 · 여유 있는 디자인",
    image: "high-loose.webp",
    summary:
      "봉합선이 음경 몸통 중간 쪽에 위치하고 피부를 넉넉히 남기는 형태입니다. 전체적인 피부 움직임과 주름이 네 가지 유형 중 비교적 많은 편입니다.",
    details: [
      {
        label: "절개선 위치",
        value: "귀두에서 떨어진 몸통 쪽에 봉합선이 형성되어 High 타입의 특징이 나타납니다.",
      },
      {
        label: "피부 여유",
        value: "평상시와 발기 시 모두 피부가 비교적 넉넉하게 움직일 수 있도록 설계합니다.",
      },
      {
        label: "형태적 특징",
        value: "주름이 자연스럽게 남고 내측 피부가 Low 타입보다 상대적으로 많이 유지됩니다.",
      },
    ],
    note: "피부를 많이 남기면 평상시 귀두가 일부 다시 덮일 수 있으므로 현재 포피 길이와 원하는 노출 정도를 함께 확인해야 합니다.",
    tone: "loose",
    recommended: false,
  },
  {
    code: "H · T",
    title: "High & Tight",
    label: "높은 절개선 · 탄탄한 디자인",
    image: "high-tight.webp",
    summary:
      "봉합선은 음경 몸통 중간 쪽에 두면서 피부 주름을 적게 남기는 형태입니다. 절개선의 위치가 비교적 높고 표면은 팽팽하게 정돈됩니다.",
    details: [
      {
        label: "절개선 위치",
        value: "봉합선이 귀두에서 떨어져 음경 중간에 가까우며 외부에서 위치가 비교적 잘 보일 수 있습니다.",
      },
      {
        label: "피부 여유",
        value: "남는 주름을 줄이는 방향으로 피부를 맞춰 탄탄한 외형을 만듭니다.",
      },
      {
        label: "형태적 특징",
        value: "내측 피부를 상대적으로 많이 남기면서도 표면의 느슨함은 줄인 조합입니다.",
      },
    ],
    note: "발기 시 피부가 부족하면 당김이나 불편감이 생길 수 있어 예상 발기 길이, 피부 탄력과 절제량을 보수적으로 판단해야 합니다.",
    tone: "high",
    recommended: false,
  },
];

const clinicMethods = [
  {
    number: "01",
    icon: "method-sedation.webp",
    title: "선택적 반수면",
    copy: "불안감이 큰 경우 상태와 요청을 확인한 뒤 각성하 반수면 방식을 선택적으로 고려합니다.",
  },
  {
    number: "02",
    icon: "method-dissection.webp",
    title: "확인하며 절제·지혈",
    copy: "조직의 위치와 깊이를 직접 확인하면서 필요한 층을 절제하고 단계적으로 지혈합니다.",
  },
  {
    number: "03",
    icon: "method-design.webp",
    title: "개인 맞춤 심미 디자인",
    copy: "다양한 음경 재건수술 경험을 바탕으로 현재 모양과 피부 여유도를 함께 살핍니다.",
  },
  {
    number: "04",
    icon: "method-suture.webp",
    title: "봉합부까지 고려",
    copy: "봉합 자리에 피부 터널이 생길 가능성을 줄이기 위한 세밀한 봉합 설계를 적용합니다.",
  },
  {
    number: "05",
    icon: "method-fascia.webp",
    title: "표재근막 보존",
    copy: "필요한 범위의 피부와 진피층은 정교하게 절제하고, 그 아래 표재근막층은 가능한 보존하는 방향을 우선합니다.",
  },
];

const protocol = [
  {
    icon: "protocol-diagnosis.webp",
    title: "정밀 진단",
    copy: "발기 시 예상 길이, 피부 이동성, 소대 모양과 길이, 포피 여유도를 함께 확인합니다.",
  },
  {
    icon: "protocol-design.webp",
    title: "절제 범위 디자인",
    copy: "개인별 유형에 맞춰 필요한 만큼의 피부 제거 범위를 설정합니다.",
  },
  {
    icon: "protocol-preservation.webp",
    title: "표재근막 보존",
    copy: "표재근막과 그 안의 림프관·정맥망·미세혈관, 감각신경의 불필요한 손상을 줄입니다.",
  },
  {
    icon: "protocol-suture.webp",
    title: "성형외과적 미세 봉합",
    copy: "6-0 나일론 미세실로 절개선의 높이와 간격을 맞춰 정교하게 봉합합니다.",
  },
  {
    icon: "protocol-recovery.webp",
    title: "회복 관리",
    copy: "상태에 따라 PDRN을 포함한 재생 관리를 선택적으로 적용하고 회복 경과를 확인합니다.",
  },
];

const faqs = [
  {
    q: "포경수술은 성인이라면 꼭 해야 하나요?",
    a: "모든 성인에게 일률적으로 필요한 수술은 아닙니다. 진성포경, 반복되는 귀두포피염, 감돈포경, 지속적인 위생 불편이 있다면 비뇨의학과 진료를 통해 필요성을 판단하는 것이 좋습니다.",
  },
  {
    q: "수술 시간과 마취 방법은 어떻게 되나요?",
    a: "본원 안내 기준으로 국소마취 후 약 20분 내외로 진행되는 경우가 많습니다. 불안감이 큰 경우에는 상담 후 각성하 반수면을 선택적으로 고려할 수 있으며, 실제 시간과 마취 방법은 개인 상태에 따라 달라집니다.",
  },
  {
    q: "수술 시 통증이 심한가요?",
    a: "국소마취를 기본으로 수술 중 통증 부담을 줄이는 데 집중합니다. 수술 후에는 개인에 따라 뻐근함이나 불편감이 있을 수 있어 처방과 관리 안내를 따르는 것이 중요합니다.",
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
    q: "소대와 표재근막을 왜 확인하나요?",
    a: "소대는 음경 아랫면에 있는 구조로 길이와 모양에 따라 수술 디자인이 달라질 수 있습니다. 표재근막에는 림프관과 정맥망, 미세혈관 및 신경 조직이 분포하므로 필요한 절제 범위와 보존할 층을 수술 전후로 세심하게 구분합니다.",
  },
  {
    q: "PDRN 재생 관리는 누구나 받나요?",
    a: "PDRN은 상처 회복을 보조하기 위한 선택적 관리입니다. 적용 여부와 횟수는 수술 범위, 상처 상태, 알레르기 및 기저질환 등을 확인한 뒤 의료진이 안내하며, 회복 속도와 반응에는 개인차가 있습니다.",
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
      <section id="top" className="hero">
        <div className="hero-photo" aria-hidden="true">
          <Image
            src={`${ASSET_BASE}/hero-circumcision-preservation-v14.webp`}
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
                <Image src={`${ASSET_BASE}/kakaotalk-icon.png`} alt="" width={24} height={24} />
                카카오톡 1:1 상담
              </a>
              <a className="button secondary" href={PHONE_HREF}>
                전화 상담 1599-5952
              </a>
            </div>
            <p className="privacy-note">전 직원 남성 의료진 · 1:1 비밀 상담</p>
          </div>
        </div>
      </section>

      <section className="procedure-facts" aria-label="포경수술 기본 안내">
        <div className="shell facts-grid">
          <div>
            <span>ANESTHESIA</span>
            <strong>국소마취</strong>
            <p>수술 중 통증 부담을 낮춰 편안하게 진행</p>
          </div>
          <div>
            <span>PROCEDURE</span>
            <strong>약 20분 내외</strong>
            <p>디자인부터 미세 봉합까지 효율적인 수술 과정</p>
          </div>
          <div>
            <span>DAILY LIFE</span>
            <strong>당일 가벼운 일상</strong>
            <p>입원 부담 없이 빠르게 일상으로 복귀</p>
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

      <section id="indications" className="section indication-section">
        <div className="shell">
          <SectionHeading
            eyebrow="DO I NEED CIRCUMCISION?"
            title={
              <>
                포경수술,
                <br />
                모두에게 필요한 것은 아닙니다
              </>
            }
            description="성인이 되어 자연스럽게 포피가 젖혀지고 위생 관리와 성생활에 불편이 없다면 일률적으로 수술할 필요는 없습니다. 다만 아래 증상이 있다면 정확한 진단을 권합니다."
          />
          <div className="indication-grid">
            <article>
              <span>01</span>
              <div className="indication-icon">
                <Image
                  src={`${ASSET_BASE}/generated-icons/indication-phimosis-v3.webp`}
                  alt=""
                  fill
                  sizes="128px"
                />
              </div>
              <h3>진성포경</h3>
              <p>포피 입구가 너무 좁아 포피가 귀두 뒤로 젖혀지지 않는 경우</p>
            </article>
            <article>
              <span>02</span>
              <div className="indication-icon">
                <Image
                  src={`${ASSET_BASE}/generated-icons/indication-inflammation-v4.webp`}
                  alt=""
                  fill
                  sizes="128px"
                />
              </div>
              <h3>재발성 귀두포피염</h3>
              <p>귀두와 포피의 염증, 분비물, 냄새가 반복되어 일상에 불편한 경우</p>
            </article>
            <article>
              <span>03</span>
              <div className="indication-icon">
                <Image
                  src={`${ASSET_BASE}/generated-icons/indication-paraphimosis.webp`}
                  alt=""
                  fill
                  sizes="128px"
                />
              </div>
              <h3>감돈포경</h3>
              <p>뒤로 젖혀진 포피가 링처럼 음경을 조여 붓기와 통증을 만드는 경우</p>
            </article>
            <article>
              <span>04</span>
              <div className="indication-icon">
                <Image
                  src={`${ASSET_BASE}/generated-icons/indication-hygiene-v3.webp`}
                  alt=""
                  fill
                  sizes="128px"
                />
              </div>
              <h3>지속적인 위생 불편</h3>
              <p>포피 사이의 구지와 악취로 청결 관리가 어렵거나 불편이 반복되는 경우</p>
            </article>
          </div>
          <p className="medical-alert">
            갑작스러운 심한 부종·통증·피부색 변화가 동반된 감돈포경은
            지체하지 말고 의료기관의 진료를 받아야 합니다.
          </p>
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
            description="Low와 High는 봉합선의 위치를, Loose와 Tight는 남기는 피부의 여유도를 뜻합니다. 네 가지 분류는 상담을 돕기 위한 기준이며 실제 디자인은 개인의 해부학적 조건에 맞춰 세밀하게 조정합니다."
          />
          <div className="design-basics" aria-label="포경수술 디자인 용어 안내">
            <div>
              <span>POSITION</span>
              <strong>LOW ↔ HIGH</strong>
              <p>봉합선이 귀두에 가까운지, 음경 몸통 쪽에 가까운지를 구분합니다.</p>
            </div>
            <div>
              <span>SKIN MARGIN</span>
              <strong>LOOSE ↔ TIGHT</strong>
              <p>수술 후 피부 주름과 발기 시 움직임을 위해 어느 정도 여유를 남길지 구분합니다.</p>
            </div>
          </div>
          <div className="design-grid">
            {designs.map((design) => (
              <article className={`design-card ${design.tone}`} key={design.title}>
                <div className="design-visual">
                  <Image
                    src={`${ASSET_BASE}/medical/${design.image}`}
                    alt={`${design.title}: ${design.label} 의료 도식`}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                    className="design-medical-image"
                  />
                  <span className="design-code">{design.code}</span>
                </div>
                <div className="design-content">
                  {design.recommended ? (
                    <span className="recommend-badge">BALANCED CHOICE</span>
                  ) : null}
                  <h3>{design.title}</h3>
                  <p className="design-label">{design.label}</p>
                  <p className="design-summary">{design.summary}</p>
                  <dl className="design-details">
                    {design.details.map((detail) => (
                      <div key={detail.label}>
                        <dt>{detail.label}</dt>
                        <dd>{detail.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="design-note">
                    <strong>디자인 시 확인할 점</strong>
                    <p>{design.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <aside className="decision-card">
            <span className="decision-number">01</span>
            <div>
              <h3>결과의 차이를 결정하는 요소</h3>
              <p>
                네 가지 타입 중 하나를 그대로 적용하는 것이 아니라 평상시 포피의 길이,
                발기 시 예상 길이와 둘레, 피부 탄력, 소대의 형태, 원하는 봉합선 위치를
                함께 확인해야 합니다. 이를 바탕으로 필요한 피부만 절제하고 보존할
                조직과 봉합 위치를 개인별로 조정합니다.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="preservation" className="section preservation-section">
        <div className="shell">
          <div className="preservation-intro-grid">
            <div>
              <SectionHeading
                eyebrow="THE CORE PRINCIPLE"
                title={
                  <>
                    표재근막 보존
                    <br />
                    수술이란?
                  </>
                }
                description="음경 피부 바로 아래에는 다토스 근막(Dartos fascia)이라 불리는 표재근막층이 있습니다. 이 층에는 얕은 혈관·림프관·신경과 평활근 섬유가 분포하며 피부의 이동성과 탄성에 관여합니다."
                inverse
              />
            </div>
            <div className="preservation-principle">
              <p>
                보존 디자인은 계획된 범위의 피부와 진피를 절제하면서, 절제선
                아래의 표재근막은 가능한 한 확인하고 남기는 것을 목표로 합니다.
              </p>
              <div className="preserve-points">
                <div>
                  <span>01</span>
                  <p>피부·진피와 근막층을 구분해 절제 깊이를 계획</p>
                </div>
                <div>
                  <span>02</span>
                  <p>청록색 표재근막층을 보존하는 방향으로 접근</p>
                </div>
                <div>
                  <span>03</span>
                  <p>포피 길이·유착·염증·흉터 상태를 개인별로 반영</p>
                </div>
              </div>
            </div>
          </div>

          <div className="anatomy-card">
            <div className="anatomy-card-head">
              <div>
                <span className="anatomy-badge">ANATOMICAL LAYER COMPARISON</span>
                <h3>어떤 층을 절제하고, 어떤 층을 남기는가</h3>
              </div>
              <div className="anatomy-legend" aria-label="해부학적 층 색상 범례">
                <span className="legend-skin">피부·진피</span>
                <span className="legend-fascia">표재근막</span>
                <span className="legend-deep">심부근막</span>
                <span className="legend-cavernosa">해면체·요도</span>
              </div>
            </div>
            <div className="anatomy-visual">
              <Image
                src={`${ASSET_BASE}/medical/circumcision-layer-comparison-v5.png`}
                alt="왼쪽 일반적인 깊은 절제 예시, 가운데 음경 횡단면, 오른쪽 피부와 진피만 들어 올리고 표재근막을 남긴 보존 절제 예시를 비교한 의료 도식"
                fill
                sizes="(max-width: 760px) 100vw, 1160px"
                className="fascia-medical-image"
              />
              <div className="anatomy-image-titles" aria-hidden="true">
                <div>
                  <span>01</span>
                  <strong>일반적인 포경</strong>
                </div>
                <div>
                  <span>02</span>
                  <strong>음경 횡단면 구조</strong>
                </div>
                <div>
                  <span>03</span>
                  <strong>표재근막 보존 포경</strong>
                </div>
              </div>
              <div className="anatomy-layer-order">
                <span>해면체</span>
                <i aria-hidden="true" />
                <span>백막</span>
                <i aria-hidden="true" />
                <span>심부근막</span>
                <i aria-hidden="true" />
                <span>표재근막</span>
                <i aria-hidden="true" />
                <span>피부</span>
              </div>
            </div>
            <div className="anatomy-comparison-copy">
              <article>
                <p>일반적인 포경은 피부·진피와 함께 표재근막까지 절제됩니다.</p>
              </article>
              <article>
                <p>해면체를 백막이 감싸고, 그 바깥을 심부근막·표재근막·피부가 차례로 둘러쌉니다.</p>
              </article>
              <article>
                <p>표재근막 보존 포경은 피부·진피만 절제하고 표재근막은 남깁니다.</p>
              </article>
            </div>
            <p className="anatomy-caveat">
              그림은 층위 이해를 위한 도식입니다. 실제 절제 범위와 보존 가능 범위는
              개인의 해부학적 상태와 수술 중 소견에 따라 달라질 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section id="jj-method" className="section clinic-method-section">
        <div className="shell">
          <SectionHeading
            eyebrow="THE JJ DIFFERENCE"
            title="JJ비뇨기과는 수술의 전 과정을 봅니다"
            description="마취 선택부터 절제, 지혈, 봉합, 조직 보존까지 각 단계가 회복과 결과에 영향을 줄 수 있어 하나의 과정으로 설계합니다."
          />
          <div className="method-grid">
            {clinicMethods.map((method) => (
              <article key={method.title}>
                <span>{method.number}</span>
                <div className="method-icon">
                  <Image
                    src={`${ASSET_BASE}/generated-icons/${method.icon}`}
                    alt=""
                    fill
                    sizes="110px"
                  />
                </div>
                <h3>{method.title}</h3>
                <p>{method.copy}</p>
              </article>
            ))}
          </div>
          <p className="method-note">
            적용 가능한 마취 및 수술 방식은 문진과 진찰 후 의료진이 안내합니다.
          </p>

          <div className="method-stories">
            <article className="method-story">
              <div
                className="method-story-media preop-design-media"
                aria-label="발기 시점까지 고려하는 세 가지 사전 디자인 항목"
              >
                <div className="preop-icon-grid">
                  <div className="preop-icon-item">
                    <div className="preop-icon">
                      <Image
                        src={`${ASSET_BASE}/generated-icons/preop-measure-v2.webp`}
                        alt=""
                        fill
                        sizes="180px"
                      />
                    </div>
                    <strong>길이·둘레 변화</strong>
                  </div>
                  <div className="preop-icon-item">
                    <div className="preop-icon">
                      <Image
                        src={`${ASSET_BASE}/generated-icons/preop-mobility-v2.webp`}
                        alt=""
                        fill
                        sizes="180px"
                      />
                    </div>
                    <strong>피부 이동성·여유도</strong>
                  </div>
                  <div className="preop-icon-item">
                    <div className="preop-icon">
                      <Image
                        src={`${ASSET_BASE}/generated-icons/preop-frenulum-v4.webp`}
                        alt=""
                        fill
                        sizes="180px"
                      />
                    </div>
                    <strong>소대·봉합선 위치</strong>
                  </div>
                </div>
              </div>
              <div className="method-story-copy">
                <span>STEP 01 · DESIGN</span>
                <h3>발기 시점까지 고려한 사전 디자인</h3>
                <p>
                  평상시 모습만 보고 절제량을 정하지 않습니다. 발기 시 예상 길이와
                  음경 피부의 이동성, 포피 여유도, 소대의 모양과 길이를 함께 확인해
                  수술 후 피부가 과도하게 당기지 않도록 절제 범위를 설계합니다.
                </p>
                <ul>
                  <li>예상 발기 길이와 둘레 변화 확인</li>
                  <li>피부 이동성과 남길 여유도 평가</li>
                  <li>소대 위치·길이와 원하는 봉합선 위치 확인</li>
                </ul>
              </div>
            </article>

            <article className="method-story reverse">
              <div className="method-story-media">
                <Image
                  src={`${ASSET_BASE}/reference/electrosurgical-dissection.webp`}
                  alt="조직 위치를 확인하며 전기소작기로 절제와 지혈을 진행하는 단면 도식"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <div className="method-story-copy">
                <span>STEP 02 · DISSECTION</span>
                <h3>보이는 층을 확인하며 절제와 지혈</h3>
                <p>
                  피부 아래 구조를 확인하지 않은 채 깊이를 일률적으로 정하지 않습니다.
                  절제할 층과 보존할 층을 구분하고, 조직의 위치를 직접 확인하면서
                  필요한 범위만 다루며 출혈 부위는 단계적으로 지혈합니다.
                </p>
                <div className="method-callout">
                  에너지 기구의 종류보다 중요한 것은 조직의 깊이와 위치를 확인하고
                  주변 구조에 불필요한 열 손상을 주지 않도록 사용하는 과정입니다.
                </div>
              </div>
            </article>

            <article className="method-story">
              <div className="method-story-media">
                <Image
                  src={`${ASSET_BASE}/reference/fascia-layer-preservation.webp`}
                  alt="피부 아래 표재근막과 심부 조직의 층을 구분한 보존 수술 도식"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <div className="method-story-copy">
                <span>STEP 03 · PRESERVATION</span>
                <h3>표재근막과 소대를 가능한 보존</h3>
                <p>
                  표재근막에는 림프관과 정맥망, 모세혈관 및 감각신경 조직이 분포합니다.
                  필요한 피부층을 정교하게 제거하되 그 아래 표재근막의 불필요한 손상을
                  줄이고, 음경 아랫면의 소대 역시 위치와 길이를 확인해 보존 범위를
                  결정합니다.
                </p>
                <ul>
                  <li>림프관·정맥망과 미세혈관 구조 존중</li>
                  <li>감각신경에 대한 불필요한 손상 최소화 지향</li>
                  <li>소대 형태를 살펴 자연스러운 하부 라인 고려</li>
                </ul>
              </div>
            </article>

            <article className="method-story reverse">
              <div className="method-story-media">
                <Image
                  src={`${ASSET_BASE}/reference/microsuture-6-0.webp`}
                  alt="6-0 나일론 미세 봉합사와 머리카락의 두께를 비교한 이미지"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <div className="method-story-copy">
                <span>STEP 04 · MICRO SUTURE</span>
                <h3>6-0 나일론으로 세밀하게 맞추는 봉합</h3>
                <p>
                  본원은 머리카락과 비슷한 수준으로 가는 6-0 나일론 미세 봉합사를
                  사용합니다. 절개선 양쪽의 높이와 간격을 촘촘하게 맞춰 봉합선이
                  울퉁불퉁하거나 벌어지는 부담을 줄이고, 정돈된 라인으로 회복되도록
                  마무리합니다.
                </p>
                <div className="method-callout">
                  흉터의 정도는 개인 체질, 상처 장력, 감염 여부와 사후 관리에 따라서도
                  달라질 수 있습니다.
                </div>
              </div>
            </article>

            <article className="method-story">
              <div className="method-story-media">
                <Image
                  src={`${ASSET_BASE}/reference/pdrn-recovery-effects.webp`}
                  alt="포경수술 후 PDRN 재생 관리의 목적을 설명하는 참고 인포그래픽"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <div className="method-story-copy">
                <span>STEP 05 · RECOVERY CARE</span>
                <h3>수술로 끝나지 않는 회복 관리</h3>
                <p>
                  봉합 후에는 상처 상태를 확인하고 필요할 경우 PDRN을 포함한 재생
                  관리를 선택적으로 안내합니다. PDRN은 조직 회복과 관련해 연구되고
                  있는 물질로, 수술 후 관리에서는 상처 회복을 보조하는 목적으로
                  고려할 수 있습니다.
                </p>
                <div className="method-callout caution">
                  재생 관리는 모든 환자에게 동일하게 적용하지 않습니다. 기대 효과와
                  적용 횟수는 수술 범위와 개인 상태에 따라 달라지며 의료진의 진찰 후
                  결정합니다.
                </div>
              </div>
            </article>
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
                <div className="step-icon">
                  <Image
                    src={`${ASSET_BASE}/generated-icons/${step.icon}`}
                    alt=""
                    fill
                    sizes="110px"
                  />
                </div>
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
              <div className="factor-icon">
                <Image
                  src={`${ASSET_BASE}/generated-icons/protocol-diagnosis.webp`}
                  alt=""
                  fill
                  sizes="120px"
                />
              </div>
              <h3>적정 절제량</h3>
              <p>
                과도한 피부 절제로 인한 발기 시 당김이나 통증을 예방하기 위해
                치밀한 사전 측정을 진행합니다.
              </p>
            </article>
            <article>
              <span>02</span>
              <div className="factor-icon">
                <Image
                  src={`${ASSET_BASE}/generated-icons/protocol-design.webp`}
                  alt=""
                  fill
                  sizes="120px"
                />
              </div>
              <h3>정밀 디자인</h3>
              <p>
                개인별 해부학적 특성과 곡선을 고려하여 수술 후 흉터 위치와
                전체적인 모양을 결정합니다.
              </p>
            </article>
            <article>
              <span>03</span>
              <div className="factor-icon">
                <Image
                  src={`${ASSET_BASE}/generated-icons/protocol-preservation.webp`}
                  alt=""
                  fill
                  sizes="120px"
                />
              </div>
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
            <p className="eyebrow">EXPECTED BENEFITS</p>
            <h2>
              수술 전,
              <br />
              기대와 한계를 함께 확인합니다
            </h2>
            <p>
              포경수술은 위생 관리와 반복 염증 감소에 도움을 줄 수 있지만,
              모든 증상을 해결하는 수술은 아닙니다. 현재 불편의 원인을 먼저
              구분해야 합니다.
            </p>
          </div>
          <ul>
            <li>
              <span>01</span>위생 관리가 쉬워질 수 있습니다
            </li>
            <li>
              <span>02</span>귀두·포피의 반복 염증 부담을 줄이는 데 도움을 줄 수 있습니다
            </li>
            <li>
              <span>03</span>원하는 흉터 위치와 피부 여유도를 사전에 설계합니다
            </li>
            <li>
              <span>04</span>성병 예방을 위해서는 수술 후에도 안전한 성생활이 필요합니다
            </li>
          </ul>
        </div>
      </section>

      <section className="section doctor-section">
        <div className="shell doctor-grid">
          <div className="doctor-photo">
            <Image
              src={`${ASSET_BASE}/doctor-philosophy-original-v10.png`}
              alt="어두운 수술실에서 전기 소작기 핸드피스로 정밀 수술을 진행하는 강태진 대표원장"
              fill
              sizes="(max-width: 760px) 100vw, 44vw"
            />
            <span>정밀한 수술 · 세심한 보존</span>
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

      <section className="section visit-section">
        <div className="shell visit-grid">
          <div>
            <p className="eyebrow">CONTACT &amp; LOCATION</p>
            <h2>상담부터 수술·회복까지<br />한 공간에서 이어집니다</h2>
          </div>
          <div className="visit-details">
            <div>
              <span>ADDRESS</span>
              <strong>서울특별시 강남구 강남대로 238<br />스카이쏠라빌딩 13·14층</strong>
              <p>진료·상담 14층 / 수술실·회복실 13층</p>
            </div>
            <div>
              <span>SUBWAY</span>
              <strong>3호선·신분당선 양재역 4번 출구</strong>
              <p>출구 바로 왼쪽 양재미소약국 건물</p>
            </div>
            <div>
              <span>CONTACT</span>
              <strong>1599-5952</strong>
              <p>일요일·공휴일 휴무 / 방문 전 예약 권장</p>
            </div>
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
              <Image src={`${ASSET_BASE}/kakaotalk-icon.png`} alt="" width={25} height={25} />
              카카오톡 빠른 상담
            </a>
            <a className="button white" href={PHONE_HREF}>
              전화 상담 1599-5952
            </a>
          </div>
          <small>사전 예약제로 운영되며 상담 내용은 철저히 보호됩니다.</small>
        </div>
      </section>

      <div className="mobile-bar" aria-label="빠른 상담">
        <a href={PHONE_HREF}>전화 상담</a>
        <a href={KAKAO_URL} target="_blank" rel="noreferrer">카카오톡 상담</a>
      </div>
    </main>
  );
}
