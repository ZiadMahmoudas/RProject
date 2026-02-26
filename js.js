document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  // لما نضغط على الثلاث خطوط
  if(menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('open');    // يشغل أنيميشن الـ X
      navLinks.classList.toggle('active'); // ينزل القائمة
    });

    // لما نضغط على أي رابط داخل القائمة (عشان تقفل لوحدها)
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('active');
      });
    });
  }
});
/* ============================================================
   DATA — الأماكن (12 مكان)
============================================================ */
const PLACES = [
  {
    id: 0, cat: 'فرعوني', region: 'القاهرة',
    title: 'المومياوات الملكية',
    short: 'قاعة العرض الحديثة التي تحتضن ملوك وملكات مصر العظماء',
    img: 'images/p1.webp',
    heroImg: 'images/p1.webp',
    body: `<p>تعتبر قاعة المومياوات الملكية في المتحف القومي للحضارة المصرية بالفسطاط درة التاج للسياحة الثقافية. تعرض الصورة مومياوات ملوك مصر داخل فتارين زجاجية حديثة مجهزة بأحدث تقنيات الحفظ.</p>
    <h2>تاريخ بين يديك</h2>
    <p>تم نقل هذه المومياوات في موكب عالمي مهيب لترقد في قاعة مصممة خصيصاً لتحاكي أجواء المقابر الفرعونية الأصلية، مما يضعك وجهاً لوجه أمام صناع التاريخ.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>الموقع: المتحف القومي للحضارة، الفسطاط</li>
    <li>التصوير: غير مسموح داخل قاعة المومياوات حفاظاً عليها</li>
    </ul></div>`
  },
  {
    id: 1, cat: 'إسلامي', region: 'القاهرة',
    title: 'مجموعة قلاوون المعمارية',
    short: 'تحفة العمارة المملوكية ذات الزخارف الحجرية المذهلة في شارع المعز',
    img: 'images/p2.webp',
    heroImg: 'images/p2.webp',
    body: `<p>تُظهر الصورة الواجهة الرائعة لمجموعة السلطان قلاوون في قلب شارع المعز لدين الله الفاطمي. تتميز المجموعة بتداخل الألوان في الحجارة (المشهرة) والمئذنة المربعة الفريدة من نوعها.</p>
    <h2>تفاصيل معمارية مذهلة</h2>
    <p>تضم المجموعة مسجداً ومدرسة وبيمارستان (مستشفى). وتُعد واجهتها وقبتها من أجمل ما ترك المماليك في مصر، حيث تتجلى فيها دقة النحت والزخرفة الإسلامية.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>الموقع: منطقة بين القصرين، شارع المعز</li>
    <li>التوقيت: أجواء الشارع ليلاً لا تُعوض</li>
    </ul></div>`
  },
  {
    id: 2, cat: 'إسلامي', region: 'القاهرة',
    title: 'مسجد محمد علي',
    short: 'تحفة العمارة العثمانية ومسجد الألباستر الذي يزين قلعة صلاح الدين',
    img: 'images/p3.webp',
    heroImg: 'images/p3.webp',
    body: `<p>توضح الصورة الساحة الخارجية لمسجد محمد علي باشا، بمآذنه الممشوقة وقبابه المتعددة المستوحاة من العمارة العثمانية ومساجد إسطنبول التاريخية.</p>
    <h2>إطلالة بانورامية</h2>
    <p>بفضل موقعه المرتفع داخل قلعة صلاح الدين، يوفر المسجد من ساحته الخارجية إطلالة ساحرة تكشف القاهرة بأكملها، حيث يمكنك رؤية مئات المآذن من هذه النقطة.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>الموقع: داخل قلعة صلاح الدين الأيوبي</li>
    <li>لا تفوت: مشاهدة برج الساعة النحاسي بالساحة</li>
    </ul></div>`
  },
  {
    id: 3, cat: 'إسلامي', region: 'القاهرة',
    title: 'أسوار قلعة صلاح الدين',
    short: 'الحصن المنيع الذي حمى القاهرة لقرون وشهد أمجاد وانتصارات مصر',
    img: 'images/p4.webp',
    heroImg: 'images/p4.webp',
    body: `<p>تُظهر الصورة جزءاً من الأسوار الحجرية الضخمة والأبراج الدفاعية لقلعة صلاح الدين الأيوبي، والتي بُنيت فوق جبل المقطم لتكون درعاً حامياً للقاهرة.</p>
    <h2>تاريخ بين الأسوار</h2>
    <p>ظلت هذه القلعة مقراً لحكم مصر لما يقرب من 700 عام. بين هذه الأسوار تكمن قصص من العصور الأيوبية والمملوكية والعثمانية، وتمثل نموذجاً فريداً للعمارة العسكرية.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>الموقع: حي الخليفة، جبل المقطم</li>
    <li>نصيحة: ارتداء حذاء مريح للتجول بحرية بين الأسوار</li>
    </ul></div>`
  },
  {
    id: 4, cat: 'إسلامي', region: 'القاهرة',
    title: 'مسجد السلطان حسن',
    short: 'هرم العمارة الإسلامية، وأحد أعظم المساجد المملوكية تصميماً وزخرفة',
    img: 'images/p5.webp',
    heroImg: 'images/p5.webp',
    body: `<p>تجسد هذه الصورة الفناء الداخلي (الصحن) لمسجد ومدرسة السلطان حسن، حيث تتدلى المشكاوات (المصابيح) التاريخية في مشهد روحاني مهيب يتوسطه ميضأة الوضوء الخشبية.</p>
    <h2>إعجاز هندسي</h2>
    <p>يتميز المسجد بضخامة البناء، والمقرنصات المذهلة، والإيوانات الأربعة التي كانت تُدرس فيها المذاهب الإسلامية. يُعتبر هذا المسجد بحق درة العمارة المملوكية في الشرق.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>الموقع: ميدان القلعة (صلاح الدين)</li>
    <li>وقت الزيارة: الصباح الباكر للاستمتاع بضوء الشمس داخل الصحن</li>
    </ul></div>`
  },
  {
    id: 5, cat: 'معالم', region: 'القاهرة',
    title: 'بانوراما قلعة صلاح الدين',
    short: 'المعلم الأبرز في أفق القاهرة التاريخية الذي يجمع بين القوة العسكرية والفن المعماري',
    img: 'images/p6.webp',
    heroImg: 'images/p6.webp',
    body: `<p>مشهد واسع يظهر أسوار القلعة الضخمة مع أشجار النخيل، ويتوجها من الأعلى مسجد محمد علي بقبابه الشهيرة، في لوحة تلخص تاريخ القاهرة الإسلامية.</p>
    <h2>مجمع المتاحف والمساجد</h2>
    <p>لا تقتصر القلعة على الأسوار فقط، بل تضم بداخلها مساجد تاريخية ومتاحف حربية وشرطية، وتوفر للزائر رحلة متكاملة عبر العصور المختلفة.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>أفضل إطلالة خارجية: من مسار حديقة الأزهر</li>
    <li>التذاكر: تذكرة موحدة لدخول القلعة والمساجد</li>
    </ul></div>`
  },
  {
    id: 6, cat: 'فرعوني', region: 'القاهرة',
    title: 'قناع توت عنخ آمون',
    short: 'أشهر قناع ذهبي في تاريخ البشرية وأيقونة الحضارة المصرية القديمة',
    img: 'images/p7.webp',
    heroImg: 'images/p7.webp',
    body: `<p>الصورة توضح القناع الذهبي الخالص للملك الشاب توت عنخ آمون، والمزين بخطوط من الزجاج الأزرق والأحجار الكريمة، وهو القطعة الأكثر سحراً وغموضاً في العالم.</p>
    <h2>دقة التفاصيل</h2>
    <p>يُظهر القناع الملامح الشابة للملك مرتدياً غطاء الرأس الملكي. دقة الصياغة وتوزيع الألوان تجعله معجزة فنية لم تتكرر في التاريخ القديم، واكتُشف عام 1922.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>المكان الحالي: المتحف المصري</li>
    <li>ملاحظة: التصوير ممنوع تماماً داخل غرفة القناع الذهبي</li>
    </ul></div>`
  },
  {
    id: 7, cat: 'فرعوني', region: 'القاهرة',
    title: 'التوابيت والمومياوات',
    short: 'التوابيت الخشبية المنحوتة التي تروي تفاصيل الحياة والموت في مصر القديمة',
    img: 'images/p8.webp',
    heroImg: 'images/p8.webp',
    body: `<p>تظهر الصورة إحدى المومياوات الفرعونية داخل تابوت خشبي دقيق الصنع معروضة في فاترينة زجاجية، تعكس مدى تطور المصري القديم في فنون التحنيط والزخرفة.</p>
    <h2>رحلة الخلود</h2>
    <p>كانت هذه التوابيت تُنحت وتُلون بعناية فائقة لحماية جسد المتوفى في رحلته للعالم الآخر. رؤيتها عن قرب تمنحك إحساساً برهبة وعظمة معتقدات المصريين القدماء.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>الموقع: المتحف المصري بالتحرير</li>
    <li>المدة المقترحة: من ساعتين إلى 3 ساعات للتجول في المتحف</li>
    </ul></div>`
  },
  {
    id: 8, cat: 'إسلامي', region: 'القاهرة',
    title: 'بانوراما القاهرة الإسلامية',
    short: 'مشهد بانورامي يجمع أعظم مساجد القاهرة ويجسد مقولة "مدينة الألف مئذنة"',
    img: 'images/p9.webp',
    heroImg: 'images/p9.webp',
    body: `<p>من هذه الزاوية المرتفعة، ينكشف واحد من أجمل المناظر الحضرية في العالم، حيث يبرز في الصورة مسجدي السلطان حسن والرفاعي وسط نسيج عمراني كثيف من مآذن القاهرة الفاطمية.</p>
    <h2>تعانق التاريخ</h2>
    <p>رغم الفارق الزمني الكبير بين بناء المساجد الظاهرة في الصورة، إلا أنها تندمج في مشهد بصري واحد يخطف الأنفاس، ويمثل ذروة الإبداع المعماري في العاصمة.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>المكان لالتقاط الصورة: من حديقة الأزهر أو أعلى أسوار القلعة</li>
    <li>أفضل وقت للتصوير: وقت الظهيرة أو قبل الغروب بقليل</li>
    </ul></div>`
  },
  {
    id: 9, cat: 'قصور', region: 'القاهرة',
    title: 'قصر البارون إمبان',
    short: 'تحفة معمارية هندية في قلب حي مصر الجديدة العريق',
    img: 'images/p10.webp', 
    heroImg: 'images/p10.webp',
    body: `<p>القصر الأسطوري للمليونير البلجيكي إدوارد إمبان. يتميز بتصميمه المستوحى من المعابد الهندوسية ومعابد أنكور وات، ليصبح القصر الوحيد من نوعه في الشرق الأوسط.</p>
    <h2>عمارة لا مثيل لها</h2>
    <p>يتميز القصر بتماثيله الخارجية المذهلة للأفيال والتنانين والآلهة الهندية، وتم ترميمه مؤخراً ليفتح أبوابه للجمهور كشاهد على تأسيس حي مصر الجديدة.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>الموقع: شارع العروبة، مصر الجديدة</li>
    <li>لا تفوت: الصعود لسطح القصر بتذكرة منفصلة</li>
    </ul></div>`
  },
  {
    id: 10, cat: 'معالم', region: 'القاهرة',
    title: 'برج القاهرة',
    short: 'زهرة اللوتس الخرسانية التي تزين سماء العاصمة وتكشف جمالها',
    img: 'images/p15.webp', 
    heroImg: 'images/p15.webp',
    body: `<p>يقع في قلب جزيرة الزمالك، وصُمم على شكل زهرة اللوتس الفرعونية. يبلغ ارتفاعه 187 متراً، ليكون أعلى من الهرم الأكبر، ويُعد من أبرز معالم القاهرة الحديثة.</p>
    <h2>القاهرة من السماء</h2>
    <p>توفر قمة البرج رؤية بانورامية 360 درجة للقاهرة بالكامل، حيث يمكنك الاستمتاع بمشاهدة النيل والمباني التاريخية وحتى الأهرامات في الأيام الصافية.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>الموقع: جزيرة الزمالك</li>
    <li>المرافق: يوجد مقهى ومطعم دوار في الأعلى</li>
    </ul></div>`
  },
  {
    id: 11, cat: 'قصور', region: 'القاهرة',
    title: 'قصر عابدين',
    short: 'البوابات الملكية لجوهرة القصور في مصر ومقر الحكم لأكثر من قرن',
    img: 'images/p12.webp',
    heroImg: 'images/p12.webp',
    body: `<p>تُظهر الصورة البوابات الحديدية الفخمة المزخرفة والواجهة الكلاسيكية لقصر عابدين، والذي بُني بأمر من الخديوي إسماعيل ليكون مقراً للحكم بدلاً من القلعة.</p>
    <h2>مجمع المتاحف</h2>
    <p>يُعد القصر اليوم مجمعاً فريداً للمتاحف المفتوحة للجمهور، حيث يضم متحفاً للأسلحة، ومتحفاً للأوسمة والنياشين، ومتحف الفضيات الخاصة بالأسرة العلوية.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>الموقع: ميدان عابدين، وسط القاهرة</li>
    <li>الفعاليات: تُقام في ساحته الخارجية أحياناً عروض واحتفالات</li>
    </ul></div>`
  }
];

