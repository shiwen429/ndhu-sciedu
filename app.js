const languages = [
  ["zh-Hant", "繁體中文"],
  ["en", "English"],
  ["ja", "日本語"],
  ["zh-Hans", "简体中文"],
  ["vi", "Tiếng Việt"],
  ["th", "ไทย"],
  ["ko", "한국어"],
  ["id", "Bahasa Indonesia"],
  ["ms", "Bahasa Melayu"]
];

const copy = {
  "zh-Hant": {
    skip: "跳到主要內容區",
    siteName: "國立東華大學科學教育研究所",
    siteSubname: "科學教育碩士班／博士班",
    language: "語言",
    updated: "更新日期：2026-05-21",
    readMore: "查看網頁",
    footer: "",
    nav: {
      home: "首頁",
      news: "最新消息",
      admissions: "招生訊息",
      faculty: "師資介紹",
      students: "學生介紹",
      features: "研究所特色",
      curriculum: "課程架構",
      downloads: "文件下載",
      events: "學會活動紀錄"
    },
    intros: {
      home: "提供科學教育碩士班／博士班主要資訊，供考生、學生、校友與合作單位查閱。",
      news: "公告招生、研討會與科普活動消息，依日期與類別呈現。",
      admissions: "集中顯示碩士班、博士班、甄試、考試與五年修讀資訊，便於招生季快速更新。",
      faculty: "呈現專任師資、退休師資與歷任指導師資之研究專長與論文指導紀錄。",
      students: "提供學生資源、在學身分類型與所友論文紀錄。",
      features: "介紹沿革、教育目標、研究方向與所友網絡。",
      curriculum: "呈現修業要點、課程地圖、課表與課程主題。",
      downloads: "提供規章、表單、獎助與場地借用文件。",
      events: "收錄科普列車、全民科學週與城市科學節活動紀錄。"
    },
    labels: {
      overview: "摘要",
      quickLinks: "快速入口",
      current: "專任師資",
      retired: "退休師資",
      admin: "行政支援",
      former: "歷任指導師資",
      publicNote: "公開資料備註",
      master: "科學教育碩士班",
      doctoral: "科學教育博士班",
      research: "研究領域",
      email: "信箱",
      office: "研究室",
      phone: "電話",
      degree: "最高學歷",
      role: "職稱",
      date: "日期",
      category: "類別"
    }
  },
  en: {
    skip: "Skip to main content",
    siteName: "NDHU Graduate Institute of Science Education",
    siteSubname: "M.A. and Ph.D. Programs",
    language: "Language",
    updated: "Updated: 2026-05-21",
    readMore: "Open page",
    footer: "",
    nav: {
      home: "Home",
      news: "News",
      admissions: "Admissions",
      faculty: "Faculty",
      students: "Students",
      features: "Features",
      curriculum: "Curriculum",
      downloads: "Downloads",
      events: "Events"
    },
    intros: {
      home: "Main information for applicants, students, alumni, and partner schools.",
      news: "Admissions, conferences, and science outreach announcements are presented by date and category.",
      admissions: "Master's, doctoral, recommendation, examination, and five-year B.A./M.A. pathway information are gathered for easy seasonal updates.",
      faculty: "Full-time, retired, and former thesis-advising faculty are presented with research areas and thesis-advising records.",
      students: "Student resources, enrollment categories, and alumni thesis records.",
      features: "History, educational goals, research directions, and alumni network.",
      curriculum: "Study regulations, curriculum maps, timetables, and course themes.",
      downloads: "Regulations, forms, scholarships, and room-use files are organized as a download area.",
      events: "Science train, science week, and city science festival records are grouped together."
    },
    labels: {
      overview: "Summary",
      quickLinks: "Quick Links",
      current: "Full-Time Faculty",
      retired: "Retired Faculty",
      admin: "Administrative Support",
      former: "Former Thesis Advisors",
      publicNote: "Public Data Note",
      master: "M.A. in Science Education",
      doctoral: "Ph.D. in Science Education",
      research: "Research Areas",
      email: "Email",
      office: "Office",
      phone: "Phone",
      degree: "Highest Degree",
      role: "Role",
      date: "Date",
      category: "Category"
    }
  },
  ja: {
    skip: "本文へ移動",
    siteName: "国立東華大学 科学教育研究所",
    siteSubname: "科学教育修士課程・博士課程 多言語サイト",
    language: "言語",
    updated: "更新日：2026-05-21",
    readMore: "ページを見る",
    footer: "",
    nav: { home: "ホーム", news: "最新情報", admissions: "入試情報", faculty: "教員紹介", students: "学生紹介", features: "特色", curriculum: "カリキュラム", downloads: "資料ダウンロード", events: "活動記録" },
    intros: {
      home: "志願者、在学生、修了生、連携校に向けて、科学教育修士課程・博士課程の主な情報を掲載します。",
      news: "入試、学会、科学普及活動の情報を日付と分類で掲載します。",
      admissions: "修士・博士、推薦入試、一般入試、五年一貫制度の情報をまとめています。",
      faculty: "専任教員、退職教員、歴任指導教員の研究分野と論文指導記録を紹介します。",
      students: "学生支援、在学区分、修了生の論文記録を掲載します。",
      features: "沿革、教育目標、研究方向、修了生ネットワークを紹介します。",
      curriculum: "修業規定、課程マップ、時間割、科目テーマを示します。",
      downloads: "規程、申請書、奨助、教室利用などの入口をまとめました。",
      events: "科学列車、全民科学週、都市科学節の記録を整理しました。"
    },
    labels: { overview: "重点", quickLinks: "クイックリンク", current: "専任教員", retired: "退職教員", admin: "事務支援", publicNote: "公開資料メモ", master: "科学教育修士課程", doctoral: "科学教育博士課程", research: "研究分野", email: "メール", office: "研究室", phone: "電話", degree: "最終学歴", role: "職名", date: "日付", category: "分類" }
  },
  "zh-Hans": {
    skip: "跳到主要内容区",
    siteName: "国立东华大学科学教育研究所",
    siteSubname: "科学教育硕士班／博士班多语信息站",
    language: "语言",
    updated: "更新日期：2026-05-21",
    readMore: "查看网页",
    footer: "",
    nav: { home: "首页", news: "最新消息", admissions: "招生信息", faculty: "师资介绍", students: "学生介绍", features: "研究所特色", curriculum: "课程架构", downloads: "文件下载", events: "学会活动记录" },
    intros: {
      home: "提供考生、学生、校友与合作单位查阅科学教育硕士班／博士班主要信息。",
      news: "公告招生、研讨会与科普活动消息，并依日期与类别呈现。",
      admissions: "集中显示硕士班、博士班、甄试、考试与五年修读信息，便于招生季更新。",
      faculty: "呈现专任师资、退休师资与历任指导师资之研究专长与论文指导记录。",
      students: "提供学生资源、在学身份类型与校友论文记录。",
      features: "介绍沿革、教育目标、研究方向与校友网络。",
      curriculum: "呈现修业要点、课程地图、课表与课程主题。",
      downloads: "提供规章、表单、奖助与场地借用文件。",
      events: "收录科普列车、全民科学周与城市科学节活动记录。"
    },
    labels: { overview: "站点重点", quickLinks: "快速入口", current: "专任师资", retired: "退休师资", admin: "行政支援", publicNote: "公开资料备注", master: "科学教育硕士班", doctoral: "科学教育博士班", research: "研究领域", email: "邮箱", office: "研究室", phone: "电话", degree: "最高学历", role: "职称", date: "日期", category: "类别" }
  },
  vi: {
    skip: "Chuyển đến nội dung chính",
    siteName: "Viện Giáo dục Khoa học, NDHU",
    siteSubname: "Trang đa ngôn ngữ cho chương trình thạc sĩ/tiến sĩ",
    language: "Ngôn ngữ",
    updated: "Cập nhật: 2026-05-21",
    readMore: "Mở trang",
    footer: "",
    nav: { home: "Trang chủ", news: "Tin mới", admissions: "Tuyển sinh", faculty: "Giảng viên", students: "Sinh viên", features: "Đặc trưng", curriculum: "Chương trình", downloads: "Tải tài liệu", events: "Hoạt động" },
    intros: {
      home: "Thông tin chính cho ứng viên, sinh viên, cựu sinh viên và các đơn vị hợp tác của chương trình thạc sĩ/tiến sĩ giáo dục khoa học.",
      news: "Tin tuyển sinh, hội thảo và phổ biến khoa học được trình bày theo ngày và nhóm nội dung.",
      admissions: "Thông tin thạc sĩ, tiến sĩ, xét tuyển, thi tuyển và lộ trình năm năm được gom lại để cập nhật nhanh.",
      faculty: "Giảng viên cơ hữu, giảng viên nghỉ hưu và các cố vấn luận văn trước đây được giới thiệu cùng lĩnh vực nghiên cứu.",
      students: "Tài nguyên sinh viên, nhóm đang học và hồ sơ luận văn của cựu sinh viên.",
      features: "Lịch sử, mục tiêu giáo dục, hướng nghiên cứu và mạng lưới cựu sinh viên.",
      curriculum: "Trình bày quy định học tập, bản đồ môn học, thời khóa biểu và chủ đề khóa học.",
      downloads: "Quy định, biểu mẫu, học bổng và sử dụng phòng được tổ chức thành khu tải xuống.",
      events: "Ghi lại Science Train, Science Week và lễ hội khoa học đô thị."
    },
    labels: { overview: "Điểm chính", quickLinks: "Liên kết nhanh", current: "Giảng viên cơ hữu", retired: "Giảng viên nghỉ hưu", admin: "Hỗ trợ hành chính", publicNote: "Ghi chú dữ liệu", master: "Thạc sĩ Giáo dục Khoa học", doctoral: "Tiến sĩ Giáo dục Khoa học", research: "Lĩnh vực nghiên cứu", email: "Email", office: "Văn phòng", phone: "Điện thoại", degree: "Bằng cấp cao nhất", role: "Chức danh", date: "Ngày", category: "Loại" }
  },
  th: {
    skip: "ข้ามไปยังเนื้อหาหลัก",
    siteName: "สถาบันบัณฑิตศึกษาวิทยาศาสตร์ศึกษา NDHU",
    siteSubname: "เว็บไซต์หลายภาษาสำหรับหลักสูตรปริญญาโท/เอก",
    language: "ภาษา",
    updated: "อัปเดต: 2026-05-21",
    readMore: "เปิดหน้า",
    footer: "",
    nav: { home: "หน้าแรก", news: "ข่าวล่าสุด", admissions: "การรับสมัคร", faculty: "คณาจารย์", students: "นักศึกษา", features: "จุดเด่น", curriculum: "หลักสูตร", downloads: "ดาวน์โหลด", events: "กิจกรรม" },
    intros: {
      home: "ข้อมูลหลักสำหรับผู้สมัคร นักศึกษา ศิษย์เก่า และหน่วยงานความร่วมมือของหลักสูตรวิทยาศาสตร์ศึกษา",
      news: "ข่าวรับสมัคร ประชุมวิชาการ และกิจกรรมวิทยาศาสตร์ จัดตามวันที่และหมวดหมู่",
      admissions: "รวมข้อมูลปริญญาโท เอก การคัดเลือก การสอบ และเส้นทางเรียนต่อห้าปี",
      faculty: "แนะนำคณาจารย์ประจำ อาจารย์เกษียณ และอาจารย์ที่เคยเป็นที่ปรึกษาวิทยานิพนธ์ พร้อมสาขาวิจัย",
      students: "ทรัพยากรนักศึกษา กลุ่มผู้เรียน และบันทึกวิทยานิพนธ์ของศิษย์เก่า",
      features: "ประวัติ เป้าหมายการศึกษา ทิศทางวิจัย และเครือข่ายศิษย์เก่า",
      curriculum: "แสดงระเบียบการศึกษา แผนที่รายวิชา ตารางเรียน และหัวข้อรายวิชา",
      downloads: "จัดระเบียบระเบียบ แบบฟอร์ม ทุน และการยืมห้อง",
      events: "รวบรวม Science Train, Science Week และเทศกาลวิทยาศาสตร์เมือง"
    },
    labels: { overview: "จุดสำคัญ", quickLinks: "ลิงก์ด่วน", current: "คณาจารย์ประจำ", retired: "คณาจารย์เกษียณ", admin: "ฝ่ายธุรการ", publicNote: "หมายเหตุข้อมูล", master: "ปริญญาโทวิทยาศาสตร์ศึกษา", doctoral: "ปริญญาเอกวิทยาศาสตร์ศึกษา", research: "สาขาวิจัย", email: "อีเมล", office: "ห้องทำงาน", phone: "โทรศัพท์", degree: "วุฒิสูงสุด", role: "ตำแหน่ง", date: "วันที่", category: "หมวด" }
  },
  id: {
    skip: "Lewati ke konten utama",
    siteName: "Institut Pendidikan Sains NDHU",
    siteSubname: "Situs multibahasa program magister/doktor",
    language: "Bahasa",
    updated: "Diperbarui: 2026-05-21",
    readMore: "Buka halaman",
    footer: "",
    nav: { home: "Beranda", news: "Berita", admissions: "Penerimaan", faculty: "Dosen", students: "Mahasiswa", features: "Keunggulan", curriculum: "Kurikulum", downloads: "Unduhan", events: "Kegiatan" },
    intros: {
      home: "Informasi utama bagi calon mahasiswa, mahasiswa, alumni, dan mitra program pendidikan sains.",
      news: "Informasi penerimaan, konferensi, dan kegiatan sains disajikan menurut tanggal dan kategori.",
      admissions: "Informasi magister, doktor, seleksi, ujian, dan jalur lima tahun digabungkan agar mudah diperbarui.",
      faculty: "Dosen tetap, dosen purnabakti, dan pembimbing tesis terdahulu ditampilkan bersama bidang riset.",
      students: "Sumber daya mahasiswa, kategori studi, dan catatan tesis alumni.",
      features: "Sejarah, tujuan pendidikan, arah riset, dan jaringan alumni.",
      curriculum: "Menampilkan aturan studi, peta kurikulum, jadwal, dan tema mata kuliah.",
      downloads: "Regulasi, formulir, beasiswa, dan penggunaan ruang disusun sebagai area unduhan.",
      events: "Catatan Science Train, Science Week, dan festival sains kota dihimpun."
    },
    labels: { overview: "Sorotan", quickLinks: "Tautan Cepat", current: "Dosen Tetap", retired: "Dosen Purnabakti", admin: "Dukungan Administrasi", publicNote: "Catatan Data", master: "M.A. Pendidikan Sains", doctoral: "Ph.D. Pendidikan Sains", research: "Bidang Riset", email: "Email", office: "Kantor", phone: "Telepon", degree: "Gelar Tertinggi", role: "Jabatan", date: "Tanggal", category: "Kategori" }
  },
  ms: {
    skip: "Langkau ke kandungan utama",
    siteName: "Institut Pendidikan Sains NDHU",
    siteSubname: "Laman pelbagai bahasa untuk program sarjana/sarjana kedoktoran",
    language: "Bahasa",
    updated: "Dikemas kini: 2026-05-21",
    readMore: "Buka halaman",
    footer: "",
    nav: { home: "Utama", news: "Berita", admissions: "Kemasukan", faculty: "Pensyarah", students: "Pelajar", features: "Keistimewaan", curriculum: "Kurikulum", downloads: "Muat turun", events: "Aktiviti" },
    intros: {
      home: "Maklumat utama untuk pemohon, pelajar, alumni dan rakan kerjasama program pendidikan sains.",
      news: "Maklumat kemasukan, persidangan dan aktiviti sains disusun mengikut tarikh dan kategori.",
      admissions: "Maklumat sarjana, PhD, saringan, peperiksaan dan laluan lima tahun dihimpunkan untuk kemas kini mudah.",
      faculty: "Pensyarah tetap, pensyarah bersara dan penyelia tesis terdahulu dipaparkan bersama bidang penyelidikan.",
      students: "Sumber pelajar, kategori pengajian dan rekod tesis alumni.",
      features: "Sejarah, matlamat pendidikan, hala tuju penyelidikan dan rangkaian alumni.",
      curriculum: "Memaparkan peraturan pengajian, peta kursus, jadual dan tema kursus.",
      downloads: "Peraturan, borang, biasiswa dan penggunaan bilik disusun dalam bahagian muat turun.",
      events: "Rekod Science Train, Science Week dan festival sains bandar dihimpunkan."
    },
    labels: { overview: "Sorotan", quickLinks: "Pautan Pantas", current: "Pensyarah Tetap", retired: "Pensyarah Bersara", admin: "Sokongan Pentadbiran", publicNote: "Nota Data", master: "Sarjana Pendidikan Sains", doctoral: "PhD Pendidikan Sains", research: "Bidang Penyelidikan", email: "E-mel", office: "Pejabat", phone: "Telefon", degree: "Ijazah Tertinggi", role: "Jawatan", date: "Tarikh", category: "Kategori" }
  },
  ko: {
    skip: "본문으로 건너뛰기",
    siteName: "국립동화대학교 과학교육연구소",
    siteSubname: "과학교육 석사/박사과정 다국어 사이트",
    language: "언어",
    updated: "업데이트: 2026-05-21",
    readMore: "페이지 보기",
    footer: "",
    nav: { home: "홈", news: "최신 소식", admissions: "입학", faculty: "교원", students: "학생", features: "특색", curriculum: "교육과정", downloads: "자료실", events: "활동 기록" },
    intros: {
      home: "지원자, 재학생, 동문, 협력 기관을 위한 과학교육 석사·박사과정 주요 정보를 제공합니다.",
      news: "입학, 학술행사, 과학 대중화 소식을 날짜와 분류로 제공합니다.",
      admissions: "석사, 박사, 추천, 시험, 5년 연계 과정 정보를 한곳에 모았습니다.",
      faculty: "전임교원, 퇴직교원, 전 지도교수의 연구 분야와 논문 지도 기록을 소개합니다.",
      students: "학생 자원, 재학 유형, 동문 논문 기록을 제공합니다.",
      features: "연혁, 교육 목표, 연구 방향, 동문 네트워크를 소개합니다.",
      curriculum: "수업 규정, 교육과정 지도, 시간표와 과목 주제를 제시합니다.",
      downloads: "규정, 양식, 장학, 공간 사용 자료를 다운로드 영역으로 정리했습니다.",
      events: "과학열차, 과학주간, 도시과학축제 기록을 모았습니다."
    },
    labels: { overview: "핵심", quickLinks: "빠른 링크", current: "전임교원", retired: "퇴직교원", admin: "행정 지원", publicNote: "공개자료 메모", master: "과학교육 석사과정", doctoral: "과학교육 박사과정", research: "연구 분야", email: "이메일", office: "연구실", phone: "전화", degree: "최종 학위", role: "직위", date: "날짜", category: "분류" }
  }
};

