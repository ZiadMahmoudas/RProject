/* ============================================================
   DATA — الأماكن (12 مكان)
============================================================ */
const PLACES = [
  {
    id:0, cat:'صحراء', region:'الوادي الجديد',
    title:'الصحراء البيضاء السحرية',
    short:'تشكيلات جيرية بيضاء كأنها كائنات من عالم آخر — أكثر المشاهد غرابة وجمالاً في مصر كلها',
    img:'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=700&q=75',
    heroImg:'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1400&q=85',
    body:`<p>الصحراء البيضاء محمية طبيعية تقع على بُعد حوالي 45 كيلومتراً شمال مدينة الفرافرة في الوادي الجديد. تتميز بتشكيلاتها الجيرية البيضاء العملاقة التي نحتتها الرياح على مدى آلاف السنين.</p>
    <h2>لماذا تزورها؟</h2>
    <p>لا يوجد مكان في مصر — بل ربما في العالم — يشبه الصحراء البيضاء. التشكيلات الجيرية التي تتخذ أشكالاً مدهشة: تشبه الفطر أحياناً، والجمل أحياناً، والأشخاص أحياناً أخرى. عند شروق الشمس وغروبها تكتسب ألواناً ذهبية وبرتقالية لا يصدقها العقل.</p>
    <blockquote>لا تُصدِّق صورها حتى تراها بعينيك — الصحراء البيضاء تجربة تتجاوز التصوير</blockquote>
    <h2>أفضل وقت للزيارة</h2>
    <p>أكتوبر حتى مارس — الصيف شديد الحرارة. الليل في الصحراء البيضاء من أجمل التجارب: نجوم لا حصر لها وسط الصمت المطبق والتشكيلات البيضاء المضيئة تحت ضوء القمر.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>المسافة من القاهرة: ~600 كم (6-7 ساعات)</li>
    <li>أقرب مدينة: الفرافرة</li>
    <li>يُنصح بالمبيت: تجربة التخييم لا تُنسى</li>
    <li>التصاريح: من مكتب حماية البيئة بالفرافرة</li>
    </ul></div>`
  },
  {
    id:1, cat:'أثري', region:'أسوان',
    title:'معبد فيلة الغارق',
    short:'جزيرة المعابد التي أنقذتها اليونسكو من مياه النيل — قصة إنقاذ أثري أسطورية',
    img:'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=700&q=75',
    heroImg:'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1400&q=85',
    body:`<p>معبد فيلة هو مجمع معابد فرعوني بُني على جزيرة فيلة في نهر النيل جنوب أسوان. بعد بناء السد العالي، غرقت الجزيرة في المياه، فنفّذت اليونسكو عملية نقل أثرية ضخمة لإنقاذه ونقله إلى جزيرة أجيليكا المجاورة.</p>
    <h2>قصة الإنقاذ</h2>
    <p>بين عامَي 1972 و1980، قطّع فريق من المهندسين والعمال المعبدَ إلى 40,000 قطعة، ونقلوها ورصّوها من جديد بنفس الترتيب على الجزيرة الجديدة. هذه العملية تُعدّ من أعظم مشاريع الحفاظ على التراث الإنساني.</p>
    <blockquote>معبد فيلة لم يُنقذ فقط من الماء — بل من النسيان</blockquote>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>الوصول: بالقارب من كورنيش أسوان</li>
    <li>المسافة: 8 كم جنوب أسوان</li>
    <li>عرض الصوت والضوء: مسائياً بثلاث لغات</li>
    <li>التصوير: مسموح (بدون فلاش داخل الحجرات)</li>
    </ul></div>`
  },
  {
    id:2, cat:'تاريخي', region:'الإسكندرية',
    title:'كاتاكومب الإسكندرية',
    short:'ثلاثة طوابق تحت الأرض تمزج الحضارتين المصرية واليونانية في مقابر لا يعلم عنها كثيرون',
    img:'https://images.unsplash.com/photo-1600688640154-9619e002df30?w=700&q=75',
    heroImg:'https://images.unsplash.com/photo-1600688640154-9619e002df30?w=1400&q=85',
    body:`<p>كاتاكومب كوم الشقافة هي أكبر أثر روماني في مصر، وأكثرها غموضاً. اكتُشفت صدفةً عام 1900 حين سقط حمار في بئر يؤدي إليها. تمتد على ثلاثة طوابق تحت سطح الأرض، تصل إلى عمق 35 متراً.</p>
    <h2>لماذا هي فريدة؟</h2>
    <p>الكاتاكومب تمثّل مزيجاً فريداً من الحضارتين: التصميم روماني، والزخارف مصرية فرعونية، والمعتقدات إغريقية. هذا المزج يعكس طبيعة الإسكندرية كمدينة ملتقى الحضارات.</p>
    <blockquote>هنا التقت ثلاث حضارات في الظلام — وتركت شاهداً على التعايش الإنساني</blockquote>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>الموقع: حي كرموز، الإسكندرية</li>
    <li>التذكرة: 60 جنيهاً للمصريين</li>
    <li>ملاحظة: غير مناسب لمن يعانون رهاب الأماكن الضيقة</li>
    <li>وقت الزيارة المقترح: ساعة إلى ساعة ونصف</li>
    </ul></div>`
  },
  {
    id:3, cat:'طبيعة', region:'الفيوم',
    title:'بحيرة قارون الزرقاء',
    short:'بحيرة مالحة طبيعية بمياه زرقاء لازوردية محاطة بصحراء ذهبية — منظر يخطف الأنفاس',
    img:'https://images.unsplash.com/photo-1600688640154-9619e002df30?w=700&q=75',
    heroImg:'https://images.unsplash.com/photo-1600688640154-9619e002df30?w=1400&q=85',
    body:`<p>بحيرة قارون من أقدم البحيرات الطبيعية في مصر وفي العالم. تقع في قلب الفيوم وهي بقية من البحيرة القديمة "موريس" التي كانت أكبر بكثير في عصر الفراعنة.</p>
    <h2>جمال لا يُوصف</h2>
    <p>تتميز البحيرة بلونها الأزرق الداكن الذي يتناقض بشكل مذهل مع الصحراء الذهبية والنخيل الأخضر المحيط بها. كما تُعدّ محطة للطيور المهاجرة، ما يجعلها وجهة مثالية لهواة مراقبة الطيور.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>المسافة من القاهرة: ~130 كم</li>
    <li>أفضل وقت: شتاءً لمشاهدة الطيور المهاجرة</li>
    <li>الأنشطة: صيد، قوارب، مراقبة طيور</li>
    <li>القرية البربرية على الشاطئ تستحق الزيارة</li>
    </ul></div>`
  },
  {
    id:4, cat:'طبيعة', region:'سيناء',
    title:'وادي الملاك في سيناء',
    short:'واحة مخفية وسط الصحراء الصخرية لا يعرفها إلا أهل المنطقة — عيون مياه وسط الصمت',
    img:'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=700&q=75',
    heroImg:'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1400&q=85',
    body:`<p>في قلب سيناء الوسطى، بعيداً عن شرم الشيخ ودهب والمناطق السياحية المعروفة، تختبئ واحات صغيرة لا يعرفها إلا أبناء القبائل البدوية المحلية.</p>
    <h2>الطريق إليها</h2>
    <p>الوصول إلى هذه الواحات يستلزم دليلاً بدوياً من أبناء المنطقة. الطريق يمر عبر ممرات صخرية ضيقة وجبال مذهلة، ثم تنكشف فجأة واحة خضراء بعيون مياه باردة ونخيل وارف.</p>
    <blockquote>الطريق إلى الجمال الحقيقي لا يكون سهلاً أبداً</blockquote>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>يلزم دليل بدوي محلي</li>
    <li>المركبة: جيب رباعي الدفع حتماً</li>
    <li>الموسم: أكتوبر — أبريل</li>
    <li>الإقامة: خيام بدوية تقليدية بالمنطقة</li>
    </ul></div>`
  },
  {
    id:5, cat:'أثري', region:'الأقصر',
    title:'قرية الدراعبة المنسية',
    short:'قرية تجلس فوق مقبرة ملكية فرعونية — أهل القرية يعيشون حرفياً فوق التاريخ',
    img:'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=700&q=75',
    heroImg:'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1400&q=85',
    body:`<p>على الضفة الغربية للأقصر، تقف قرية الدراعبة أبو النجا فوق مقابر فرعونية ملكية. السكان اعتادوا منذ آلاف السنين على العيش فوق هذه المقابر.</p>
    <h2>التاريخ تحت الأقدام</h2>
    <p>بعض أهالي القرية اكتشفوا مقابر تحت بيوتهم. المنطقة تضم مقابر الرعامسة وأمراء الحرب الذين لم يُكتشف بعد كثير منهم. التنقيب لا يزال جارياً.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>الموقع: ضفة النيل الغربية، الأقصر</li>
    <li>وسيلة التنقل: حنطور أو دراجة هوائية</li>
    <li>لا تفوت: سوق القرية اليومي الصباحي</li>
    <li>أفضل وقت: الشتاء والربيع</li>
    </ul></div>`
  },
  {
    id:6, cat:'تاريخي', region:'القاهرة',
    title:'أسطح القاهرة الفاطمية',
    short:'أسطح البيوت التاريخية في القاهرة القديمة توفر منظراً لا يرى المئذنات والقباب من أعلى',
    img:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=75',
    heroImg:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=85',
    body:`<p>القاهرة الفاطمية تحتضن بين جدرانها تاريخاً ألف عام. لكن ما لا يعرفه كثيرون هو أن أسطح بيوتها القديمة توفر منظراً بانورامياً ساحراً لا مثيل له على المآذن والقباب والمساجد.</p>
    <h2>كيف تصل؟</h2>
    <p>بعض الأسطح متاحة عبر المقاهي والمطاعم المخفية التي تفتح أبوابها على شارع المعز. غير أن أجمل الأسطح يمكن الوصول إليها برفقة أحد المرشدين المحليين الذين يعرفون دروب القاهرة العتيقة.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>الموقع: شارع المعز لدين الله الفاطمي</li>
    <li>أفضل وقت: غروب الشمس — منظر لا يُنسى</li>
    <li>المدة: ساعتان لاستكشاف المنطقة</li>
    <li>يُنصح: مرشد محلي من أهل الحي</li>
    </ul></div>`
  },
  {
    id:7, cat:'غوص', region:'مرسى علم',
    title:'خليج أبو دباب السري',
    short:'ملاذ الأطوط والدوغونج — محمية طبيعية بحرية نادرة لم يصلها التلوث بعد',
    img:'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=700&q=75',
    heroImg:'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1400&q=85',
    body:`<p>خليج أبو دباب يقع على بعد 65 كيلومتراً شمال مرسى علم على ساحل البحر الأحمر. يشتهر بكونه أحد أندر المواقع في العالم حيث يمكن السباحة مع الدوغونج (بقرة البحر) بشكل طبيعي.</p>
    <h2>الدوغونج — أسطورة البحر</h2>
    <p>الدوغونج ثديّ بحري نادر يعيش في حقول الأعشاب البحرية. خليج أبو دباب يضم مرجاً بحرياً غنياً تعيش فيه هذه المخلوقات الاستثنائية. الغوص هنا من أجمل تجارب الغوص في العالم.</p>
    <blockquote>رأيت الدوغونج لأول مرة هنا — وفهمت لماذا أطلق البحارة القدماء على الإناث اسم حوريات البحر</blockquote>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>المسافة من مرسى علم: 65 كم شمالاً</li>
    <li>أفضل وقت للدوغونج: الصباح الباكر</li>
    <li>يلزم معدات غوص أو سنوركل</li>
    <li>المحمية تمنع التغذية أو ملامسة الحيوانات</li>
    </ul></div>`
  },
  {
    id:8, cat:'صحراء', region:'مطروح',
    title:'واحة سيوة الضائعة',
    short:'المدينة التي أراد الإسكندر الأكبر معرفة مصيره فيها — واحة خضراء وسط الصحراء الغربية',
    img:'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=700&q=75',
    heroImg:'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1400&q=85',
    body:`<p>واحة سيوة تقع على الحدود المصرية الليبية، وسط الصحراء الغربية الكبرى. هي واحة معزولة لها ثقافتها ولغتها وعمارتها الفريدة. الإسكندر الأكبر قطع الصحراء للوصول إليها واستشارة أوراكل آمون.</p>
    <h2>معمار فريد</h2>
    <p>بيوت سيوة مبنية من الكرشيف (ملح الصحراء المتصلّب)، مما يمنحها لوناً أبيض مائل للرمادي فريداً. المدينة القديمة "أغهورمي" تقف على هضبة كما تركها التاريخ.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>المسافة من القاهرة: ~750 كم</li>
    <li>التوقيت الأمثل: أكتوبر — مارس</li>
    <li>لا تفوت: بحيرة الملح وعيون الشفاء الطبيعية</li>
    <li>وسيلة التنقل: كاري (عربة) أو سيارة عجلات</li>
    </ul></div>`
  },
  {
    id:9, cat:'غوص', region:'البحر الأحمر',
    title:'رأس محمد تحت الماء',
    short:'حيث التقى بحران — مياه تيراني بنقطة التقاء خليج العقبة وخليج السويس بعالم مرجاني استثنائي',
    img:'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=700&q=75',
    heroImg:'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1400&q=85',
    body:`<p>رأس محمد هي رأس شبه جزيرة سيناء الجنوبية، حيث يلتقي خليج العقبة وخليج السويس. هذا اللقاء بين بحرين ينتج تيارات مائية تغذّي مرجاناً من أكثف المرجانات وأجملها في البحر الأحمر.</p>
    <h2>التنوع البيولوجي</h2>
    <p>يضم المحمية أكثر من 1000 نوع من الأسماك، و125 نوعاً من الشعاب المرجانية، وعشرات أنواع أخرى من الكائنات البحرية النادرة. الجدار المرجاني الغربي من أعمق الجدران في العالم.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>المسافة من شرم الشيخ: 25 كم</li>
    <li>مطلوب: رسوم دخول المحمية</li>
    <li>أفضل موسم: مارس — نوفمبر</li>
    <li>الغوص: يحتاج شهادة PADI أو مماثلة</li>
    </ul></div>`
  },
  {
    id:10, cat:'تاريخي', region:'الأقصر',
    title:'معبد أبيدوس — قِبلة الفراعنة',
    short:'أقدس بقعة في مصر القديمة — المكان الذي كان كل فرعون يحلم بالدفن فيه',
    img:'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=700&q=75',
    heroImg:'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1400&q=85',
    body:`<p>أبيدوس (العرابة المدفونة حالياً) كانت أقدس مدن مصر القديمة. كان المصريون القدماء يتمنون أن يُدفنوا فيها قرباً من أوزيريس، إله الموت والبعث. استمر الدفن فيها آلاف السنين.</p>
    <h2>معبد سيتي الأول</h2>
    <p>أبرز معالمها معبد سيتي الأول (والد رمسيس الثاني) الذي يضم أجمل نقوش مصرية باقية حتى اليوم. الألوان لا تزال صاخبة كأنها رُسمت بالأمس، وهو نادر الندرة في المعابد المصرية.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>المسافة من الأقصر: 160 كم شمالاً</li>
    <li>أقرب مدينة: سوهاج</li>
    <li>يُنصح بالزيارة صباحاً قبل الحر</li>
    <li>مرشد: مفيد جداً هنا لفهم النقوش</li>
    </ul></div>`
  },
  {
    id:11, cat:'طبيعة', region:'أسوان',
    title:'جزيرة الأورمان',
    short:'جنة خضراء وسط النيل في أسوان — جزيرة صغيرة مجهولة بحدائق نخيل وهدوء لا يُوصف',
    img:'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=700&q=75',
    heroImg:'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1400&q=85',
    body:`<p>بينما يتدفق السياح نحو جزيرة النباتات وفيلة، تجلس الأورمان في هدوئها بين جزر النيل جنوب أسوان، مجهولة تقريباً للسياحة التقليدية.</p>
    <h2>الهدوء المطلق</h2>
    <p>الوصول إليها بمركب صغير من كورنيش أسوان. ستجد حقول نخيل، وبيوتاً نوبية تقليدية، وأهالي يرحبون بالزوار بحفاوة النوبيين المشهورة، وأطفالاً يلعبون بعيداً عن ضوضاء العالم.</p>
    <div class="info-box"><h3>معلومات الزيارة</h3><ul>
    <li>الوصول: مركب صغير من الكورنيش</li>
    <li>التكلفة: بضعة جنيهات للعبور</li>
    <li>أجمل وقت: الغروب على النيل</li>
    <li>لا تنسَ: تجربة الطعام النوبي التقليدي</li>
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
  initNav();
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
   NAV
============================================================ */
function initNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('solid', window.scrollY > 60), { passive:true });
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
  if (!wrap) return;
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
        el.textContent = Math.floor(eased * target).toLocaleString('ar-EG');
        if (prog < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString('ar-EG');
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