let currentCat = 'all';
let visibleCount = 6;
const STEP = 3;

/* ============================================================
   LOADER
============================================================ */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('ldr').classList.add('gone'), 1700);
  initParticles();
  buildPlacesGrid();
  initCounters();
  initReveal();
  initCursor();
  initEmailJS();
});

/* ============================================================
   CURSOR
============================================================ */
function initCursor() {
  const c = document.getElementById('cur'), r = document.getElementById('cur2');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; c.style.left=mx+'px'; c.style.top=my+'px'; });
  (function animR() { rx+=(mx-rx)*.12; ry+=(my-ry)*.12; r.style.left=rx+'px'; r.style.top=ry+'px'; requestAnimationFrame(animR); })();
  document.querySelectorAll('a,button,.p-card,.feat-card,.val-card,.tip-card,.flt-btn').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cx'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cx'));
  });
}



/* ============================================================
   PAGE ROUTER
============================================================ */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo({ top:0, behavior:'smooth' });
  // update nav active
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === name);
  });
  if (name === 'wishlist') renderWishlist();
  initReveal();
}

/* ============================================================
   PARTICLES
============================================================ */
function initParticles() {
  const wrap = document.getElementById('particles');
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'pt';
    p.style.cssText = `left:${Math.random()*100}%;width:${Math.random()*3+1}px;height:${Math.random()*3+1}px;animation-duration:${Math.random()*8+6}s;animation-delay:${Math.random()*6}s`;
    wrap.appendChild(p);
  }
}