const sections = ["home", "news", "admissions", "faculty", "students", "features", "curriculum", "downloads", "events"];

const sources = {
  department: "https://dehpd.ndhu.edu.tw/",
  goals: "https://dehpd.ndhu.edu.tw/p/412-1101-22140.php?Lang=zh-tw",
  faculty: "https://dehpd.ndhu.edu.tw/p/412-1101-22077.php?Lang=zh-tw",
  admin: "https://dehpd.ndhu.edu.tw/p/412-1101-22055.php?Lang=zh-tw",
  adminTsai: "https://dehpd.ndhu.edu.tw/p/404-1101-236520.php?Lang=zh-tw",
  facultyChen: "https://dehpd.ndhu.edu.tw/p/404-1101-236310.php?Lang=zh-tw",
  facultyTsai: "https://dehpd.ndhu.edu.tw/p/404-1101-236318.php?Lang=zh-tw",
  facultyCheng: "https://dehpd.ndhu.edu.tw/p/404-1101-236316.php?Lang=zh-tw",
  facultyChiang: "https://dehpd.ndhu.edu.tw/p/404-1101-236315.php?Lang=zh-tw",
  facultyLiuMingChou: "https://dehpd.ndhu.edu.tw/p/404-1101-236311.php?Lang=zh-tw",
  rdChen: "https://sys.ndhu.edu.tw/RD/TeacherTreasury/tlist.aspx?tcher=11744",
  rdTsai: "https://sys.ndhu.edu.tw/RD/TeacherTreasury/tlist.aspx?tcher=13427",
  rdCheng: "https://sys.ndhu.edu.tw/RD/TeacherTreasury/tlist.aspx?tcher=13304",
  rdChiang: "https://sys.ndhu.edu.tw/RD/TeacherTreasury/tlist.aspx?tcher=11488",
  retired: "https://dehpd.ndhu.edu.tw/p/412-1101-22072.php?Lang=zh-tw",
  history: "https://dehpd.ndhu.edu.tw/p/412-1101-22051.php?Lang=zh-tw",
  curriculum: "https://dehpd.ndhu.edu.tw/p/412-1101-22141.php?Lang=zh-tw",
  map: "https://dehpd.ndhu.edu.tw/p/412-1101-22090.php?Lang=zh-tw",
  downloads: "https://dehpd.ndhu.edu.tw/p/412-1101-22103.php?Lang=zh-tw",
  maReg: "https://dehpd.ndhu.edu.tw/var/file/101/1101/img/SEC-MA-REGULATION113.pdf",
  phdReg: "https://dehpd.ndhu.edu.tw/var/file/101/1101/img/4832/114SCE_PHD_REG.pdf",
  mapPhd: "https://dehpd.ndhu.edu.tw/var/file/101/1101/img/660348002.pdf",
  mapMaster: "https://dehpd.ndhu.edu.tw/var/file/101/1101/img/503384821.pdf",
  timetable1141: "https://dehpd.ndhu.edu.tw/var/file/101/1101/img/4832/241481137.docx",
  timetable1142: "https://dehpd.ndhu.edu.tw/var/file/101/1101/img/4832/572218290.docx",
  masterAdmission115: "https://dehpd.ndhu.edu.tw/var/file/101/1101/img/4832/SCE115.pdf",
  taRules: "https://dehpd.ndhu.edu.tw/var/file/101/1101/img/4829/bylaw_edu-TA(1070419).pdf",
  raRules: "https://dehpd.ndhu.edu.tw/var/file/101/1101/img/4829/bylaw_edu-RA(1140220).pdf",
  naturalCreditList: "https://dehpd.ndhu.edu.tw/var/file/101/1101/img/985734405.docx",
  naturalCreditForm: "https://dehpd.ndhu.edu.tw/var/file/101/1101/img/851641689.doc",
  naturalCreditCompare: "https://dehpd.ndhu.edu.tw/var/file/101/1101/img/1090720SCE(1).docx",
  naturalCreditFramework: "https://dehpd.ndhu.edu.tw/var/file/101/1101/img/1130828.pdf",
  roomD325: "https://dehpd.ndhu.edu.tw/p/406-1101-242712,r6660.php?Lang=zh-tw",
  aset2026: "https://aset2026.com/",
  asera2026: "https://www.asera.org.au/2026-conference/",
  phdQuota: "https://exam.ndhu.edu.tw/p/404-1104-257006.php?Lang=zh-tw",
  recommender: "https://dehpd.ndhu.edu.tw/p/406-1101-248709%2Cr6616.php?Lang=zh-tw",
  fiveYear: "https://dehpd.ndhu.edu.tw/p/406-1101-256575%2Cr6606.php?Lang=zh-tw",
  cityScience: "https://www.ndhu.edu.tw/p/404-1000-205590.php?Lang=zh-tw",
  facebookGroup: "https://www.facebook.com/groups/302501126476342",
  alumni: "https://dehpd.ndhu.edu.tw/p/406-1101-243958%2Cr6610.php?Lang=zh-tw",
  personnel990201: "https://ws2-sun.ndhu.edu.tw/~person/Chinese%20Web/15.right%20row/01.990201%28990209%29.pdf",
  ndltd: "https://ndltd.ncl.edu.tw/"
};

const t = (key) => copy[state.lang]?.[key] || copy.en[key] || copy["zh-Hant"][key];
const label = (key) => t("labels")[key] || copy.en.labels[key] || key;
const pick = (value) => {
  if (typeof value === "string") return value;
  return value?.[state.lang] || value?.en || value?.["zh-Hant"] || "";
};
const pickList = (items) => (items || []).map((item) => pick(item)).filter(Boolean);
const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;"
})[char]);
const academicYear = (value) => Number(String(value).match(/\d+/)?.[0] || 0);

const params = new URLSearchParams(location.search);
const teacherTabs = ["current", "admin", "former", "retired"];

const state = {
  lang: params.get("lang") || localStorage.getItem("ndhu-sciedu-lang") || "zh-Hant",
  section: (location.hash || "#home").slice(1) || "home",
  teacherTab: teacherTabs.includes(params.get("teacher")) ? params.get("teacher") : "current"
};

if (!copy[state.lang]) state.lang = "zh-Hant";
if (!sections.includes(state.section)) state.section = "home";

