import BookingForm from "./components/BookingForm";
import ReviewsCarousel from "./components/ReviewsCarousel";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#">
            <span className="brand-mark">爪</span>
            <span>泡泡爪宠物洗护</span>
          </a>
          <div className="nav-links">
            <a href="#services">服务</a>
            <a href="#care">护理优势</a>
            <a href="#reviews">口碑</a>
            <a href="#booking">预约</a>
          </div>
          <a className="nav-cta" href="#booking">
            立即预约
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="eyebrow">洁净洗护 · 温柔护理 · 当天可约</div>
            <h1>让每一次洗澡，都像一次安心小度假</h1>
            <p className="hero-copy">
              为猫咪和狗狗提供基础洗护、造型修剪、皮毛护理、除味护理与幼宠适应服务。独立洗护间、可视化流程、低刺激用品，让宠物舒服，家长放心。
            </p>
            <div className="hero-actions">
              <a className="button" href="#booking">
                预约到店
              </a>
              <a className="button secondary" href="#services">
                查看套餐
              </a>
            </div>
          </div>
        </section>

        <div className="stats" aria-label="门店数据">
          <div className="stat">
            <strong>4.9/5</strong>
            <span>顾客综合评分</span>
          </div>
          <div className="stat">
            <strong>30+</strong>
            <span>洗护检查项目</span>
          </div>
          <div className="stat">
            <strong>8年</strong>
            <span>主理人洗护经验</span>
          </div>
        </div>

        <section className="section" id="services">
          <div className="container">
            <div className="section-head">
              <h2>按宠物状态选择服务</h2>
              <p>从日常清洁到精细造型，所有套餐都会先做皮肤、耳道、毛结和情绪状态评估。</p>
            </div>
            <div className="service-grid">
              <article className="card">
                <div className="service-icon">沐</div>
                <h3>基础洁净洗护</h3>
                <p>温和沐浴、吹干梳理、耳眼清洁、指甲修剪、足底毛处理。</p>
                <div className="price">
                  ¥88 <small>起</small>
                </div>
              </article>
              <article className="card">
                <div className="service-icon">剪</div>
                <h3>精致造型修剪</h3>
                <p>根据品种、脸型和季节定制造型，兼顾可爱度与日常好打理。</p>
                <div className="price">
                  ¥168 <small>起</small>
                </div>
              </article>
              <article className="card">
                <div className="service-icon">护</div>
                <h3>皮毛深层护理</h3>
                <p>毛结舒缓、营养护理、除味洁净，适合换毛期和长毛宠物。</p>
                <div className="price">
                  ¥128 <small>起</small>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section alt" id="care">
          <div className="container feature-layout">
            <div className="feature-panel">
              <div className="eyebrow">为什么选择我们</div>
              <h2>洗得干净，也照顾宠物的情绪</h2>
              <p>洗护不是流水线。我们会按宠物体型、毛量、皮肤状态和紧张程度调整水温、吹风距离与操作节奏。</p>
            </div>
            <div className="checks">
              <div className="check">
                <span className="check-dot">✓</span>
                <div>
                  <b>独立消毒工具</b>
                  <br />
                  剪刀、梳具、毛巾分宠使用，工作台一宠一清洁。
                </div>
              </div>
              <div className="check">
                <span className="check-dot">✓</span>
                <div>
                  <b>低刺激洗护用品</b>
                  <br />
                  根据皮肤状态匹配洗剂，减少干痒、泛红和过度留香。
                </div>
              </div>
              <div className="check">
                <span className="check-dot">✓</span>
                <div>
                  <b>透明进度提醒</b>
                  <br />
                  到店确认、开始洗护、完成护理都会及时同步。
                </div>
              </div>
              <div className="check">
                <span className="check-dot">✓</span>
                <div>
                  <b>新手宠物友好</b>
                  <br />
                  幼宠和胆小宠物采用短时适应流程，减少应激。
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <h2>四步完成安心洗护</h2>
              <p>每一步都围绕宠物舒适度和清洁效果设计，流程清楚，时间可控。</p>
            </div>
            <div className="steps">
              <article className="card">
                <div className="step-number">1</div>
                <h3>到店评估</h3>
                <p>检查皮肤、毛结、耳道和宠物情绪，确认适合的套餐。</p>
              </article>
              <article className="card">
                <div className="step-number">2</div>
                <h3>温和清洁</h3>
                <p>按毛发类型清洗揉搓，重点处理脚底、肚皮和尾部。</p>
              </article>
              <article className="card">
                <div className="step-number">3</div>
                <h3>吹干梳理</h3>
                <p>分层吹干并排查潮湿点，降低皮肤问题和毛结复发。</p>
              </article>
              <article className="card">
                <div className="step-number">4</div>
                <h3>护理交付</h3>
                <p>反馈皮毛状态、护理建议和下次洗护周期。</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section alt" id="reviews">
          <div className="container">
            <div className="section-head">
              <h2>宠物家长的真实反馈</h2>
              <p>门店长期服务周边社区，熟悉不同品种、毛发状态和性格的护理需求。</p>
            </div>
            <ReviewsCarousel />
          </div>
        </section>

        <section className="section" id="booking">
          <div className="container booking">
            <div>
              <div className="eyebrow">预约咨询</div>
              <h2>为毛孩子安排一次清爽护理</h2>
              <div className="contact-list">
                <div className="contact-item">
                  <span>营业时间</span>
                  <strong>周一至周日 10:00 - 20:00</strong>
                </div>
                <div className="contact-item">
                  <span>门店地址</span>
                  <strong>内蒙古师范大学盛乐校区附近</strong>
                </div>
                <div className="contact-item">
                  <span>预约电话</span>
                  <strong>021-8888-6688</strong>
                </div>
              </div>
            </div>
            <BookingForm />
          </div>
        </section>

        <section className="section alt" id="location">
          <div className="container store-location">
            <div>
              <div className="eyebrow">门店地址</div>
              <h2>欢迎到店，先让毛孩子熟悉一下环境</h2>
              <p>定位已切换至内蒙古师范大学盛乐校区，靠近师大东路与盛乐大街。建议预约时间提前 5 分钟到达，方便完成基础评估和服务确认。</p>
              <div className="route-tips" aria-label="到店提示">
                <span>可临停</span>
                <span>一层临街</span>
                <span>近师大东路</span>
                <span>支持电话确认路线</span>
              </div>
              <div className="store-details">
                <div className="store-detail">
                  <span>详细地址</span>
                  <strong>内蒙古师范大学盛乐校区</strong>
                </div>
                <div className="store-detail">
                  <span>营业时间</span>
                  <strong>
                    周一至周日
                    <br />
                    10:00 - 20:00
                  </strong>
                </div>
                <div className="store-detail">
                  <span>预约电话</span>
                  <strong>021-8888-6688</strong>
                </div>
                <div className="store-detail">
                  <span>附近交通</span>
                  <strong>呼和浩特市和林格尔县盛乐经济园区师大东路</strong>
                </div>
              </div>
            </div>
            <div className="map-illustration">
              <img src="/assets/shengle-campus-map.png" alt="内蒙古师范大学盛乐校区高清地图插图" />
              <div className="map-caption">
                <strong>内蒙古师范大学盛乐校区</strong>
                <span>师大东路 · 盛乐经济园区</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <span>© 2026 泡泡爪宠物洗护</span>
          <span>专业洗护 | 皮毛护理 | 造型修剪</span>
        </div>
      </footer>
    </>
  );
}