/* ============================================================
   INTERSECTION OBSERVER — REVEAL
============================================================ */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } });
  }, { threshold:0.1, rootMargin:'0px 0px -50px 0px' });
  document.querySelectorAll('.rv:not(.vis)').forEach(el => obs.observe(el));
}

/* ============================================================
   COUNTER ANIMATION
============================================================ */
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.count;
      let start = null;
      const dur = 1800;
      (function step(ts) {
        if (!start) start = ts;
        const prog = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - prog, 3);
        const suffix = el.dataset.suffix || ""; 
const currentNum = Math.floor(eased * target).toLocaleString('ar-EG');
el.textContent = currentNum + suffix;
        if (prog < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString('ar-EG') + suffix;
      })(performance.now());
      obs.unobserve(el);
    });
  }, { threshold:0.5 });
  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
}

/* ============================================================
   TOAST
============================================================ */
function showToast(msg, type='') {
  const wrap = document.getElementById('toast-wrap');
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  t.textContent = msg;
  wrap.appendChild(t);
  requestAnimationFrame(() => { requestAnimationFrame(() => t.classList.add('show')); });
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 500);
  }, 3000);
}

/* ============================================================
   WISHLIST
============================================================ */
let wishlist = JSON.parse(localStorage.getItem('knz_wish') || '[]');