const newsItems = [
  {
    date: "2026-12-03",
    category: "研討會",
    title: {
      "zh-Hant": "2026第42屆科學教育國際研討會",
      en: "2026 International Conference of Science Education in Taiwan",
      ja: "2026年第42回台湾科学教育国際会議",
      "zh-Hans": "2026第42届科学教育国际研讨会",
      vi: "Hội nghị Quốc tế Giáo dục Khoa học tại Đài Loan 2026",
      th: "การประชุมวิทยาศาสตร์ศึกษานานาชาติไต้หวัน 2026",
      ko: "2026 제42회 대만 과학교육 국제학술대회",
      id: "Konferensi Internasional Pendidikan Sains Taiwan 2026",
      ms: "Persidangan Antarabangsa Pendidikan Sains Taiwan 2026"
    },
    summary: {
      "zh-Hant": "會議以「Science Education for All: 邁向共融公義之路」為主題，2026年12月3日至12月6日於國立臺灣師範大學公館校區舉行，論文投稿至2026年8月20日。",
      en: "The conference theme is “Science Education for All: Toward Diversity, Equity, Inclusion, and Public Accessibility.” It will be held at NTNU Gongguan Campus from Dec. 3 to Dec. 6, 2026. Paper submission closes on Aug. 20, 2026.",
      ja: "テーマは「Science Education for All」。2026年12月3日から12月6日まで国立台湾師範大学公館キャンパスで開催され、投稿締切は2026年8月20日です。",
      "zh-Hans": "会议以“Science Education for All: 迈向共融公义之路”为主题，2026年12月3日至12月6日在国立台湾师范大学公馆校区举行，论文投稿至2026年8月20日。",
      vi: "Chủ đề là “Science Education for All”; hội nghị diễn ra tại cơ sở Gongguan của NTNU từ 3 đến 6/12/2026, hạn nộp bài là 20/8/2026.",
      th: "หัวข้อคือ “Science Education for All” จัดที่วิทยาเขต Gongguan ของ NTNU วันที่ 3-6 ธ.ค. 2026 กำหนดส่งบทความ 20 ส.ค. 2026",
      ko: "주제는 “Science Education for All”이며, 2026년 12월 3-6일 국립대만사범대학 공관캠퍼스에서 열립니다. 논문 제출 마감은 2026년 8월 20일입니다.",
      id: "Bertema “Science Education for All”, konferensi berlangsung di Kampus Gongguan NTNU pada 3-6 Desember 2026. Batas pengiriman makalah 20 Agustus 2026.",
      ms: "Bertema “Science Education for All”, persidangan berlangsung di Kampus Gongguan NTNU pada 3-6 Disember 2026. Tarikh akhir penghantaran kertas kerja ialah 20 Ogos 2026."
    },
    url: sources.aset2026
  },
  {
    date: "2026-06-30",
    category: "國際研討會",
    title: {
      "zh-Hant": "ASERA57 2026年科學教育研究研討會",
      en: "ASERA57 2026 Conference",
      ja: "ASERA57 2026年会議",
      "zh-Hans": "ASERA57 2026年科学教育研究研讨会",
      vi: "Hội nghị ASERA57 năm 2026",
      th: "การประชุม ASERA57 ปี 2026",
      ko: "ASERA57 2026 학술대회",
      id: "Konferensi ASERA57 2026",
      ms: "Persidangan ASERA57 2026"
    },
    summary: {
      "zh-Hant": "第57屆Australasian Science Education Research Association年會將於2026年6月30日至7月3日在澳洲布里斯本舉行，由昆士蘭科技大學主辦；標準報名至2026年6月5日。",
      en: "The 57th Annual Conference of the Australasian Science Education Research Association will be held in Brisbane, Australia from June 30 to July 3, 2026, hosted by Queensland University of Technology. Standard registration closes on June 5, 2026.",
      ja: "第57回ASERA年会は2026年6月30日から7月3日までオーストラリア・ブリスベンで開催され、Queensland University of Technologyがホスト校です。通常登録締切は2026年6月5日です。",
      "zh-Hans": "第57届Australasian Science Education Research Association年会将于2026年6月30日至7月3日在澳洲布里斯本举行，由昆士兰科技大学主办；标准报名至2026年6月5日。",
      vi: "Hội nghị thường niên ASERA lần thứ 57 diễn ra tại Brisbane, Úc từ 30/6 đến 3/7/2026, do Queensland University of Technology đăng cai; hạn đăng ký tiêu chuẩn là 5/6/2026.",
      th: "การประชุมประจำปี ASERA ครั้งที่ 57 จัดที่บริสเบน ออสเตรเลีย วันที่ 30 มิ.ย.-3 ก.ค. 2026 โดย Queensland University of Technology หมดเขตลงทะเบียนทั่วไป 5 มิ.ย. 2026",
      ko: "제57회 ASERA 연례 학술대회는 2026년 6월 30일부터 7월 3일까지 호주 브리즈번에서 열리며 Queensland University of Technology가 주관합니다. 일반 등록 마감은 2026년 6월 5일입니다.",
      id: "Konferensi tahunan ASERA ke-57 akan berlangsung di Brisbane, Australia pada 30 Juni-3 Juli 2026, diselenggarakan oleh Queensland University of Technology. Registrasi standar ditutup 5 Juni 2026.",
      ms: "Persidangan tahunan ASERA ke-57 berlangsung di Brisbane, Australia pada 30 Jun-3 Julai 2026, dianjurkan oleh Queensland University of Technology. Pendaftaran standard ditutup pada 5 Jun 2026."
    },
    url: sources.asera2026
  },
  {
    date: "2026-04-29",
    category: "招生",
    title: {
      "zh-Hant": "115學年度博士班招生考試名額流用公告",
      en: "Quota adjustment for 2026 doctoral entrance examination",
      ja: "2026年度博士課程入試の定員調整",
      "zh-Hans": "115学年度博士班招生考试名额流用公告",
      vi: "Điều chỉnh chỉ tiêu kỳ thi tuyển sinh tiến sĩ 2026",
      th: "ประกาศปรับจำนวนรับสอบเข้าปริญญาเอก 2026",
      id: "Penyesuaian kuota ujian masuk doktor 2026",
      ms: "Pelarasan kuota peperiksaan kemasukan PhD 2026",
      ko: "2026학년도 박사과정 입학시험 정원 조정",
      es: "Ajuste de cupos para el examen doctoral 2026"
    },
    summary: {
      "zh-Hant": "校內公告顯示，教育與潛能開發學系科學教育博士班調整為3名。",
      en: "The university notice lists the Science Education Ph.D. program under DEHPD with an adjusted quota of 3.",
      ja: "入試サイトでは、科学教育博士課程の調整後定員が3名と示されています。",
      "zh-Hans": "招生信息网公告，教育与潜能开发学系科学教育博士班调整为3名。",
      vi: "Cổng tuyển sinh ghi nhận chương trình tiến sĩ Giáo dục Khoa học được điều chỉnh thành 3 chỉ tiêu.",
      th: "เว็บไซต์รับสมัครระบุว่าหลักสูตรปริญญาเอกวิทยาศาสตร์ศึกษาปรับเป็น 3 ที่นั่ง",
      id: "Portal penerimaan mencatat program Ph.D. Pendidikan Sains disesuaikan menjadi 3 kuota.",
      ms: "Portal kemasukan menyatakan program PhD Pendidikan Sains dilaras kepada 3 tempat.",
      ko: "입학 포털은 과학교육 박사과정 조정 정원을 3명으로 공지했습니다.",
      es: "El portal de admisiones indica que el doctorado en Educación Científica queda con 3 cupos."
    },
    url: sources.phdQuota
  },
  {
    date: "2026-04-15",
    category: "五年修讀",
    title: {
      "zh-Hant": "114-2學期五年連續修讀學、碩士學位申請",
      en: "Five-year bachelor's-to-master's pathway application",
      ja: "学士・修士五年一貫制度の申請",
      "zh-Hans": "114-2学期五年连续修读学、硕士学位申请",
      vi: "Đăng ký lộ trình cử nhân-thạc sĩ 5 năm",
      th: "สมัครเส้นทางเรียนต่อปริญญาตรี-โทห้าปี",
      id: "Pendaftaran jalur sarjana-magister lima tahun",
      ms: "Permohonan laluan ijazah-sarjana lima tahun",
      ko: "학·석사 5년 연계 과정 신청",
      es: "Solicitud de vía integrada licenciatura-maestría de cinco años"
    },
    summary: {
      "zh-Hant": "公告提供教育碩士班與科學教育碩士班各5名學雜費減免名額，申請期為115年5月4日至5月15日。",
      en: "The notice offers 5 tuition-waiver places for the Science Education master's pathway, with applications from May 4 to May 15, 2026.",
      ja: "科学教育修士課程に5名の学雑費減免枠があり、申請期間は2026年5月4日から5月15日です。",
      "zh-Hans": "公告提供科学教育硕士班5名学杂费减免名额，申请期为2026年5月4日至5月15日。",
      vi: "Thông báo có 5 suất miễn giảm học phí cho thạc sĩ Giáo dục Khoa học, nhận hồ sơ từ 4 đến 15/5/2026.",
      th: "มีทุนลดหย่อนค่าเล่าเรียน 5 ที่สำหรับปริญญาโทวิทยาศาสตร์ศึกษา รับสมัคร 4-15 พ.ค. 2026",
      id: "Tersedia 5 tempat keringanan biaya untuk M.A. Pendidikan Sains, pendaftaran 4-15 Mei 2026.",
      ms: "Terdapat 5 tempat pengecualian yuran untuk Sarjana Pendidikan Sains, 4-15 Mei 2026.",
      ko: "과학교육 석사과정에 학비 감면 5명이 제공되며 신청 기간은 2026년 5월 4-15일입니다.",
      es: "Hay 5 plazas con exención para la maestría en Educación Científica; solicitudes del 4 al 15 de mayo de 2026."
    },
    url: sources.fiveYear
  },
  {
    date: "2026-01-08",
    category: "研討會",
    title: {
      "zh-Hant": "2026第十三屆華山論見教育學術研討會徵稿",
      en: "2026 Huashan Forum education conference call for papers",
      ja: "2026年第13回華山論見教育学術研討会の募集",
      "zh-Hans": "2026第十三届华山论见教育学术研讨会征稿",
      vi: "Kêu gọi bài viết Hội thảo Giáo dục Huashan 2026",
      th: "เปิดรับบทความการประชุมการศึกษา Huashan 2026",
      id: "Panggilan makalah Forum Pendidikan Huashan 2026",
      ms: "Panggilan kertas kerja Forum Pendidikan Huashan 2026",
      ko: "2026 제13회 화산논견 교육학술대회 논문 모집",
      es: "Convocatoria del Foro Educativo Huashan 2026"
    },
    summary: {
      "zh-Hant": "徵稿領域包含AI與數位應用、科學閱讀與STEAM。",
      en: "Topics include AI and digital applications, science reading, and STEAM.",
      ja: "AI・デジタル応用、科学読解、STEAMが含まれます。",
      "zh-Hans": "征稿领域包含AI与数字应用、科学阅读与STEAM。",
      vi: "Chủ đề gồm AI, ứng dụng số, đọc khoa học và STEAM.",
      th: "หัวข้อรวม AI ดิจิทัล การอ่านวิทยาศาสตร์ และ STEAM",
      id: "Topik meliputi AI, aplikasi digital, literasi sains, dan STEAM.",
      ms: "Topik merangkumi AI, aplikasi digital, bacaan sains dan STEAM.",
      ko: "AI·디지털 활용, 과학 읽기, STEAM을 포함합니다.",
      es: "Incluye IA, aplicaciones digitales, lectura científica y STEAM."
    },
    url: "https://dehpd.ndhu.edu.tw/p/406-1101-252889%2Cr6606.php?Lang=zh-tw"
  },
  {
    date: "2025-10-01",
    category: "甄試",
    title: {
      "zh-Hant": "115學年度科學教育博士班、碩士班甄試招生簡章",
      en: "2026 recommendation admission brochure for Science Education M.A./Ph.D.",
      ja: "2026年度科学教育修士・博士推薦入試要項",
      "zh-Hans": "115学年度科学教育博士班、硕士班甄试招生简章",
      vi: "Đề cương tuyển sinh xét tuyển thạc sĩ/tiến sĩ 2026",
      th: "คู่มือรับสมัครคัดเลือกปริญญาโท/เอก 2026",
      id: "Brosur seleksi rekomendasi M.A./Ph.D. 2026",
      ms: "Brosur kemasukan saringan Sarjana/PhD 2026",
      ko: "2026학년도 과학교육 석박사 추천입학 요강",
      es: "Guía de admisión recomendada 2026 para maestría/doctorado"
    },
    summary: {
      "zh-Hant": "公告列出科教博士班2名、科教碩士班6名，網路報名期間為2025年10月15日至10月28日。",
      en: "The notice lists 2 Ph.D. and 6 master's places, with online application from Oct. 15 to Oct. 28, 2025.",
      ja: "博士2名、修士6名で、オンライン申請は2025年10月15日から10月28日です。",
      "zh-Hans": "公告列出科教博士班2名、科教硕士班6名，网路报名期间为2025年10月15日至10月28日。",
      vi: "Thông báo nêu 2 chỉ tiêu tiến sĩ và 6 chỉ tiêu thạc sĩ; đăng ký trực tuyến 15-28/10/2025.",
      th: "ประกาศระบุปริญญาเอก 2 ที่และโท 6 ที่ สมัครออนไลน์ 15-28 ต.ค. 2025",
      id: "Tercantum 2 tempat Ph.D. dan 6 tempat magister, pendaftaran 15-28 Okt. 2025.",
      ms: "Menyenaraikan 2 tempat PhD dan 6 tempat sarjana, permohonan 15-28 Okt. 2025.",
      ko: "박사 2명, 석사 6명을 명시하며 온라인 접수는 2025년 10월 15-28일입니다.",
      es: "Indica 2 plazas doctorales y 6 de maestría; solicitud en línea del 15 al 28 de octubre de 2025."
    },
    url: sources.recommender
  }
];

const faculty = {
  current: [
    {
      name: "陳世文",
      role: "副教授兼師培中心副主任",
      degree: "國立臺灣師範大學科學教育研究所博士",
      research: {
        "zh-Hant": "系統功能語言學、科學文本分析、科學探究教學、大數據語料探勘、AI與科學學習",
        en: "Systemic functional linguistics, science text analysis, inquiry teaching, corpus/data mining, AI and science learning",
        ja: "システム機能言語学、科学テキスト分析、探究型授業、データマイニング、AIと科学学習",
        "zh-Hans": "系统功能语言学、科学文本分析、科学探究教学、大数据语料探勘、AI与科学学习",
        vi: "Ngôn ngữ học chức năng hệ thống, phân tích văn bản khoa học, dạy học tìm tòi, khai phá dữ liệu, AI và học khoa học",
        th: "ภาษาศาสตร์เชิงหน้าที่ การวิเคราะห์ข้อความวิทยาศาสตร์ การสอนแบบสืบเสาะ ข้อมูลขนาดใหญ่ และ AI กับการเรียนวิทยาศาสตร์",
        id: "Linguistik fungsional sistemik, analisis teks sains, pembelajaran inkuiri, penambangan data, AI dan pembelajaran sains",
        ms: "Linguistik fungsional sistemik, analisis teks sains, pengajaran inkuiri, perlombongan data, AI dan pembelajaran sains",
        ko: "체계기능언어학, 과학 텍스트 분석, 탐구 수업, 데이터 마이닝, AI와 과학 학습",
        es: "Lingüística sistémico-funcional, análisis de textos científicos, enseñanza indagatoria, minería de datos, IA y aprendizaje científico"
      },
      email: "shiwen@gms.ndhu.edu.tw",
      office: "教育學院大樓B429室",
      phone: "03-8903853",
      image: "assets/faculty-chen-shih-wen.jpg",
      url: sources.facultyChen,
      rdUrl: sources.rdChen,
      highlights: [
        "研究領域包含科學語言、文本分析、科學探究教學與AI科學學習。",
        "可指導科學閱讀、數位學習、語料探勘與科學課程相關研究。"
      ],
      selectedPublications: [
        "完整著作、研究計畫與指導成果可連至東華教師研究成果資料庫。",
        "官方教師頁列出系統功能語言學、科學文本分析、科學探究教學、大數據語料探勘、AI與科學學習等專長。"
      ]
    },
    {
      name: "蔡仁哲",
      role: "助理教授",
      degree: "國立臺灣師範大學科學教育研究所博士",
      research: {
        "zh-Hant": "科學教育、小學教育、遊戲式教學、社會性科學議題",
        en: "Science education, elementary education, game-based teaching, socio-scientific issues",
        ja: "科学教育、初等教育、ゲーム型授業、社会的科学課題",
        "zh-Hans": "科学教育、小学教育、游戏式教学、社会性科学议题",
        vi: "Giáo dục khoa học, giáo dục tiểu học, dạy học qua trò chơi, vấn đề khoa học-xã hội",
        th: "วิทยาศาสตร์ศึกษา ประถมศึกษา การสอนผ่านเกม และประเด็นวิทยาศาสตร์-สังคม",
        id: "Pendidikan sains, pendidikan dasar, pengajaran berbasis permainan, isu sosiosaintifik",
        ms: "Pendidikan sains, pendidikan rendah, pengajaran berasaskan permainan, isu sosiosaintifik",
        ko: "과학교육, 초등교육, 게임 기반 수업, 사회과학적 쟁점",
        es: "Educación científica, educación primaria, enseñanza basada en juegos y cuestiones sociocientíficas"
      },
      email: "tsaijc@gms.ndhu.edu.tw",
      office: "教育學院大樓B431室",
      phone: "03-8903840",
      image: "assets/faculty-tsai-jen-che.jpg",
      url: sources.facultyTsai,
      rdUrl: sources.rdTsai,
      highlights: [
        "研究領域包含科學教育、小學教育、遊戲式教學與社會性科學議題。",
        "可指導科學遊戲、國小自然科教學與科學素養相關研究。"
      ],
      selectedPublications: [
        "完整著作與研究計畫以東華教師研究成果資料庫為準。",
        "官方教師頁列出科學教育、小學教育、遊戲式教學、社會性科學議題等專長。"
      ]
    },
    {
      name: "鄭立婷",
      role: "助理教授",
      degree: "國立高雄師範大學科學教育暨環境教育研究所博士",
      research: {
        "zh-Hant": "自然科學教材教法、科學史與科學哲學、科學探究與實作課程設計與教學、STEAM教學研究",
        en: "Science teaching materials and methods, history and philosophy of science, inquiry/practice curriculum, STEAM education",
        ja: "自然科学教材教法、科学史・科学哲学、探究・実作カリキュラム、STEAM教育",
        "zh-Hans": "自然科学教材教法、科学史与科学哲学、科学探究与实作课程设计与教学、STEAM教学研究",
        vi: "Phương pháp dạy khoa học, lịch sử và triết học khoa học, chương trình tìm tòi-thực hành, STEAM",
        th: "วิธีสอนวิทยาศาสตร์ ประวัติและปรัชญาวิทยาศาสตร์ หลักสูตรสืบเสาะและปฏิบัติ STEAM",
        id: "Metode dan bahan ajar sains, sejarah dan filsafat sains, kurikulum inkuiri-praktik, STEAM",
        ms: "Kaedah dan bahan pengajaran sains, sejarah dan falsafah sains, kurikulum inkuiri-praktik, STEAM",
        ko: "자연과학 교재교법, 과학사와 과학철학, 탐구·실습 교육과정, STEAM",
        es: "Didáctica de ciencias, historia y filosofía de la ciencia, currículo de indagación y práctica, STEAM"
      },
      email: "liting032@gms.ndhu.edu.tw",
      office: "教育學院大樓B428室",
      phone: "03-8903850",
      image: "assets/faculty-cheng-li-ting.jpg",
      url: sources.facultyCheng,
      rdUrl: sources.rdCheng,
      highlights: [
        "以科學史與科學哲學支撐STEAM、探究與實作課程，能把科學知識放回人文與社會脈絡。",
        "研究方向包含科學閱讀、科學史融入教學、跨領域通識與國際教材分析。"
      ],
      selectedPublications: [
        "博士論文：跨領域思維下運用科學史於大學通識課程之取徑。",
        "指導論文例：Tran Phuoc Giang，112學年度碩士論文，分析越南六年級科學教科書問題設計。"
      ],
      selectedProjects: [
        "113年度國科會科普活動計畫：洄瀾山海見科學-科普教學宅急便。"
      ]
    },
    {
      name: "蔣佳玲",
      role: "教授",
      degree: "國立彰化師範大學科學教育研究所博士",
      research: {
        "zh-Hant": "多元文化、社會互動、話語分析、地科教育",
        en: "Multicultural education, social interaction, discourse analysis, earth-science education",
        ja: "多文化、社会的相互作用、談話分析、地球科学教育",
        "zh-Hans": "多元文化、社会互动、话语分析、地科教育",
        vi: "Đa văn hóa, tương tác xã hội, phân tích diễn ngôn, giáo dục khoa học Trái Đất",
        th: "พหุวัฒนธรรม ปฏิสัมพันธ์ทางสังคม การวิเคราะห์วาทกรรม และธรณีวิทยาศึกษา",
        id: "Multikultural, interaksi sosial, analisis wacana, pendidikan ilmu kebumian",
        ms: "Multibudaya, interaksi sosial, analisis wacana, pendidikan sains bumi",
        ko: "다문화, 사회적 상호작용, 담화 분석, 지구과학교육",
        es: "Multiculturalidad, interacción social, análisis del discurso y educación en ciencias de la Tierra"
      },
      email: "clchiang@gms.ndhu.edu.tw",
      office: "教育學院大樓B430室",
      phone: "03-8903852",
      image: "assets/faculty-chiang-chia-ling.jpg",
      url: sources.facultyChiang,
      rdUrl: sources.rdChiang,
      highlights: [
        "研究領域包含多元文化、社會互動、科學話語與地科教育。",
        "跨科概念、海洋概念與科學課室互動可串連十二年國教素養導向課程。"
      ],
      selectedPublications: [
        "教育部大學校院教師學術專長彙整表列示專長：社會互動、科學史哲、科學話語、多元文化的科學教育。",
        "完整著作與研究計畫以東華教師研究成果資料庫為準。"
      ],
      selectedTheses: [
        "李練婷，108學年度碩士論文：國小四年級學生「系統與尺度」跨科概念之診斷與教學。",
        "利奕達，105學年度碩士論文：花蓮地區高中學生海洋概念之研究。"
      ]
    },
    {
      name: "劉明洲",
      role: "教授（教育與潛能開發學系）／歷任科教所指導師資",
      degree: "國立臺灣師範大學工業教育研究所博士",
      research: {
        "zh-Hant": "資訊融入教學、資訊教育、網路學習、數位教材開發",
        en: "Technology integration, information education, online learning, digital materials development"
      },
      advisorCount: "11",
      email: "liu@gms.ndhu.edu.tw",
      office: "教育學院大樓B407室",
      phone: "03-8903832",
      image: "assets/legacy-liu-ming-chou.jpg",
      url: sources.facultyLiuMingChou,
      urlLabel: { "zh-Hant": "教師頁", en: "Faculty Page" },
      highlights: [
        "東華教育與潛能開發學系專任教師頁列為教授，研究領域為資訊融入教學、資訊教育、網路學習與數位教材開發。",
        "舊科教所論文目錄中，以劉明洲為指導教授的公開紀錄有11筆；113學年度科教博士班課程資料亦列其任課。"
      ],
      selectedTheses: [
        "吳志恆，88學年度碩士論文：國小學童電腦焦慮之相關因素研究。",
        "姜禮能，90學年度碩士論文：國小教師對於資訊融入教學之變革關注與相關因素研究。",
        "余光臨，91學年度碩士論文：資訊融入學校本位主題探索教學之行動研究。",
        "陳蕙蘭，94學年度碩士論文：網路主題式學習之知能統整歷程研究。"
      ]
    }
  ],
  admin: [
    {
      name: "蔡明樫",
      role: "助理（科學教育碩／博業務）",
      degree: "國立東華大學教育與潛能開發學系行政人員",
      research: {
        "zh-Hant": "科學教育碩士班／博士班行政業務、招生與學生事務聯繫",
        en: "Administrative affairs for the Science Education M.A. and Ph.D. programs, admissions, and student services",
        ja: "科学教育修士課程・博士課程の事務、入試、学生支援",
        "zh-Hans": "科学教育硕士班／博士班行政业务、招生与学生事务联系",
        vi: "Hỗ trợ hành chính cho chương trình thạc sĩ/tiến sĩ, tuyển sinh và công tác sinh viên",
        th: "งานธุรการหลักสูตรปริญญาโท/เอก การรับสมัคร และบริการนักศึกษา",
        id: "Urusan administrasi program M.A./Ph.D., penerimaan, dan layanan mahasiswa",
        ms: "Urusan pentadbiran program Sarjana/PhD, kemasukan dan perkhidmatan pelajar",
        ko: "과학교육 석사/박사과정 행정, 입학, 학생 업무 지원"
      },
      email: "esontsai@gms.ndhu.edu.tw",
      office: "花師教育學院 B207 室",
      phone: "03-8903824",
      image: "assets/admin-tsai-ming-jian.jpg",
      url: sources.adminTsai,
      urlLabel: { "zh-Hant": "行政人員頁", en: "Staff Page" },
      highlights: [
        {
          "zh-Hant": "系網列為科學教育碩／博業務窗口，考生、在學生與校友需要系辦協助時，可優先由此聯繫。",
          en: "The department lists this staff member as the contact point for Science Education M.A./Ph.D. affairs."
        },
        {
          "zh-Hant": "官方頁面提供電話、傳真與電子信箱，方便考生、在學生與校友找到正確窗口。",
          en: "The public page provides phone, fax, and email details for applicants, students, and alumni."
        }
      ]
    }
  ],
  former: [
    {
      name: "潘宏明",
      role: "歷任指導師資",
      degree: "論文目錄列為指導教授",
      research: {
        "zh-Hant": "數學教育、原住民族學生數概念、幾何概念、分數教學",
        en: "Mathematics education, Indigenous students' number concepts, geometry concepts, fraction teaching"
      },
      advisorCount: "10",
      highlights: [
        "舊科教所論文目錄中，以潘宏明為指導教授的紀錄有10筆。",
        "指導題目集中在泰雅族學生數概念、平面幾何概念、分數教學與國小數學學習。"
      ],
      selectedTheses: [
        "林蘭香，87學年度碩士論文：花蓮縣國小一年級泰雅族新生數概念詮釋性研究。",
        "呂季霏，89學年度碩士論文：花蓮縣國小低年級泰雅族學生平面幾何概念之詮釋性研究。",
        "謝燕惠，89學年度碩士論文：花蓮市近郊國小二年級泰雅族學童數概念之詮釋性研究。",
        "許秀玉，91學年度碩士論文：師院生分數教學相關知識之調查研究。"
      ]
    },
    {
      name: "張惠珠",
      role: "歷任指導師資",
      degree: "論文目錄列為指導教授",
      research: {
        "zh-Hant": "環境教育、生命教育、性健康教育、鄉土植物與防震教育",
        en: "Environmental education, life education, sex-health education, local plants, disaster-prevention education"
      },
      advisorCount: "5",
      highlights: [
        "舊科教所論文目錄中，以張惠珠為指導教授的紀錄有5筆。",
        "指導題目包含鳥類概念、防震教育、鄉土植物、生命教育與健康教學。"
      ],
      selectedTheses: [
        "趙之琪，87學年度碩士論文：師院生性健康教學效果研究。",
        "吳聖才，89學年度碩士論文：花蓮縣國小高年級學生鳥類概念之研究。",
        "許惠卿，91學年度碩士論文：國小防震教育課程實施之行動研究。",
        "張春燕，91學年度碩士論文：「鄉土植物」教學理論與實務之研究。"
      ]
    },
    {
      name: "石明卿",
      role: "歷任指導師資",
      degree: "論文目錄列為指導教授",
      research: {
        "zh-Hant": "環境教育、自然保育、戶外教學資源、自然科教材",
        en: "Environmental education, conservation, outdoor teaching resources, science curriculum materials"
      },
      advisorCount: "4",
      highlights: [
        "舊科教所論文目錄中，以石明卿為指導教授的紀錄有4筆。",
        "指導題目集中於野生動物保育、戶外環境教育、自然保育素養與環境教育教材。"
      ],
      selectedTheses: [
        "洪俐玲，87學年度碩士論文：國小六年級學生對野生動物保育的知識、態度及行為之研究。",
        "余宗翰，88學年度碩士論文：花蓮縣國小教師運用戶外環境教育教學資源之調查研究。",
        "韓名璋，89學年度碩士論文：現行國小自然科教科書有關環境教育教材之研究。",
        "游雅如，89學年度碩士論文：花蓮縣國小學生自然保育環境素養之研究。"
      ]
    },
    {
      name: "林煥祥",
      role: "歷任指導師資",
      degree: "論文目錄與東華時期論文資料列為指導教授",
      research: {
        "zh-Hant": "科學論證、設計實驗能力、教師專業能力、科學態度",
        en: "Scientific argumentation, experimental-design ability, teacher professional competence, attitudes toward science"
      },
      advisorCount: "5",
      highlights: [
        "舊科教所論文目錄中，以林煥祥為指導教授的紀錄有4筆；東華時期學位論文另有共同指導紀錄。",
        "指導題目包含論證能力、設計實驗能力、教師專業能力與科學態度。"
      ],
      selectedTheses: [
        "陳坤源，95學年度碩士論文：探討國小學童論證能力之研究。",
        "李宜穆，94學年度碩士論文：國中個案班級學生設計實驗能力與後設認知相關研究。",
        "簡嘉伶，94學年度碩士論文：國小科學教師專業能力之調查研究。",
        "陳健忠，103學年度博士論文：心智圖及論證融入科展培養學生科學探究能力之研究。"
      ]
    },
    {
      name: "其他論文指導師資",
      role: "共同指導／外聘指導紀錄",
      degree: "舊科教所論文目錄列名",
      research: {
        "zh-Hant": "地科概念、建構教學、科學本質、特殊教學資源、原住民族時間概念等",
        en: "Earth-science concepts, constructivist teaching, nature of science, special teaching resources, Indigenous time concepts"
      },
      advisorCount: "9",
      advisorNames: ["吳慶軍", "吳德邦", "饒見維", "段曉林", "蔡今中", "李思根", "袁媛"],
      highlights: [
        "舊科教所論文目錄另列吳慶軍2筆，以及吳德邦、饒見維、段曉林、蔡今中、李思根、袁媛等各1筆指導紀錄。",
        "這些紀錄保留共同指導與跨校、跨領域支援的早期科教所樣貌。"
      ],
      selectedTheses: [
        "吳慶軍：林永菁，92學年度碩士論文，不同教學法及心智能力與兒童地科概念認知層次的關係研究。",
        "饒見維：林嘉玲，88學年度碩士論文，數學遊戲融入建構教學之協同行動研究。",
        "段曉林：顏弘志，89學年度碩士論文，建構主義取向教學的實踐。",
        "蔡今中：黃昭銘，89學年度碩士論文，國小高年級學童學習生物繁殖之認知結構分析。"
      ]
    }
  ],
  retired: [
    {
      name: "劉聖忠",
      role: "退休教師／歷任科教所指導師資",
      degree: "美國愛荷華大學科學教育學博士",
      research: {
        "zh-Hant": "科學史哲、科學教育、教育研究法、科學教師教學專業發展、環境教育與有機農業",
        en: "History and philosophy of science, science education, research methods, science teacher professional development, environmental education and organic agriculture"
      },
      advisorCount: "43",
      retirement: "退休教師",
      image: "assets/legacy-liu-sheng-chung.jpg",
      highlights: [
        "舊版教師頁列為劉聖忠助理教授，專長包含科學史哲、科學教育、教育研究法與科學教師專業發展。",
        "舊科教所論文目錄中，以劉聖忠為指導教授的紀錄有43筆，是早期科教所重要指導師資。"
      ],
      selectedTheses: [
        "汪光懿，87學年度碩士論文：原住民國小學童動物分類概念發展之詮釋性研究。",
        "鄭淑妃，87學年度碩士論文：國小自然科教師科學本質觀之詮釋性研究。",
        "江維信，88學年度碩士論文：科學本質課程對師院研究生科學本質觀影響之研究。",
        "鄭子善，88學年度碩士論文：科學故事課程設計之行動研究--以燃燒現象發展史為例。"
      ]
    },
    {
      name: "陳龍川",
      role: "退休教師／首任所長／歷任科教所指導師資",
      degree: "科學教育研究所首任所長",
      research: {
        "zh-Hant": "概念改變、電腦模擬、概念生態、幾何思考、網路問題式學習",
        en: "Conceptual change, computer simulation, conceptual ecology, geometry thinking, web-based problem-based learning"
      },
      advisorCount: "10",
      retirement: "退休教師",
      url: sources.history,
      urlLabel: { "zh-Hant": "沿革頁", en: "History Page" },
      highlights: [
        "官方沿革頁列陳龍川為86年8月至88年7月首任所長。",
        "舊科教所論文目錄中，以陳龍川為指導教授的紀錄有10筆。"
      ],
      selectedTheses: [
        "陳振威，87學年度碩士論文：學生概念生態組成因子之研究－以密度/浮沈概念為例。",
        "官翰德，87學年度碩士論文：結合電腦模擬的概念改變教學策略對兒童密度相關概念學習成就之影響。",
        "葛曉冬，88學年度碩士論文：花蓮地區國小泰雅族學生van Hiele幾何思考層次之調查研究。",
        "孫鈺凱，90學年度碩士論文：網路問題式學習環境建置與學習行為分析之研究。"
      ]
    },
    {
      name: "李暉",
      role: "教授",
      degree: "國立彰化師範大學理學博士",
      research: {
        "zh-Hant": "科學知識社會學、質性研究、師資培育、原住民科學教育、化學教育、科學傳播",
        en: "Sociology of scientific knowledge, qualitative research, teacher education, Indigenous science education, chemistry education, science communication"
      },
      retirement: "113年2月",
      email: "leehuei@gms.ndhu.edu.tw",
      url: sources.retired,
      highlights: [
        "長期深耕原住民科學教育、地方本位課程、科學傳播與師資培育，是科教所在東部在地研究的重要代表。",
        "學位論文資料顯示，李暉教授指導主題橫跨IKW、太魯閣族知識、科學媒體素養、科學場館到校服務與科學閱讀。"
      ],
      selectedTheses: [
        "拉罕羅幸，112學年度博士論文：從Snaw Balay的概念探討太魯閣族的知識信念與世界觀。",
        "郭淑禎，110學年度博士論文：以傳統歌謠探討台灣太魯閣族群在地知識與世界觀。",
        "毛盈芝，112學年度碩士論文：初任教師在探究本位科學媒體素養課程中的行動研究。",
        "王邦文，105學年度碩士論文：十二年國教原住民科學學習融入IKW的實踐。"
      ]
    },
    {
      name: "古智雄",
      role: "副教授",
      degree: "國立台灣師範大學科學教育博士",
      research: {
        "zh-Hant": "科學學習心理學、科學哲學、社會認知與科學傳播、認知心理學與科學學習、物理教育",
        en: "Psychology of science learning, philosophy of science, social cognition and science communication, cognitive psychology and physics education"
      },
      retirement: "111年8月",
      email: "chku@gms.ndhu.edu.tw",
      url: sources.retired,
      highlights: [
        "以科學學習心理學、熱認知、科學合理性判斷與物理教育為特色，支撐學生概念理解與態度研究。",
        "舊科教所論文目錄可見多篇由古智雄教授指導的科學問題合理性判斷、科學態度與跨年級學習研究。"
      ],
      selectedTheses: [
        "蔡茲娟，93學年度碩士論文：國小學童物質相變化理解表徵之研究。",
        "劉浩欣，94學年度碩士論文：目標引導下學童慎下斷語科學態度之研究。",
        "葉靜怡，96學年度碩士論文：國中小學生科學本質觀之調查研究-以東台灣六、七、九年級為例。"
      ]
    },
    {
      name: "許銘津",
      role: "歷任所長／早期專任教授",
      degree: "美國德州農工大學工業工程系博士",
      research: {
        "zh-Hant": "生物教育、資訊教育、科學教育",
        en: "Biology education, information education, science education"
      },
      retirement: "早期專任師資",
      email: "mjhl@mail.ndhu.edu.tw",
      highlights: [
        "舊科教所早期專任師資與歷任所長之一，研究專長連結生物教育、資訊教育與科學教育。",
        "舊論文目錄顯示其指導主題包含科學玩具、科學創造力、資訊融入自然科、模型分類與教科書內容分析。"
      ],
      selectedTheses: [
        "許順欽，91學年度碩士論文：科學玩具融入國小自然科教學以促進學童創造性問題解決能力之行動研究。",
        "陳子聖，96學年度碩士論文：國小高年級審定版自然教科書之內容分析研究。",
        "連振翔，96學年度碩士論文：國小自然與生活科技教科書之模型分類研究。"
      ]
    }
  ]
};