function saveWish() {
  localStorage.setItem('knz_wish', JSON.stringify(wishlist));
  const c = document.getElementById('wish-count');
  if (wishlist.length > 0) { c.style.display='inline-flex'; c.textContent=wishlist.length; }
  else { c.style.display='none'; }
}

function toggleWish(id, btn) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    if (btn) btn.textContent = '♥';
    if (btn) btn.classList.add('saved');
    showToast('✦ تمت الإضافة إلى قائمتك المفضلة', 'ok');
  } else {
    wishlist.splice(idx, 1);
    if (btn) btn.textContent = '♡';
    if (btn) btn.classList.remove('saved');
    showToast('تمت الإزالة من القائمة المفضلة', '');
  }
  saveWish();
  // refresh wishlist if open
  if (document.getElementById('page-wishlist').classList.contains('active')) renderWishlist();
}

function renderWishlist() {
  const el = document.getElementById('wish-content');
  if (wishlist.length === 0) {
    el.innerHTML = `<div class="wish-empty"><div class="big">♡</div><p style="font-size:1.1rem;margin-bottom:.5rem">قائمتك المفضلة فارغة</p><p style="font-size:.85rem">ابدأ بإضافة الأماكن التي تريد زيارتها</p><br><button onclick="showPage('places')" class="btn-gold" style="opacity:1;animation:none;cursor:none"><span>استكشف الأماكن ←</span></button></div>`;
    return;
  }
  const saved = PLACES.filter(p => wishlist.includes(p.id));
  el.innerHTML = `<div class="wish-grid">${saved.map(p => `
    <div class="p-card" style="position:relative">
      <button class="wish-remove" onclick="toggleWish(${p.id}, null); renderWishlist()">✕</button>
      <img class="p-card-img" src="${p.img}" alt="${p.title}" loading="lazy">
      <div class="p-card-body">
        <div class="p-card-cat">${p.cat} • ${p.region}</div>
        <div class="p-card-title">${p.title}</div>
        <div class="p-card-desc">${p.short}</div>
      </div>
      <div class="p-card-footer">
        <span class="p-card-loc">📍 ${p.region}</span>
        <button class="p-card-btn" onclick="openArticle(${p.id})" style="border:none;font-family:'Cairo',sans-serif;cursor:none">اقرأ المزيد ←</button>
      </div>
    </div>`).join('')}</div>`;
}