const recentAlumniTheses = [
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "博士",
    gradTerm: "113",
    name: "黃俊仁",
    advisor: "古智雄",
    title: "高中學生在ChatGPT輔助機器人課程學習中的程式設計能力及自我效能",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料",
    url: "https://hdl.handle.net/11296/e5r4v2"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "碩士",
    gradTerm: "112",
    name: "林郁鈞",
    advisor: "李暉",
    title: "高等教育學生的媒體素養與對食品添加物的態度",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料",
    url: "https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id%3D%22112NDHU5331012%22.&searchmode=basic"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "博士",
    gradTerm: "112",
    name: "拉罕羅幸",
    advisor: "李暉",
    title: "從Snaw Balay的概念探討太魯閣族的知識信念與世界觀",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料",
    url: "https://hdl.handle.net/11296/7r9aa8"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "碩士",
    gradTerm: "112",
    name: "毛盈芝",
    advisor: "李暉",
    title: "初任教師在探究本位科學媒體素養課程中的行動研究",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料",
    url: "https://hdl.handle.net/11296/xav67k"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "碩士",
    gradTerm: "112",
    name: "管介銘",
    advisor: "李暉",
    title: "從食安議題探討國小學童媒體素養培育",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "碩士",
    gradTerm: "112",
    name: "Tran Phuoc Giang",
    advisor: "鄭立婷",
    title: "The analysis of questions in 6th-grade Science Textbooks in Vietnam based on revised Bloom's taxonomy",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "碩士",
    gradTerm: "111",
    name: "張鈞傑",
    advisor: "古智雄",
    title: "大學生生活科技社會意象之研究－以機能性服飾為例",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料",
    url: "https://hdl.handle.net/11296/4y6yuw"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "博士",
    gradTerm: "110",
    name: "林宛青",
    advisor: "李暉",
    title: "可見的教師專業發展-以國中自然領域輔導團為例",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "博士",
    gradTerm: "110",
    name: "郭淑禎",
    advisor: "李暉",
    title: "以傳統歌謠探討台灣太魯閣族群在地知識與世界觀",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "碩士",
    gradTerm: "110",
    name: "林佳儀",
    advisor: "蔣佳玲",
    title: "普通班科學教師轉任集中式特教班之衝擊與轉變",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料",
    url: "https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id%3D%22110NDHU5331037%22.&searchmode=basic"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "博士",
    gradTerm: "109",
    name: "張慧娟",
    advisor: "李暉",
    title: "運用肯定式探詢引領國小師培生自然科教學實習之研究",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "碩士",
    gradTerm: "108",
    name: "李練婷",
    advisor: "蔣佳玲",
    title: "國小四年級學生「系統與尺度」跨科概念之診斷與教學",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "碩士",
    gradTerm: "108",
    name: "陳愛華",
    advisor: "古智雄",
    title: "學童於Chapman探究式數學課室的學習動機及學習成就",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料",
    url: "https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id%3D%22108NDHU5331015%22.&searchmode=basic"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "碩士",
    gradTerm: "105",
    name: "陳婉匀",
    advisor: "李暉",
    title: "教學序與概念序對國中生於生殖單元學習成效之影響",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "碩士",
    gradTerm: "105",
    name: "王邦文",
    advisor: "李暉",
    title: "十二年國教原住民科學學習融入IKW的實踐",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料",
    url: "https://hdl.handle.net/11296/mw38fv"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "碩士",
    gradTerm: "105",
    name: "利奕達",
    advisor: "蔣佳玲",
    title: "花蓮地區高中學生海洋概念之研究",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "碩士",
    gradTerm: "105",
    name: "劉乙萱",
    advisor: "李暉",
    title: "花蓮地區高中學生科學素養與媒體素養之相關性研究",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "碩士",
    gradTerm: "104",
    name: "鄭瑤思",
    advisor: "李暉",
    title: "科學教育場館到校服務成效之研究—以瑞穗生態教育館為例",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "教育與潛能開發學系",
    degree: "碩士",
    gradTerm: "104",
    name: "廖証三",
    advisor: "古智雄",
    title: "Maker? Maker!高中學生自造課程的學習態度",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "課程設計與潛能開發學系",
    degree: "博士",
    gradTerm: "103",
    name: "陳健忠",
    advisor: "林煥祥 / 李暉",
    title: "心智圖及論證融入科展培養學生科學探究能力之研究",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "課程設計與潛能開發學系",
    degree: "碩士",
    gradTerm: "103",
    name: "許永明",
    advisor: "李暉",
    title: "結合科學閱讀與心智圖教學以提升國小學童科學學習成效之行動研究",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "課程設計與潛能開發學系",
    degree: "碩士",
    gradTerm: "103",
    name: "林程熹",
    advisor: "李暉",
    title: "地方本位課程與原住民學童的科學學習態度：以太魯閣族之土地與水為例",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "課程設計與潛能開發學系",
    degree: "碩士",
    gradTerm: "103",
    name: "葉雲豪",
    advisor: "李暉",
    title: "花蓮地區國中原漢學生的環境覺知與環境責任",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "課程設計與潛能開發學系",
    degree: "碩士",
    gradTerm: "103",
    name: "陳勁豪",
    advisor: "李暉",
    title: "港口阿美族的海洋知識觀",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "課程設計與潛能開發學系",
    degree: "碩士",
    gradTerm: "103",
    name: "葉宏仁",
    advisor: "李暉",
    title: "高中學生對酸鹼布忍斯特洛瑞定義之想法",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "課程設計與潛能開發學系",
    degree: "碩士",
    gradTerm: "102",
    name: "吳宗賢",
    advisor: "李暉",
    title: "花蓮國小學童對科學學習者之認同",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "課程設計與潛能開發學系",
    degree: "碩士",
    gradTerm: "102",
    name: "方建華",
    advisor: "古智雄",
    title: "數學科學一家親？從數學與科學教師的觀點談起",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "課程設計與潛能開發學系",
    degree: "碩士",
    gradTerm: "102",
    name: "劉祝住",
    advisor: "蔣佳玲",
    title: "國中九年級學生之科學素養－以花蓮縣某國中為例",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料"
  },
  {
    era: "東華時期",
    program: "課程設計與潛能開發學系",
    degree: "博士",
    gradTerm: "101",
    name: "張仁民",
    advisor: "李暉 / 林煥祥",
    title: "原住民族重點小學科學教師專業發展模式研究",
    school: "國立東華大學",
    source: "國家圖書館臺灣博碩士論文知識加值系統公開資料",
    url: "https://tci.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi?o=dnclresource&s=id%3D%22101NDHU5331047%22.&searchmode=basic&tcihsspage=tcisearch_opt1_search"
  }
];

const quickLinks = [
  ["faculty", "師資陣容", "Faculty list", "#faculty"],
  ["curriculum", "課程架構", "Curriculum", "#curriculum"],
  ["downloads", "規章表單", "Regulations", "#downloads"],
  ["students", "所友資料", "Alumni records", "#students"]
];

const programFeatures = [
  {
    title: { "zh-Hant": "科學教育研究人才", en: "Science education researchers" },
    body: {
      "zh-Hant": "碩士班培養科學教育研究、科學教學與科普推廣能力；博士班培養進階研究、課程發展與教育行政人才。",
      en: "The master's program develops research, science teaching, and outreach capacity; the Ph.D. program supports advanced research, curriculum development, and educational administration."
    }
  },
  {
    title: { "zh-Hant": "東部在地與社區服務", en: "Eastern Taiwan and community service" },
    body: {
      "zh-Hant": "延續舊科教所服務東部地區中小學、教師專業成長與社區科學學習的傳統。",
      en: "The site continues the institute tradition of serving schools, teacher development, and community science learning in eastern Taiwan."
    }
  },
  {
    title: { "zh-Hant": "AI、STEM與實作導向", en: "AI, STEM, and practice-based inquiry" },
    body: {
      "zh-Hant": "招生資料指出發展主題包含AI在科學教育上的應用、科學遊戲、科學教具、STEM課程、社會性科學議題與實作課程。",
      en: "Admission materials identify AI in science education, science games, teaching-aid development, STEM curriculum, socio-scientific issues, and practice-based courses as themes."
    }
  },
  {
    title: { "zh-Hant": "科學傳播與大眾科普", en: "Science communication and public outreach" },
    body: {
      "zh-Hant": "科普列車、全民科學週與城市科學節構成東華科學教育連結學校、社區與地方的主要活動脈絡。",
      en: "Science train, science week, and city science festival records show how NDHU science education connects schools, communities, and place-based learning."
    }
  }
];

const instituteTimeline = [
  {
    year: "花師時期",
    title: { "zh-Hant": "由數理教育系籌設", en: "From Hualien Teachers College mathematics and science education" },
    body: {
      "zh-Hant": "本所前身為花蓮師範學院數理教育學系。當年由數理教育系陳世輝主任與具科學教育專長的教授群籌設，目標是培育國小自然科師資、促進在職自然科教師專業成長，並培育科學教育研究與行政人才。",
      en: "The institute grew from the Department of Mathematics and Science Education at Hualien Teachers College, with a mission to prepare elementary science teachers, support in-service teacher growth, and develop research and administrative talent."
    },
    source: ""
  },
  {
    year: "1997 / 民86",
    title: { "zh-Hant": "國小科學教育研究所成立", en: "Graduate institute established" },
    body: {
      "zh-Hant": "民國86年8月獲准成立，當時名為「花蓮師範學院國小科學教育研究所」，以培育國小科學師資、研究人才與行政人才為宗旨。",
      en: "Approved in August 1997 as the Graduate Institute of Elementary Science Education at Hualien Teachers College."
    },
    source: ""
  },
  {
    year: "2000-2004",
    title: { "zh-Hant": "在職教師進修能量擴大", en: "Expanded pathways for in-service teachers" },
    body: {
      "zh-Hant": "89學年度招收第一屆暑期教學碩士班，91與93學年度招收週末教學碩士班，回應東部與全臺在職自然科教師的進修需求。",
      en: "The first summer teaching master's cohort began in 2000, followed by weekend teaching master's cohorts in 2002 and 2004."
    },
    source: ""
  },
  {
    year: "2004 / 民93",
    title: { "zh-Hant": "更名為科學教育研究所", en: "Renamed the Graduate Institute of Science Education" },
    body: {
      "zh-Hant": "民國93年8月更名為「科學教育研究所」，招生對象由國小自然科教師擴展到國中與高中科學教師，研究與培育範圍更完整。",
      en: "In August 2004, the institute was renamed and expanded its recruitment from elementary science teachers to junior and senior high school science teachers."
    },
    source: ""
  },
  {
    year: "2006 / 民95",
    title: { "zh-Hant": "博士班成立，研究架構完整", en: "Ph.D. program launched" },
    body: {
      "zh-Hant": "95學年度起開辦第一屆博士班；現行官方沿革頁說明，博士班成立後完整科學教育學術研究架構確立。",
      en: "The first doctoral cohort began in 2006, completing the program's research training structure."
    },
    source: sources.history
  },
  {
    year: "2010 / 民99",
    title: { "zh-Hant": "併入教育與潛能開發學系", en: "Integrated into DEHPD" },
    body: {
      "zh-Hant": "民國99年8月起與課程設計與潛能開發學系整併，內設科學教育碩士班與博士班，延續研究所傳統，同時取得教育學院跨域資源。",
      en: "Since August 2010, the program has been housed in the department as Science Education M.A. and Ph.D. tracks, preserving institute traditions while gaining broader educational resources."
    },
    source: sources.history
  },
  {
    year: "現在",
    title: { "zh-Hant": "AI、STEM、地方本位與科普服務並進", en: "AI, STEM, place-based science, and outreach" },
    body: {
      "zh-Hant": "現階段師資專長涵蓋AI與科學學習、科學文本分析、遊戲式教學、社會性科學議題、科學史哲、STEAM、多元文化科學教育、環境與永續教育。",
      en: "Current areas include AI and science learning, science text analysis, game-based teaching, SSI, history and philosophy of science, STEAM, multicultural science education, environment, and sustainability."
    },
    source: sources.faculty
  }
];

const instituteDirectors = [
  ["86.8-88.7", "陳龍川"],
  ["88.8-92.7", "許銘津"],
  ["92.8-94.7", "古智雄"],
  ["94.8-97.7", "許銘津"],
  ["97.8-99.7", "古智雄"]
];

const curriculumThemes = [
  ["研究方法與論文寫作", "Research methods and thesis writing", "科學教育研究設計、資料分析、質性研究、行動研究與論文研討。"],
  ["科學學習與教學", "Science learning and teaching", "科學概念理解、探究與實作、科學本質、論證、閱讀與科學文本。"],
  ["教師專業與課程創新", "Teacher development and curriculum innovation", "師資培育、自然領域教師專業成長、STEAM、教具研發與實作課程。"],
  ["科技、AI與科學傳播", "Technology, AI, and science communication", "AI在科學教育上的應用、科學遊戲、數位教材、科學媒體素養與大眾科普。"],
  ["在地與多元文化科學教育", "Place-based and multicultural science education", "原住民科學教育、地方本位課程、環境與永續、海洋與山林脈絡。"]
];

const downloads = [
  ["教育系研究生助學金(TA)分配原則", "Graduate TA allocation principles", sources.taRules, "2025-05-15"],
  ["教育系研究生獎學金(RA)分配原則", "Graduate RA scholarship allocation principles", sources.raRules, "2025-05-15"],
  ["國小教師加註自然領域專長專門課程科目及學分一覽表", "Elementary teacher natural science endorsement course/credit list", sources.naturalCreditList, "2025-01-23"],
  ["國小教師加註自然領域專長專門課程申請表", "Elementary teacher natural science endorsement application form", sources.naturalCreditForm, "2025-01-23"],
  ["國小教師加註自然領域專長專門課程新舊科目對照表", "Natural science endorsement course equivalency table", sources.naturalCreditCompare, "2025-01-10"],
  ["國民小學教師加註自然領域專長專門課程架構表", "Elementary teacher natural science endorsement framework", sources.naturalCreditFramework, "2025-01-10"],
  ["教D325科學教學演示教室借用規則", "D325 science teaching demonstration room rules", sources.roomD325, "2025-05-15"],
  ["科學教育碩士班修業要點", "M.A. Science Education study regulations", sources.maReg, "113版"],
  ["科學教育博士班修業要點", "Ph.D. Science Education study regulations", sources.phdReg, "114版"],
  ["科學教育博士班課程地圖", "Ph.D. Science Education curriculum map", sources.mapPhd, "113版"],
  ["科學教育碩士班課程地圖", "M.A. Science Education curriculum map", sources.mapMaster, "113版"],
  ["115學年度科學教育碩士班招生簡章", "2026 M.A. admission brochure", sources.masterAdmission115, "115學年度"]
];

const eventItems = [
  {
    year: "2019",
    title: {
      "zh-Hant": "第二屆南花蓮全民科學週",
      en: "Second South Hualien Science Week",
      ja: "第2回南花蓮全民科学週",
      "zh-Hans": "第二届南花莲全民科学周",
      vi: "Tuần Khoa học Nam Hoa Liên lần thứ hai",
      th: "สัปดาห์วิทยาศาสตร์ประชาชนตอนใต้ของฮัวเหลียน ครั้งที่ 2",
      id: "Pekan Sains Hualien Selatan Kedua",
      ms: "Minggu Sains Hualien Selatan Kedua",
      ko: "제2회 남화련 시민 과학주간",
      es: "Segunda Semana de Ciencia del Sur de Hualien"
    },
    body: {
      "zh-Hant": "活動由東里國小起跑，玉里、富里、光復、卓溪等20所中小學參與，透過在地特色闖關活動提升科學學習興趣。",
      en: "The route began at Dongli Elementary and involved 20 schools in south and central Hualien through local science stations.",
      ja: "東里国小から始まり、中南部花蓮の20校が地域性ある科学ブースに参加しました。",
      "zh-Hans": "活动由东里小学起跑，玉里、富里、光复、卓溪等20所中小学参与，以在地特色闯关提升科学学习兴趣。",
      vi: "Tuyến hoạt động bắt đầu ở Tiểu học Dongli và có 20 trường tại trung/nam Hoa Liên tham gia các trạm khoa học địa phương.",
      th: "กิจกรรมเริ่มที่โรงเรียนตงหลี่และมี 20 โรงเรียนในฮัวเหลียนตอนกลางและใต้ร่วมกิจกรรมฐานวิทยาศาสตร์ท้องถิ่น",
      id: "Kegiatan dimulai di SD Dongli dan melibatkan 20 sekolah melalui pos sains berbasis lokal.",
      ms: "Aktiviti bermula di Sekolah Dongli dan melibatkan 20 sekolah melalui stesen sains tempatan.",
      ko: "동리초등학교에서 시작해 화련 중남부 20개 학교가 지역 기반 과학 부스에 참여했습니다.",
      es: "La ruta inició en la Escuela Dongli con 20 escuelas de Hualien central y sur mediante estaciones científicas locales."
    }
  },
  {
    year: "2020",
    title: {
      "zh-Hant": "科普列車與全民科學週闖關活動",
      en: "Science train and science week stations",
      ja: "科学列車と全民科学週の体験ブース",
      "zh-Hans": "科普列车与全民科学周闯关活动",
      vi: "Science Train và các trạm Tuần Khoa học",
      th: "รถไฟวิทยาศาสตร์และฐานกิจกรรมสัปดาห์วิทยาศาสตร์",
      id: "Science Train dan pos Pekan Sains",
      ms: "Science Train dan stesen Minggu Sains",
      ko: "과학열차와 과학주간 체험 부스",
      es: "Tren científico y estaciones de la Semana de Ciencia"
    },
    body: {
      "zh-Hant": "東華新聞以「振盪」全民科學週與科普列車為題，記錄學童闖關、表演與科學體驗。",
      en: "NDHU news recorded oscillation-themed science week and science train activities with student stations and demonstrations.",
      ja: "東華ニュースは「振盪」をテーマに、児童のブース体験、発表、科学活動を記録しました。",
      "zh-Hans": "东华新闻以“振荡”全民科学周与科普列车为题，记录学童闯关、表演与科学体验。",
      vi: "Tin NDHU ghi lại tuần khoa học chủ đề dao động cùng Science Train, gồm trạm học sinh, biểu diễn và trải nghiệm.",
      th: "ข่าว NDHU บันทึกสัปดาห์วิทยาศาสตร์หัวข้อการสั่น พร้อมฐานนักเรียน การแสดง และการทดลอง",
      id: "Berita NDHU mencatat Pekan Sains bertema osilasi dan Science Train dengan pos siswa serta demonstrasi.",
      ms: "Berita NDHU merekod Minggu Sains bertema ayunan dan Science Train dengan stesen pelajar serta demonstrasi.",
      ko: "NDHU 뉴스는 진동 주제의 과학주간과 과학열차 활동, 학생 부스와 시연을 기록했습니다.",
      es: "Noticias de NDHU registró una semana de ciencia sobre oscilación y actividades del tren científico con estaciones y demostraciones."
    },
    url: "https://www.ndhu.edu.tw/p/404-1000-172282.php?Lang=zh-tw"
  },
  {
    year: "2023",
    title: {
      "zh-Hant": "IYBSSDXTW城市科學節花蓮場",
      en: "IYBSSDXTW City Science Festival in Hualien",
      ja: "IYBSSDXTW都市科学祭・花蓮会場",
      "zh-Hans": "IYBSSDXTW城市科学节花莲场",
      vi: "Lễ hội Khoa học Thành phố IYBSSDXTW tại Hoa Liên",
      th: "เทศกาลวิทยาศาสตร์เมือง IYBSSDXTW ที่ฮัวเหลียน",
      id: "Festival Sains Kota IYBSSDXTW di Hualien",
      ms: "Festival Sains Bandar IYBSSDXTW di Hualien",
      ko: "IYBSSDXTW 도시과학축제 화련 행사",
      es: "Festival de Ciencia Urbana IYBSSDXTW en Hualien"
    },
    body: {
      "zh-Hant": "活動結合光、顏色、螢光檢測葉綠素與手機顯微鏡等體驗。",
      en: "Activities included light, color, fluorescence detection of chlorophyll, and mobile microscopy.",
      ja: "光、色、葉緑素の蛍光検出、スマートフォン顕微鏡などの体験が含まれました。",
      "zh-Hans": "活动结合光、颜色、荧光检测叶绿素与手机显微镜等体验。",
      vi: "Hoạt động gồm ánh sáng, màu sắc, phát hiện huỳnh quang diệp lục và kính hiển vi điện thoại.",
      th: "กิจกรรมรวมเรื่องแสง สี การตรวจคลอโรฟิลล์ด้วยฟลูออเรสเซนซ์ และกล้องจุลทรรศน์มือถือ",
      id: "Kegiatan meliputi cahaya, warna, deteksi fluoresensi klorofil, dan mikroskop ponsel.",
      ms: "Aktiviti merangkumi cahaya, warna, pengesanan fluoresen klorofil dan mikroskop telefon.",
      ko: "빛, 색, 엽록소 형광 검출, 휴대폰 현미경 체험이 포함되었습니다.",
      es: "Incluyó luz, color, detección fluorescente de clorofila y microscopía móvil."
    },
    url: sources.cityScience
  }
];

const stateNote = {
  "zh-Hant": "在學學生資料由系辦維護；本頁呈現碩士班、博士班培育方向與所友學位論文。",
  en: "Current student information is maintained by the department office. This page presents program pathways and alumni theses.",
  ja: "在学生情報は学科事務室が管理します。本ページでは修士・博士課程の育成方向と校友の学位論文を示します。",
  "zh-Hans": "在学学生资料由系办维护；本页呈现硕士班、博士班培育方向与所友学位论文。",
  vi: "Thông tin sinh viên đang học do văn phòng khoa duy trì; trang này trình bày định hướng đào tạo và luận văn cựu học viên.",
  th: "ข้อมูลนักศึกษาปัจจุบันดูแลโดยสำนักงานภาควิชา หน้านี้นำเสนอแนวทางหลักสูตรและวิทยานิพนธ์ศิษย์เก่า",
  id: "Data mahasiswa aktif dikelola kantor departemen; halaman ini menampilkan arah program dan tesis alumni.",
  ms: "Maklumat pelajar semasa diselenggara oleh pejabat jabatan; halaman ini memaparkan hala tuju program dan tesis alumni.",
  ko: "재학생 정보는 학과 사무실에서 관리하며, 이 페이지는 석·박사 과정 방향과 동문 학위논문을 제시합니다.",
  es: "La información de estudiantes activos la mantiene la oficina del departamento; esta página presenta líneas formativas y tesis de alumni."
};

function init() {
  renderLanguageOptions();
  bindEvents();
  render();
}

function bindEvents() {
  document.getElementById("languageSelect").addEventListener("change", (event) => {
    state.lang = event.target.value;
    localStorage.setItem("ndhu-sciedu-lang", state.lang);
    render();
  });

  document.querySelector(".menu-toggle").addEventListener("click", (event) => {
    const nav = document.getElementById("siteNav");
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open);
    event.currentTarget.setAttribute("aria-expanded", String(open));
  });

  window.addEventListener("hashchange", () => {
    const next = (location.hash || "#home").slice(1);
    if (sections.includes(next)) {
      state.section = next;
      render();
    }
  });
}

function renderLanguageOptions() {
  const select = document.getElementById("languageSelect");
  select.innerHTML = languages.map(([code, name]) => `<option value="${code}">${name}</option>`).join("");
}

function render() {
  const c = copy[state.lang] || copy.en;
  document.documentElement.lang = state.lang;
  document.title = c.siteName;
  document.querySelector("[data-i18n='skip']").textContent = c.skip;
  document.getElementById("siteName").textContent = c.siteName;
  document.getElementById("siteSubname").textContent = c.siteSubname;
  document.getElementById("languageLabel").textContent = c.language;
  document.getElementById("languageSelect").value = state.lang;
  document.getElementById("footerTitle").textContent = c.siteName;
  const footerText = document.getElementById("footerText");
  footerText.textContent = c.footer || "";
  footerText.hidden = !c.footer;
  renderNav();
  renderMain();
  updateUrl();
}

function updateUrl() {
  const url = new URL(location.href);
  url.searchParams.set("lang", state.lang);
  url.hash = state.section;
  history.replaceState(null, "", url);
}

function renderNav() {
  const nav = document.getElementById("siteNav");
  const navGroups = [
    { title: t("nav").home, items: ["home"] },
    { title: state.lang.startsWith("zh") ? "研究所介紹" : "About", items: ["features"] },
    { title: state.lang.startsWith("zh") ? "招生與課程" : "Admissions & Curriculum", items: ["admissions", "curriculum", "downloads"] },
    { title: state.lang.startsWith("zh") ? "師生與所友" : "People", items: ["faculty", "students"] },
    { title: t("nav").events, items: ["events"] }
  ];
  nav.innerHTML = navGroups.map((group) => {
    const active = group.items.includes(state.section);
    if (group.items.length === 1) {
      const section = group.items[0];
      return `<button class="nav-button ${active ? "active" : ""}" type="button" data-section="${section}">${group.title}</button>`;
    }
    return `<div class="nav-group ${active ? "active" : ""}">
      <button class="nav-group-title" type="button">${group.title}</button>
      <div class="nav-submenu">
        ${group.items.map((section) => `<button class="nav-button ${section === state.section ? "active" : ""}" type="button" data-section="${section}">${t("nav")[section]}</button>`).join("")}
      </div>
    </div>`;
  }).join("");
  nav.querySelectorAll("button").forEach((button) => {
    if (!button.dataset.section) return;
    button.addEventListener("click", () => {
      state.section = button.dataset.section;
      location.hash = state.section;
      nav.classList.remove("open");
      document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
      render();
    });
  });
}

function renderMain() {
  const main = document.getElementById("content");
  if (state.section === "home") main.innerHTML = renderHome();
  if (state.section === "news") main.innerHTML = renderNews();
  if (state.section === "admissions") main.innerHTML = renderAdmissions();
  if (state.section === "faculty") main.innerHTML = renderFaculty();
  if (state.section === "students") main.innerHTML = renderStudents();
  if (state.section === "features") main.innerHTML = renderFeatures();
  if (state.section === "curriculum") main.innerHTML = renderCurriculum();
  if (state.section === "downloads") main.innerHTML = renderDownloads();
  if (state.section === "events") main.innerHTML = renderEvents();
}

function header(section, sourceUrl = sources.department, band = false) {
  return `
    <section class="content-section ${band ? "band" : ""}">
      <div class="section-inner">
        <div class="section-header">
          <div>
            <div class="section-kicker">${t("updated")}</div>
            <h2>${t("nav")[section]}</h2>
            <p>${t("intros")[section]}</p>
          </div>
        </div>
  `;
}

function closeSection() {
  return "</div></section>";
}

function sectionSubhead(title, text = "") {
  return `<div class="section-subhead">
    <h3>${title}</h3>
    ${text ? `<p>${text}</p>` : ""}
  </div>`;
}

function storyCard(title, body, url = "") {
  return `<article class="story-card">
    <h3>${title}</h3>
    <p>${body}</p>
    ${url ? `<a href="${url}" target="_blank" rel="noreferrer">${t("readMore")}</a>` : ""}
  </article>`;
}