saveWish(); // init count

/* ============================================================
   PLACES GRID
============================================================ */
function buildPlacesGrid() {
  renderGrid();
  document.querySelectorAll('.flt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.flt-btn').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      currentCat = btn.dataset.cat;
      visibleCount = 6;
      renderGrid();
    });
  });
}

function getFiltered() {
  const q = (document.getElementById('search-input')?.value || '').trim().toLowerCase();
  return PLACES.filter(p => {
    const catOk = currentCat === 'all' || p.cat === currentCat;
    const qOk = !q || p.title.includes(q) || p.region.includes(q) || p.cat.includes(q);
    return catOk && qOk;
  });
}

function renderGrid() {
  const grid = document.getElementById('places-grid');
  const btn = document.getElementById('load-more-btn');
  const data = getFiltered();
  const visible = data.slice(0, visibleCount);
  grid.innerHTML = visible.map(p => placeCardHTML(p)).join('');
  btn.style.display = data.length > visibleCount ? 'inline-flex' : 'none';
  // init wish buttons state
  document.querySelectorAll('.p-card-wish').forEach(b => {
    const id = +b.dataset.id;
    if (wishlist.includes(id)) { b.textContent = '♥'; b.classList.add('saved'); }
  });
}

function filterPlaces() { visibleCount = 6; renderGrid(); }