function compactList(items) {
  return `<ul class="compact-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderHome() {
  const isZh = state.lang.startsWith("zh");
  const mainNews = newsItems.slice(0, 7);
  const examNews = newsItems
    .filter((item) => ["招生", "五年修讀", "甄試"].includes(item.category))
    .slice(0, 3);
  const activityRows = eventItems.slice(0, 4);
  return `
    <section class="portal-home">
      <div class="section-inner">
        <div class="portal-banner">
          <img src="assets/science-week-cover.jpg" alt="科學教育活動照片">
          <div class="portal-banner-text">
            <span>${isZh ? "科學教育碩士班／博士班" : "Science Education M.A. / Ph.D."}</span>
            <h1>${t("siteName")}</h1>
            <p>${isZh ? "招生、課程、師資、學生、所友與文件下載資訊。" : "Admissions, curriculum, faculty, students, alumni, and documents."}</p>
          </div>
        </div>
        <div class="portal-layout">
          <main class="portal-main">
            <section class="portal-block">
              <div class="portal-tabs" aria-label="${isZh ? "公告分類" : "Notice categories"}">
                ${[t("nav").news, t("nav").admissions, t("nav").events, t("nav").downloads].map((item, index) => `<button class="${index === 0 ? "active" : ""}" type="button">${item}</button>`).join("")}
              </div>
              ${homeNewsTable(mainNews)}
              <p class="more-link"><a href="#news">${isZh ? "更多..." : "More..."}</a></p>
            </section>
            <section class="portal-block">
              <h2>${isZh ? "招生重要公告" : "Admissions Notices"}</h2>
              ${homeNewsTable(examNews)}
              <p class="more-link"><a href="#admissions">${isZh ? "更多..." : "More..."}</a></p>
            </section>
            <section class="portal-block media-list">
              <h2>${isZh ? "活動紀錄" : "Activity Records"}</h2>
              <div class="portal-media-grid">
                ${activityRows.map((item) => `<a href="#events">
                  <img src="assets/science-week-cover.jpg" alt="">
                  <span>${pick(item.title)}</span>
                </a>`).join("")}
              </div>
            </section>
          </main>
          <aside class="portal-side">
            <section class="side-box search-box">
              <h2>${isZh ? "快速搜尋" : "Search"}</h2>
              <label>
                <span>${isZh ? "關鍵字" : "Keyword"}</span>
                <input type="search" placeholder="${isZh ? "輸入關鍵字" : "Keyword"}">
              </label>
            </section>
            <section class="side-box">
              <h2>${isZh ? "快速連結" : "Quick Links"}</h2>
              <div class="side-links">
                ${quickLinks.map(([section, zh, en, url]) => `<a href="${url}"><strong>${isZh ? zh : en}</strong><span>${t("nav")[section] || en}</span></a>`).join("")}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function homeNewsTable(items) {
  const isZh = state.lang.startsWith("zh");
  return `<table class="portal-news-table">
    <thead><tr><th>${isZh ? "日期" : "Date"}</th><th>${isZh ? "標題" : "Title"}</th></tr></thead>
    <tbody>
      ${items.map((item) => `<tr>
        <td>${item.date}</td>
        <td><a href="${item.url}" target="_blank" rel="noreferrer">${pick(item.title)}</a></td>
      </tr>`).join("")}
    </tbody>
  </table>`;
}

function renderNews() {
  const isZh = state.lang.startsWith("zh");
  return `${header("news", sources.department)}
    <div class="info-band">
        <h3>${isZh ? "消息分類" : "News Categories"}</h3>
      <p>${isZh
        ? "招生、學術活動與科普服務依日期排列，保留日期與類別。"
        : "Admission, academic, and outreach news are presented in one dated flow with dates and categories."}</p>
    </div>
    <div class="grid cols-2">
      ${newsItems.map((item) => notice(item)).join("")}
    </div>
  ${closeSection()}`;
}

function renderAdmissions() {
  const isZh = state.lang.startsWith("zh");
  const cards = [
    {
      title: { "zh-Hant": "科教博士班考試", en: "Science Education Ph.D. examination admission" },
      body: { "zh-Hant": "115學年度招生考試公告與名額流用資訊顯示，科學教育博士班最新調整名額為3名。", en: "The latest quota adjustment notice lists the Science Education Ph.D. program with 3 places." },
      tags: ["2026", "Ph.D.", "3"],
      url: sources.phdQuota
    },
    {
      title: { "zh-Hant": "科教碩博士甄試", en: "Recommendation admission for M.A./Ph.D." },
      body: { "zh-Hant": "115學年度甄試公告列出科教博士班2名、科教碩士班6名。", en: "The 2026 recommendation admission notice lists 2 Ph.D. and 6 master's places." },
      tags: ["甄試", "2+6", "115"],
      url: sources.recommender
    },
    {
      title: { "zh-Hant": "五年連續修讀", en: "Five-year B.A./M.A. pathway" },
      body: { "zh-Hant": "114-2申請公告提供科學教育碩士班5名學雜費減免名額。", en: "The 2026 notice provides 5 tuition-waiver places for the Science Education master's pathway." },
      tags: ["5年", "碩士班", "學雜費"],
      url: sources.fiveYear
    }
  ];
  return `${header("admissions", sources.department, true)}
    <div class="feature-story">
      <div>
        <span class="section-kicker">${isZh ? "招生管道" : "Admissions"}</span>
        <h3>${isZh ? "科學教育碩士班／博士班招生" : "Science Education M.A. and Ph.D. Admissions"}</h3>
        <p>${isZh
          ? "碩士班培養科學教育研究、科學教學、科學素養與科普推廣能力；博士班培養進階研究、課程發展與教育行政人才。"
          : "The M.A. track develops science education research, teaching, literacy, and outreach capacity; the Ph.D. track supports advanced research, curriculum development, and educational administration."}</p>
      </div>
      <div class="panel">
        <h3>${isZh ? "招生頁脈絡" : "Admissions Pathways"}</h3>
        ${compactList(isZh
          ? ["考試入學、甄試入學與五年連續修讀分項呈現。", "招生名額、簡章與公告均連至有效校內頁面。", "研究方向與師資資料可互相查閱。"]
          : ["Examination admission, recommendation admission, and five-year pathway are separated.", "Quotas, brochures, and notices link to active university pages.", "Research themes and faculty profiles are cross-linked."])}
      </div>
    </div>
    <div class="grid cols-2">
      ${cards.map((item) => card(pick(item.title), pick(item.body), item.tags, item.url)).join("")}
    </div>
  ${closeSection()}`;
}

function renderFaculty() {
  const tabs = teacherTabs.map((key) => [key, label(key)]);
  const list = faculty[state.teacherTab] || faculty.current;
  const sourceUrl = state.teacherTab === "admin"
    ? sources.admin
    : state.teacherTab === "retired"
      ? sources.retired
      : state.teacherTab === "former"
        ? sources.faculty
        : sources.faculty;
  setTimeout(() => {
    document.querySelectorAll(".tab-button").forEach((button) => {
      button.addEventListener("click", () => {
        state.teacherTab = button.dataset.tab;
        renderMain();
      });
    });
  });
  return `${header("faculty", sourceUrl)}
    <div class="tabs">
      ${tabs.map(([key, name]) => `<button class="tab-button ${state.teacherTab === key ? "active" : ""}" data-tab="${key}" type="button">${name}</button>`).join("")}
    </div>
    <div class="grid cols-2">
      ${list.map(teacherCard).join("")}
    </div>
    ${state.teacherTab !== "admin" ? renderAdvisorThesisBlock(list) : ""}
  ${closeSection()}`;
}

function renderStudents() {
  const isZh = state.lang.startsWith("zh");
  const legacyRows = window.legacyAlumniTheses || [];
  const alumniRows = [...recentAlumniTheses, ...legacyRows];
  const phdCount = alumniRows.filter((row) => row.degree === "博士").length;
  const advisorCount = new Set(alumniRows.map((row) => row.advisor).filter(Boolean)).size;
  const groups = [
    {
      title: label("master"),
      body: {
        "zh-Hant": "主要培養科學教育研究、科學教學專業、科學素養與科普推廣能力；在學名單可依研究群、入學年或指導教授呈現。",
        en: "Develops research, science teaching, scientific literacy, and outreach capacity; office-approved rosters can be grouped by research theme, cohort, or advisor."
      },
      tags: ["M.A.", "Science Education"]
    },
    {
      title: label("doctoral"),
      body: {
        "zh-Hant": "培養具國際視野與在地關懷的科學教育研究與革新領導者，博士校友的學位論文主題涵蓋教師專業發展、原住民知識與科學探究研究。",
        en: "Develops researchers and innovation leaders; public thesis data shows doctoral work in teacher professional development, Indigenous knowledge, and inquiry."
      },
      tags: ["Ph.D.", "Leadership"]
    },
    {
      title: isZh ? "五年修讀準研究生" : "Five-year pathway students",
      body: {
        "zh-Hant": "公開公告顯示科學教育碩士班提供五年修讀學雜費減免名額，可作為優秀大學生銜接研究所的入口。",
        en: "Public notices show tuition-waiver places for five-year pathway students entering the Science Education master's program."
      },
      tags: ["5-year", "Pipeline"]
    }
  ];
  const stats = [
    [String(alumniRows.length), isZh ? "學位論文紀錄" : "thesis records"],
    [String(legacyRows.length), isZh ? "花師／花教大時期" : "legacy-era records"],
    [String(recentAlumniTheses.length), isZh ? "東華時期論文" : "NDHU-era theses"],
    [String(phdCount), isZh ? "博士論文紀錄" : "doctoral records"],
    [String(advisorCount), isZh ? "指導教授群" : "advisors"]
  ];
  return `${header("students", sources.alumni, true)}
    <div class="callout">${pick(stateNote)}</div>
    <div class="grid cols-3" style="margin-top:1rem">
      ${groups.map((item) => card(item.title, pick(item.body), item.tags)).join("")}
    </div>
    <div class="stat-strip" aria-label="${isZh ? "校友論文資料統計" : "Alumni thesis statistics"}">
      ${stats.map(([number, text]) => `<div><strong>${number}</strong><span>${text}</span></div>`).join("")}
    </div>
    <h3 style="margin:2rem 0 1rem">${isZh ? "所友學位論文" : "Alumni Theses"}</h3>
    ${renderAlumniTable(alumniRows)}
  ${closeSection()}`;
}

function renderAlumniTable(rows) {
  const labels = state.lang.startsWith("zh")
    ? ["時期", "畢業學年", "學位", "姓名", "指導教授", "論文題目", "系所／班別"]
    : ["Era", "Year", "Degree", "Name", "Advisor", "Thesis Title", "Program"];
  const visibleRows = rows
    .slice()
    .sort((a, b) => academicYear(b.gradTerm) - academicYear(a.gradTerm) || String(b.gradTerm).localeCompare(String(a.gradTerm), "zh-Hant"))
    .map((row) => {
      const title = renderThesisTitle(row);
      return `<tr>
        <td>${escapeHtml(row.era)}</td>
        <td>${escapeHtml(row.gradTerm)}</td>
        <td>${escapeHtml(row.degree)}</td>
        <td>${escapeHtml(row.name)}</td>
        <td>${escapeHtml(row.advisor)}</td>
        <td>${title}</td>
        <td>${escapeHtml(row.program)}</td>
      </tr>`;
    })
    .join("");
  return `<div class="thesis-table-wrap" tabindex="0">
    <table class="thesis-table">
      <thead>
        <tr>${labels.map((item) => `<th>${item}</th>`).join("")}</tr>
      </thead>
      <tbody>${visibleRows}</tbody>
    </table>
  </div>`;
}

function renderThesisTitle(row) {
  const href = row.url || "";
  if (!href) return escapeHtml(row.title);
  return `<a href="${href}" target="_blank" rel="noreferrer">${escapeHtml(row.title)}</a>`;
}

function thesisRowsForPeople(people) {
  const allRows = [...recentAlumniTheses, ...(window.legacyAlumniTheses || [])];
  const names = people.flatMap((person) => person.advisorNames || [person.name]).filter(Boolean);
  const seen = new Set();
  return allRows
    .filter((row) => names.some((name) => String(row.advisor || "").includes(name)))
    .filter((row) => {
      const key = `${row.name}|${row.gradTerm}|${row.advisor}|${row.title}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => academicYear(b.gradTerm) - academicYear(a.gradTerm) || String(a.name).localeCompare(String(b.name), "zh-Hant"));
}

function renderAdvisorThesisBlock(people) {
  const isZh = state.lang.startsWith("zh");
  const rows = thesisRowsForPeople(people);
  if (!rows.length) return "";
  const labels = isZh
    ? ["指導教授", "畢業學年", "學位", "姓名", "論文題目", "資料時期"]
    : ["Advisor", "Year", "Degree", "Name", "Thesis Title", "Era"];
  const visibleRows = rows.map((row) => {
    const title = renderThesisTitle(row);
    return `<tr>
      <td>${escapeHtml(row.advisor)}</td>
      <td>${escapeHtml(row.gradTerm)}</td>
      <td>${escapeHtml(row.degree)}</td>
      <td>${escapeHtml(row.name)}</td>
      <td>${title}</td>
      <td>${escapeHtml(row.era)}</td>
    </tr>`;
  }).join("");
  return `
    ${sectionSubhead(isZh ? "指導學生與論文" : "Supervised Students and Theses", isZh ? "依畢業學年由新至舊排列；共同指導論文保留完整指導教授欄位。花師／花教大時期舊站連結已移除，內容直接整理於本頁。" : "Rows are listed from newest to oldest. Co-advised theses retain the full advisor field; legacy-site links are not used.")}
    <div class="thesis-table-wrap advisor-thesis-table" tabindex="0">
      <table class="thesis-table">
        <thead>
          <tr>${labels.map((item) => `<th>${item}</th>`).join("")}</tr>
        </thead>
        <tbody>${visibleRows}</tbody>
      </table>
    </div>`;
}

function renderFeatures() {
  const isZh = state.lang.startsWith("zh");
  const history = isZh
    ? "本所於民國86年8月成立碩士班，民國95年8月成立博士班，民國99年8月起與課程設計與潛能開發學系整併，內設科學教育碩士班及博士班。"
    : "The institute established its master's program in August 1997 and doctoral program in August 2006; since August 2010 it has been integrated into the Department of Education and Human Potentials Development as the Science Education M.A. and Ph.D. programs.";
  const legacyRows = window.legacyAlumniTheses || [];
  const advisorNames = [...new Set([...recentAlumniTheses, ...legacyRows].map((row) => row.advisor).filter(Boolean))];
  return `${header("features", sources.goals)}
    <div class="media-strip">
      <figure>
        <img src="assets/science-week-cover.jpg" alt="Science week outreach">
        <figcaption>${isZh ? "南花蓮全民科學週活動影像" : "South Hualien Science Week image"}</figcaption>
      </figure>
      <div class="panel">
        <h3>${isZh ? "沿革定位" : "Program Identity"}</h3>
        <p>${history}</p>
        <div class="tag-row">
          <span class="tag">1997 M.A.</span><span class="tag">2006 Ph.D.</span><span class="tag">2010 DEHPD</span>
        </div>
      </div>
    </div>
    <div class="feature-story">
      <div>
        <span class="section-kicker">${isZh ? "創立背景" : "Founding Background"}</span>
        <h3>${isZh ? "從自然科師資培育開始，走向完整的科學教育研究" : "From science teacher preparation to full research training"}</h3>
        <p>${isZh
          ? "既有沿革資料顯示，本所由花蓮師範學院數理教育系籌設。設立目的包括培育國小自然科師資、促進在職教師專業成長，並培養科學教育研究與行政人才。"
          : "The legacy record states that the institute grew from the Department of Mathematics and Science Education, with teacher preparation, in-service teacher growth, research, and educational administration as its early missions."}</p>
      </div>
      <div class="panel">
        <h3>${isZh ? "所友資料" : "Alumni Records"}</h3>
        <div class="metric-grid">
          <div class="metric-card"><strong>${legacyRows.length + recentAlumniTheses.length}</strong><span>${isZh ? "學位論文紀錄" : "thesis records"}</span></div>
          <div class="metric-card"><strong>${legacyRows.length}</strong><span>${isZh ? "花師／花教大時期" : "legacy era"}</span></div>
          <div class="metric-card"><strong>${recentAlumniTheses.length}</strong><span>${isZh ? "東華時期代表紀錄" : "NDHU era samples"}</span></div>
          <div class="metric-card"><strong>${advisorNames.length}</strong><span>${isZh ? "指導教授群" : "advisors"}</span></div>
        </div>
      </div>
    </div>
    ${sectionSubhead(isZh ? "發展沿革" : "Development Timeline", isZh ? "從花師時期到東華時期，延續東部科學教育人才培育的脈絡。" : "From the Hualien Teachers College era to NDHU, the program continues the science education mission in eastern Taiwan.")}
    <div class="timeline">
      ${instituteTimeline.map((item) => `
        <article class="timeline-item">
          <div class="year">${item.year}</div>
          <div>
            <h3>${pick(item.title)}</h3>
            <p>${pick(item.body)}</p>
            ${item.source ? `<a href="${item.source}" target="_blank" rel="noreferrer">${t("readMore")}</a>` : ""}
          </div>
        </article>
      `).join("")}
    </div>
    <div class="narrative-grid">
      <div class="panel">
        <h3>${isZh ? "歷任所長" : "Former Directors"}</h3>
        <table class="director-table">
          <tbody>
            ${instituteDirectors.map(([term, name]) => `<tr><th>${term}</th><td>${name}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
      <div class="panel">
        <h3>${isZh ? "所友發展" : "Alumni Pathways"}</h3>
        <p>${isZh
          ? "所友研究主題包含國小自然科教學、科學玩具、科學本質、原住民科學教育、科學媒體素養、教師專業發展與科普場館服務。"
          : "Public thesis records show alumni work in elementary science teaching, toys and creativity, nature of science, Indigenous science education, media literacy, teacher professional development, and outreach services."}</p>
        <a href="#students">${isZh ? "查看所友論文資料庫" : "View Alumni Thesis Database"}</a>
      </div>
    </div>
    ${sectionSubhead(isZh ? "研究與服務方向" : "Research and Service Areas")}
    <div class="grid cols-2" style="margin-top:1rem">
      ${programFeatures.map((item) => card(pick(item.title), pick(item.body), [])).join("")}
    </div>
  ${closeSection()}`;
}

function renderCurriculum() {
  const isZh = state.lang.startsWith("zh");
  const requirementBlocks = [
    {
      title: label("doctoral"),
      items: isZh
        ? [
          "修業年限二至七年；在職研究生得延長二年。",
          "修畢17學分後得申請資格考；科目為科學史與科學哲學、科學教育研究方法學、科學學習與教學。",
          "至少修畢30學分、通過論文計畫審查、完成學術研究倫理教育，並達成科學教育相關論文發表或實務推廣積分後，始得申請學位考試。",
          "論文指導教授以本班專任教師為原則；非本班教師指導時，須有本班專任教師共同指導。"
        ]
        : [
          "Normative period: two to seven years; in-service students may extend by two years.",
          "Students may apply for the qualifying examination after completing 17 credits.",
          "Degree examination requires at least 30 credits, proposal approval, research ethics completion, and publication or outreach points.",
          "Dissertation advisors are normally full-time program faculty; external advising requires a program co-advisor."
        ]
    },
    {
      title: label("master"),
      items: isZh
        ? [
          "修業年限一至四年；在職研究生得延長二年。",
          "研究生應於入學後第二學期結束前提出碩士論文指導教授同意書。",
          "預計取得畢業所需學分之學期起得申請學位考試，並須於考試三週前提出申請。",
          "畢業前須完成科學教育相關論文發表、教師檢定或高普考、英語檢定、科展或課程教材競賽成果等門檻之一。"
        ]
        : [
          "Normative period: one to four years; in-service students may extend by two years.",
          "Students submit advisor approval by the end of the second semester after admission.",
          "Degree examination can be requested in the semester when graduation credits are expected, at least three weeks before the exam.",
          "Graduation requires one program milestone such as publication, certification exam, language test, or science education competition work."
        ]
    }
  ];
  const courseRows = [
    ["114-1", "科學史特論／科學史", "蔣佳玲", "B327"],
    ["114-1", "化學專題研究／化學特論", "蔡仁哲", "D325"],
    ["114-1", "科學課程設計與發展／科學課程設計", "陳世文", "B329"],
    ["114-1", "自然科教學評量研究／科學教育評量", "鄭立婷", "B229"],
    ["114-1", "質性科學教育研究法", "蔣佳玲", "B327"],
    ["114-1", "科學創造力教學策略專題研究", "陳世文", "B329"],
    ["114-1", "國小自然科學實驗研究特論／國小自然科學實驗研究", "鄭立婷", "D325"],
    ["114-2", "科學教育研究方法論", "蔣佳玲", "B327"],
    ["114-2", "科學教育導論", "鄭立婷", "B329"],
    ["114-2", "科技創作與教學實務特論／科技創作與教學實務", "蔡仁哲", "B327"],
    ["114-2", "地球科學專題研究／地球科學特論", "蔣佳玲", "D325"],
    ["114-2", "原住民文化脈絡與科學教學／多元文化科學教育", "鄭立婷", "B329"],
    ["114-2", "科學教育研究法", "蔡仁哲", "B327"]
  ];
  const curriculumLinks = [
    ["科學教育碩士班修業要點", "M.A. study regulations", sources.maReg],
    ["科學教育博士班修業要點", "Ph.D. study regulations", sources.phdReg],
    ["科學教育碩士班課程地圖", "M.A. curriculum map", sources.mapMaster],
    ["科學教育博士班課程地圖", "Ph.D. curriculum map", sources.mapPhd],
    ["114-1碩博課表", "114-1 timetable", sources.timetable1141],
    ["114-2碩博課表", "114-2 timetable", sources.timetable1142],
    ["115學年度科學教育碩士班招生簡章", "2026 M.A. admission brochure", sources.masterAdmission115]
  ];
  return `${header("curriculum", sources.curriculum, true)}
    <div class="feature-story">
      <div>
        <span class="section-kicker">${isZh ? "課程架構" : "Curriculum Structure"}</span>
        <h3>${isZh ? "科學教育碩士班與博士班" : "Science Education M.A. and Ph.D."}</h3>
        <p>${isZh
          ? "課程以科學教育研究、自然科教學、課程與教材設計、科技創作、科學史哲、多元文化與在地科學學習為核心，銜接碩博士論文研究與教師專業發展。"
          : "The curriculum connects science education research, science teaching, curriculum and material design, technology creation, history and philosophy of science, multicultural learning, and thesis research."}</p>
      </div>
      <div class="panel">
        <h3>${isZh ? "115學年度招生重點" : "2026 Admission Focus"}</h3>
        ${compactList(isZh
          ? ["招生名額：一般生4名。", "審查方式：資料審查100%，免複試。", "特色：AI在教育上的應用、科學遊戲、教具研發、STEM課程、社會性科學議題及實作導向課程與教學。"]
          : ["Quota: 4 general-admission places.", "Review: document review 100%; no second-stage interview.", "Focus: AI in education, science games, teaching aids, STEM, SSI, and practice-based curriculum."])}
      </div>
    </div>
    <div class="requirement-grid">
      ${requirementBlocks.map((block) => `<article class="requirement-block">
        <h3>${block.title}</h3>
        ${compactList(block.items)}
      </article>`).join("")}
    </div>
    <div class="grid cols-3">
      ${curriculumThemes.map(([zh, en, body]) => card(isZh ? zh : en, isZh ? body : "", [], "")).join("")}
    </div>
    ${sectionSubhead(isZh ? "114學年度課程摘錄" : "Selected 114 Academic Year Courses")}
    <div class="course-table-wrap">
      <table class="course-table">
        <thead><tr><th>${isZh ? "學期" : "Term"}</th><th>${isZh ? "課程" : "Course"}</th><th>${isZh ? "授課教師" : "Instructor"}</th><th>${isZh ? "教室" : "Room"}</th></tr></thead>
        <tbody>
          ${courseRows.map(([term, course, teacher, room]) => `<tr><td>${term}</td><td>${course}</td><td>${teacher}</td><td>${room}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>
    ${sectionSubhead(isZh ? "課規、課程地圖與課表" : "Regulations, Maps, and Timetables")}
    <div class="grid cols-3">
      ${curriculumLinks.map(([zh, en, url]) => card(isZh ? zh : en, isZh ? "直接開啟文件。" : "Open the document directly.", [], url)).join("")}
    </div>
  ${closeSection()}`;
}

function renderDownloads() {
  const isZh = state.lang.startsWith("zh");
  return `${header("downloads", sources.downloads)}
    <div class="info-band">
      <h3>${isZh ? "常用文件" : "Documents"}</h3>
      <p>${isZh
        ? "修業要點、課程地圖、招生簡章、獎助學金、自然領域加註專長與教室借用規則均直接連到文件。"
        : "Study regulations, curriculum maps, admission brochure, scholarships, endorsement documents, and room-use rules link directly to the documents."}</p>
    </div>
    <div class="grid cols-3">
      ${downloads.map(([zh, en, url, date]) => `
        <article class="download">
          <span class="meta">${date}</span>
          <h3>${state.lang.startsWith("zh") ? zh : en}</h3>
          <a href="${url}" target="_blank" rel="noreferrer">${t("readMore")}</a>
        </article>
      `).join("")}
    </div>
  ${closeSection()}`;
}

function renderEvents() {
  const isZh = state.lang.startsWith("zh");
  return `${header("events", sources.department, true)}
    <div class="media-strip" style="margin-bottom:1rem">
      <figure>
        <img src="assets/science-week-cover.jpg" alt="Science week cover">
        <figcaption>${pick({
          "zh-Hant": "第二屆南花蓮全民科學週封面圖",
          en: "Cover image from the second South Hualien Science Week",
          ja: "第2回南花蓮全民科学週のカバー画像",
          "zh-Hans": "第二届南花莲全民科学周封面图",
          vi: "Ảnh bìa Tuần Khoa học Nam Hoa Liên lần thứ hai",
          th: "ภาพปกสัปดาห์วิทยาศาสตร์ตอนใต้ของฮัวเหลียน ครั้งที่ 2",
          id: "Gambar sampul Pekan Sains Hualien Selatan Kedua",
          ms: "Imej muka depan Minggu Sains Hualien Selatan Kedua",
          ko: "제2회 남화련 시민 과학주간 표지 이미지",
          es: "Imagen de portada de la Segunda Semana de Ciencia del Sur de Hualien"
        })}</figcaption>
      </figure>
      <figure class="logo-figure">
        <img src="assets/science-carlogo.png" alt="Science train logo">
        <figcaption>${pick({
          "zh-Hant": "科普列車視覺標誌",
          en: "Science train visual mark",
          ja: "科学列車のビジュアルマーク",
          "zh-Hans": "科普列车视觉标志",
          vi: "Dấu hiệu hình ảnh Science Train",
          th: "สัญลักษณ์ภาพของรถไฟวิทยาศาสตร์",
          id: "Tanda visual Science Train",
          ms: "Tanda visual Science Train",
          ko: "과학열차 시각 표식",
          es: "Marca visual del tren científico"
        })}</figcaption>
      </figure>
    </div>
    <div class="feature-story">
      <div>
        <span class="section-kicker">${isZh ? "活動紀錄" : "Activity Records"}</span>
        <h3>${isZh ? "科普列車與全民科學週" : "Science Train and Science Week"}</h3>
        <p>${isZh
          ? "本頁整理科普列車、全民科學週與城市科學節活動。2019年科普列車花蓮站設計23個關卡，累計約1,100參加人次；2020年活動設計25個關卡，並連結17所種子學校。"
          : "Outreach records show station-based science activities, school networks, and student-led inquiry stations in Hualien."}</p>
      </div>
      <div class="metric-grid">
        <div class="metric-card"><strong>23</strong><span>${isZh ? "2019花蓮站關卡" : "2019 stations"}</span></div>
        <div class="metric-card"><strong>1,100</strong><span>${isZh ? "2019參與人次" : "2019 visits"}</span></div>
        <div class="metric-card"><strong>25</strong><span>${isZh ? "2020闖關關卡" : "2020 stations"}</span></div>
        <div class="metric-card"><strong>17</strong><span>${isZh ? "2020種子學校" : "2020 seed schools"}</span></div>
      </div>
    </div>
    ${sectionSubhead(isZh ? "活動紀錄" : "Activity Records", isZh ? "每一筆活動保留主題與參與方式；有公開頁面的活動才提供連結。" : "Each record keeps the theme and activity mode; links are shown only when an active public page is available.")}
    <div class="timeline">
      ${eventItems.map((item) => `
        <article class="timeline-item">
          <div class="year">${item.year}</div>
          <div>
            <h3>${pick(item.title)}</h3>
            <p>${pick(item.body)}</p>
            ${item.url ? `<a href="${item.url}" target="_blank" rel="noreferrer">${t("readMore")}</a>` : ""}
          </div>
        </article>
      `).join("")}
    </div>
  ${closeSection()}`;
}

function card(title, body, tags = [], url = "") {
  return `
    <article class="data-card">
      <h3>${title}</h3>
      ${body ? `<p>${body}</p>` : ""}
      ${tags.length ? `<div class="tag-row">${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>` : ""}
      ${url ? `<p><a href="${url}" target="_blank" rel="noreferrer">${t("readMore")}</a></p>` : ""}
    </article>
  `;
}

function notice(item) {
  const [year, month, day] = item.date.split("-");
  return `
    <article class="notice">
      <div class="date-box">${month}/${day}<span>${year}</span></div>
      <div>
        <span class="meta">${label("category")} · ${item.category}</span>
        <h3>${pick(item.title)}</h3>
        <p>${pick(item.summary)}</p>
        <a href="${item.url}" target="_blank" rel="noreferrer">${t("readMore")}</a>
      </div>
    </article>
  `;
}

function teacherCard(person) {
  const initials = person.name.slice(0, 2);
  const renderList = (title, items) => {
    const list = pickList(items);
    if (!list.length) return "";
    return `<div class="mini-block">
      <strong>${title}</strong>
      <ul class="mini-list">${list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>`;
  };
  const isZh = state.lang.startsWith("zh");
  const actionLinks = [
    person.url ? `<a href="${person.url}" target="_blank" rel="noreferrer">${person.urlLabel ? pick(person.urlLabel) : (isZh ? "教師頁" : "Faculty Page")}</a>` : "",
    person.rdUrl ? `<a href="${person.rdUrl}" target="_blank" rel="noreferrer">${isZh ? "完整著作與計畫" : "Full Research Profile"}</a>` : ""
  ].filter(Boolean);
  return `
    <article class="teacher">
      <div class="teacher-head">
        ${person.image ? `<img class="teacher-photo" src="${person.image}" alt="${person.name}">` : `<div class="avatar">${initials}</div>`}
        <div>
          <h3>${person.name}</h3>
          <span class="meta">${person.role}</span>
        </div>
      </div>
      <p><strong>${label("degree")}：</strong>${person.degree}</p>
      <p><strong>${label("research")}：</strong>${pick(person.research)}</p>
      ${person.advisorCount ? `<p><strong>${isZh ? "公開指導紀錄" : "Public Supervision Records"}：</strong>${person.advisorCount} ${isZh ? "筆" : "records"}</p>` : ""}
      ${renderList(isZh ? "研究特色" : "Research Focus", person.highlights)}
      ${person.office ? `<p><strong>${label("office")}：</strong>${person.office}</p>` : ""}
      ${person.phone ? `<p><strong>${label("phone")}：</strong>${person.phone}</p>` : ""}
      ${person.email ? `<p><strong>${label("email")}：</strong><a href="mailto:${person.email}">${person.email}</a></p>` : ""}
      ${person.retirement ? `<p><strong>${state.lang.startsWith("zh") ? "退休年度" : "Retirement"}：</strong>${person.retirement}</p>` : ""}
      ${renderList(isZh ? "著作／研究成果" : "Publications and Research", person.selectedPublications)}
      ${renderList(isZh ? "研究計畫與科普實作" : "Projects and Outreach", person.selectedProjects)}
      ${renderList(isZh ? "指導論文例" : "Selected Supervised Theses", person.selectedTheses)}
      ${actionLinks.length ? `<p class="teacher-actions">${actionLinks.join("")}</p>` : ""}
    </article>
  `;
}

init();