function loadMore() {
  visibleCount += STEP;
  const data = getFiltered();
  if (data.length > visibleCount - STEP) {
    const grid = document.getElementById('places-grid');
    const newItems = data.slice(visibleCount - STEP, visibleCount);
    newItems.forEach(p => {
      const div = document.createElement('div');
      div.innerHTML = placeCardHTML(p);
      const card = div.firstElementChild;
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      grid.appendChild(card);
      requestAnimationFrame(() => {
        card.style.transition = 'opacity .7s, transform .7s';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
      const wb = card.querySelector('.p-card-wish');
      if (wb && wishlist.includes(+wb.dataset.id)) { wb.textContent='♥'; wb.classList.add('saved'); }
    });
    document.getElementById('load-more-btn').style.display = data.length > visibleCount ? 'inline-flex' : 'none';
  }
}

function placeCardHTML(p) {
  return `<div class="p-card">
    <button class="p-card-wish" data-id="${p.id}" onclick="toggleWish(${p.id}, this)" title="أضف للمفضلة">♡</button>
    <img class="p-card-img" src="${p.img}" alt="${p.title}" loading="lazy">
    <div class="p-card-body">
      <div class="p-card-cat">${p.cat} • ${p.region}</div>
      <div class="p-card-title">${p.title}</div>
      <div class="p-card-desc">${p.short}</div>
    </div>
    <div class="p-card-footer">
      <span class="p-card-loc">📍 ${p.region}</span>
      <button class="p-card-btn" onclick="openArticle(${p.id})" style="border:none;font-family:'Cairo',sans-serif;cursor:none">اقرأ المزيد ←</button>
    </div>
  </div>`;
}

/* ============================================================
   ARTICLE
============================================================ */
function openArticle(id) {
  const p = PLACES[id];
  if (!p) return;
  const isWished = wishlist.includes(id);
  document.getElementById('article-content').innerHTML = `
    <div class="article-cat">${p.cat} • ${p.region}</div>
    <h1 class="article-title">${p.title}</h1>
    <div class="article-meta">
      <span>📍 ${p.region}</span>
      <span>🏷 ${p.cat}</span>
      <span>✦ كنوز مصر الخفية</span>
    </div>
    <img class="article-hero-img" src="${p.heroImg}" alt="${p.title}">
    <div class="article-body">${p.body}</div>
    <div class="article-actions">
      <button onclick="toggleWish(${p.id}, this)" class="btn-gold" id="art-wish-btn" data-id="${p.id}" style="opacity:1;animation:none;cursor:none">
        <span>${isWished ? '♥ في قائمتي المفضلة' : '♡ أضف إلى المفضلة'}</span>
      </button>
      <button onclick="showPage('places')" style="background:none;border:1px solid rgba(201,149,42,.25);color:var(--muted);padding:.9rem 1.8rem;font-family:'Cairo',sans-serif;font-size:.8rem;cursor:none;transition:border-color .3s,color .3s" onmouseover="this.style.borderColor='var(--gold)';this.style.color='var(--gold)'" onmouseout="this.style.borderColor='rgba(201,149,42,.25)';this.style.color='var(--muted)'">→ أماكن أخرى</button>
    </div>`;
  // Override toggleWish for article btn to update its text
  const artBtn = document.getElementById('art-wish-btn');
  artBtn.onclick = () => {
    toggleWish(id, null);
    const inList = wishlist.includes(id);
    artBtn.querySelector('span').textContent = inList ? '♥ في قائمتي المفضلة' : '♡ أضف إلى المفضلة';
  };
  showPage('article');
}

/* ============================================================
   EMAILJS
============================================================ */
function initEmailJS() {
  // Replace with your real EmailJS public key
  emailjs.init('YOUR_PUBLIC_KEY');

  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = document.getElementById('send-btn');
    btn.disabled = true;
    btn.textContent = 'جاري الإرسال...';
    try {
      // Replace with your EmailJS service ID and template ID
      await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form);
      showToast('✦ تم إرسال رسالتك بنجاح! سنرد عليك قريباً', 'ok');
      form.reset();
    } catch (err) {
      showToast('حدث خطأ في الإرسال — تحقق من الإعدادات', 'err');
    } finally {
      btn.disabled = false;
      btn.textContent = 'إرسال الرسالة ✦';
    }
  });
}