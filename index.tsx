
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Phone, 
  UserPlus, 
  ChevronDown, 
  Menu, 
  X,
  Award,
  Mail,
  MapPin,
  Clock,
  Library,
  Search,
  Globe,
  Users,
  GraduationCap,
  Bell,
  ArrowRight,
  ChevronRight,
  User,
  BookOpen,
  ArrowLeft,
  FileText,
  Briefcase,
  History,
  CheckCircle,
  ExternalLink,
  Download,
  Star,
  School,
  ShieldCheck,
  Smartphone,
  Hash,
  Contact,
  HardHat
} from 'lucide-react';

// --- Constants ---
const LOGO_URL = "https://res.cloudinary.com/ddbgubknr/image/upload/v1770274634/dklogo_k9wly4.png";
const HERO_VIDEO_URL = "https://res.cloudinary.com/ddbgubknr/video/upload/v1770274909/%E0%A6%B0%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A_%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A6%AF%E0%A6%BC___Rajapur_High_School___%E0%A6%AC%E0%A6%A1%E0%A6%BC%E0%A6%BE%E0%A6%87%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE_%E0%A6%A8%E0%A6%BE%E0%A6%9F%E0%A7%8B%E0%A6%B0___%E0%A6%AA%E0%A6%BE%E0%A6%96%E0%A6%BF%E0%A6%B0_%E0%A6%9A%E0%A7%8B%E0%A6%96%E0%A7%87_%E0%A6%88%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%B0%E0%A6%A6%E0%A7%80___2025_n7cap2.mp4";
const HEADMASTER_IMAGE = "https://res.cloudinary.com/ddbgubknr/image/upload/v1770278404/666666_1_ce9wxe.jpg";
const CHAIRMAN_IMAGE = "https://res.cloudinary.com/ddbgubknr/image/upload/v1770279597/Kohale_Quddus_e4o6ws.png";
const TEACHER_PLACEHOLDER = "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283633/4_bzrvtj.jpg"; 

// --- Types ---
interface MenuItem {
  label: string;
  bnLabel: string;
  href?: string;
  view?: string;
  subItems?: MenuItem[];
}

interface CommitteeMember {
  name: string;
  bnName: string;
  designation: string;
  bnDesignation: string;
  mobile: string;
  image: string;
}

interface Teacher {
  name: string;
  bnName: string;
  designation: string;
  bnDesignation: string;
  indexNo: string;
  address: string;
  image: string;
}

interface Staff {
  name: string;
  bnName: string;
  shift: string;
  designation: string;
  bnDesignation: string;
  indexNo: string;
  address: string;
  image: string;
}

// --- Data ---
const COMMITTEE_MEMBERS: CommitteeMember[] = [
  {
    name: "A.B.M. Ashraful Islam",
    bnName: "এ,বি,এম আশরাফুল ইসলাম",
    designation: "Secretary",
    bnDesignation: "সম্পাদক",
    mobile: "01716385446",
    image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770278404/666666_1_ce9wxe.jpg"
  },
  {
    name: "Md. Fazlul Haque",
    bnName: "মোঃ ফজলুল হক",
    designation: "Member",
    bnDesignation: "সদস্য",
    mobile: "01728536460",
    image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770281055/14_au0uaj.jpg"
  },
  {
    name: "Md. Ashrafuzzaman",
    bnName: "মোহাঃ আশরাফুজ্জামান",
    designation: "Member",
    bnDesignation: "সদস্য",
    mobile: "01773096033",
    image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770281054/121_icmm4g.jpg"
  },
  {
    name: "Mst. Selina Khatun",
    bnName: "মোছাঃ সেলিনা খাতুন",
    designation: "Member",
    bnDesignation: "সদস্য",
    mobile: "01721340621",
    image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770281054/10_agszdx.jpg"
  }
];

const TEACHERS_FIRST_SHIFT: Teacher[] = [
  { name: "A.B.M. Ashraful Islam", bnName: "এ.বি.এম. আশরাফুল ইসলাম", designation: "Head Teacher", bnDesignation: "প্রধান শিক্ষক", indexNo: "253507", address: "Vill-Rajapur Bazar, PO-Rajapur Hat, Upazila-Baraigram, Dist-Natore", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770278404/666666_1_ce9wxe.jpg" },
  { name: "Md. Anisur Rahman Khan Panna", bnName: "মোঃ আনিসুর রহমান খান পান্না", designation: "Assistant Head Teacher", bnDesignation: "সহকারী প্রধান শিক্ষক", indexNo: "567046", address: "Vill-Natabaria, PO-Rajapur Hat, Upazila-Baraigram, Dist-Natore", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283634/2_-_Copy_yvljqe.jpg" },
  { name: "Mst. Shahina Akhtar", bnName: "মোছাঃ শাহীনা আখতার", designation: "Assistant Teacher (English)", bnDesignation: "সহকারী শিক্ষক-ইংরেজী", indexNo: "255563", address: "Vill-Rajapur Bazar, PO-Rajapur Hat", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283633/4_bzrvtj.jpg" },
  { name: "Samia Begum", bnName: "সামিয়া বেগম", designation: "Assistant Teacher (Bangla)", bnDesignation: "সহকারী শিক্ষক-বাংলা", indexNo: "255564", address: "Vill-Rajapur Bazar, PO-Rajapur Hat", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283631/5_cx1bjw.jpg" },
  { name: "Shakera Khatun", bnName: "শাকেরা খাতুন", designation: "Assistant Teacher (Islam Religion)", bnDesignation: "সহকারী শিক্ষক-ইসলাম ধর্ম", indexNo: "255562", address: "Vill-Faridpur, PO-Muladuli", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283629/7_zwgjgk.jpg" },
  { name: "Md. Abdul Kader", bnName: "মোঃ আব্দুল কাদের", designation: "Assistant Teacher (Religion)", bnDesignation: "সহকারী শিক্ষক-ধর্ম", indexNo: "383231", address: "Vill-Rajendrapur, PO-Chandai Hat", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283628/81_otzdkv.jpg" },
  { name: "Md. Shah Alam", bnName: "মোঃ শাহ আলম", designation: "Assistant Teacher (ICT)", bnDesignation: "সহকারী শিক্ষক-তথ্য ও যোগাযোগ প্রযুক্তি", indexNo: "10004349", address: "Purnokolos, PO-Rajapur Hat", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283627/9_dp0v3a.jpg" },
  { name: "Mst. Selina Khatun", bnName: "মোছাঃ সেলিনা খাতুন", designation: "Assistant Teacher (English)", bnDesignation: "সহকারী শিক্ষক-ইংরেজী", indexNo: "1048602", address: "Vill-Panchbaria, PO-Panchbaria", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770281054/10_agszdx.jpg" },
  { name: "Md. Akhtaruzzaman", bnName: "মোঃ আকতারুজ্জামান", designation: "Assistant Teacher (Social Science)", bnDesignation: "সহকারী শিক্ষক-সামজিক বিজ্ঞান", indexNo: "1048601", address: "Purnokolos, PO-Rajapur Hat", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283625/1111_m9qbel.jpg" },
  { name: "Md. Ashrafuzzaman", bnName: "মোহাঃ আশরাফুজ্জামান", designation: "Assistant Teacher (Physical Science)", bnDesignation: "সহকারী শিক্ষক-ভৌত বিজ্ঞান", indexNo: "1048600", address: "Vill-Chandai, PO-Chandai Hat", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770281054/121_icmm4g.jpg" },
  { name: "Probhash Kumar Saha", bnName: "প্রভাস কুমার সাহা", designation: "Assistant Teacher (Math)", bnDesignation: "সহকারী শিক্ষক-গণিত", indexNo: "1048599", address: "Malojbaria, PO-Hatiand, Upazila-Singra", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283624/1310_hnutx3.jpg" },
  { name: "Md. Fazlul Haque", bnName: "মোঃ ফজলুল হক", designation: "Assistant Teacher (Social Science)", bnDesignation: "সহকারী শিক্ষক-সামজিক বিজ্ঞান", indexNo: "1062302", address: "Vill-Raota, PO-Rajapur Hat", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770281055/14_au0uaj.jpg" },
  { name: "Md. Hazrat Ali", bnName: "মোঃ হযরত আলী", designation: "Assistant Teacher (English)", bnDesignation: "সহকারী শিক্ষক-ইংরেজী", indexNo: "1062303", address: "Vill-Chandai, PO-Chandai Hat", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283622/1510_m5oxsm.jpg" },
  { name: "Md. Ziaur Rahman", bnName: "মোঃ জিয়াউর রহমান", designation: "Assistant Teacher (Bangla)", bnDesignation: "সহকারী শিক্ষক-বাংলা", indexNo: "1068574", address: "Kechuakora, PO-Ahmedpur", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283621/1610_ci0wyy.jpg" },
  { name: "Md. Masud Rana", bnName: "মোঃ মাসুদ রানা", designation: "Assistant Teacher (Physical Science)", bnDesignation: "সহকারী শিক্ষক-ভৌত বিজ্ঞান", indexNo: "1068575", address: "Gopalpur, PO-Gormati", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283619/171_zqi4wg.jpg" },
  { name: "Md. Kamrul Hasan Kamal", bnName: "মোঃ কামরুল হাসান কমল", designation: "Assistant Teacher (Social Science)", bnDesignation: "সহকারী শিক্ষক-সামজিক বিজ্ঞান", indexNo: "1132062", address: "Gopalpur, PO-Gormati", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283618/181_esyzkj.jpg" },
  { name: "Prokash Kumar Chowdhury", bnName: "প্রকাশ কুমার চৌধুরী", designation: "Assistant Teacher (Hindu Religion)", bnDesignation: "সহকারী শিক্ষক-হিন্দু ধর্ম", indexNo: "1132063", address: "Nanda Raipur, PO-Walia", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283616/192_aia59w.jpg" },
  { name: "Mst. Ripa Khatun", bnName: "মোছাঃ রিপা খাতুন", designation: "Assistant Teacher (Math)", bnDesignation: "সহকারী শিক্ষক-গণিত", indexNo: "1149121", address: "Vill-Parkuthi, PO-Laxmanhati", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283615/201_lqhtjq.jpg" },
  { name: "Mst. Najma Akter", bnName: "মোছাঃ নাজমা আক্তার", designation: "Assistant Librarian cum Cataloger", bnDesignation: "সহকারী গ্রন্থাগরিক কাম ক্যাটালোগার", indexNo: "1072885", address: "Purnokolos, PO-Rajapur Hat", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770284942/26_jb2ofb.jpg" }
];

const TEACHERS_SECOND_SHIFT: Teacher[] = [
  { name: "Mst. Shirin Sultana", bnName: "মোছাঃ শিরিন সুলতানা", designation: "Assistant Teacher (Social Science)", bnDesignation: "সহকারী শিক্ষক (সামাজিক বিজ্ঞান)", indexNo: "N/A", address: "Dangapara Chilan, PO-Kadamchilan", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283614/21_xjaoei.jpg" },
  { name: "Md. Mahmudul Haque", bnName: "মোঃ মাহমুদুল হক", designation: "Assistant Teacher (Physical Science)", bnDesignation: "সহকারী শিক্ষক (ভৌত বিজ্ঞান)", indexNo: "N/A", address: "Shekhpara, PO-Muladuli", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283613/22_l8vkga.jpg" },
  { name: "Gaziur Rahman", bnName: "গাজিউর রহমান", designation: "Assistant Teacher (Islam Religion)", bnDesignation: "সহকারী শিক্ষক (ইসলাম ধর্ম)", indexNo: "N/A", address: "Baropingoin, PO-Nagar", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283611/24_x2jdec.jpg" },
  { name: "Md. Abdul Momin", bnName: "মোঃ আব্দুল মোমিন", designation: "Assistant Teacher (Bangla)", bnDesignation: "সহকারী শিক্ষক (বাংলা)", indexNo: "N/A", address: "Gopalpur, PO-Ekdanta", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770285127/25_zo1zsr.jpg" },
  { name: "Ismat Ara Kusum", bnName: "ইসমত আরা কুশুম", designation: "Assistant Librarian cum Cataloger", bnDesignation: "সহকারী গ্রন্থাগরিক কাম ক্যাটালোগার", indexNo: "N/A", address: "Rajapur Bazar, PO-Rajapur Hat", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283610/27_cjjcpv.jpg" },
  { name: "Jharna Das", bnName: "ঝরনা দাস", designation: "Assistant Teacher (Hindu Religion)", bnDesignation: "সহকারী শিক্ষক (হিন্দু ধর্ম)", indexNo: "N/A", address: "Vill-Muladuli, PO-Muladuli", image: "N/A" }
];

const TEACHERS_CONTRACTUAL: Teacher[] = [
  { name: "Md. Moin Khan", bnName: "মোঃ মঈন খান", designation: "Assistant Teacher (English)", bnDesignation: "সহকারী শিক্ষক (ইংরেজী)", indexNo: "N/A", address: "Vill-Nikorhata, PO-Muladuli", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283608/37_dkwggk.jpg" },
  { name: "Md. Al Amin", bnName: "মোঃ আল আমিন", designation: "Assistant Teacher (Physical Science)", bnDesignation: "সহকারী শিক্ষক (ভৌত বিজ্ঞান)", indexNo: "N/A", address: "Vill-Kachua, PO-Rajapur Hat", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283608/381_zawjeg.jpg" },
  { name: "Md. Ashraful Islam", bnName: "মোঃ আশরাফুল ইসলাম", designation: "Assistant Teacher (English)", bnDesignation: "সহকারী শিক্ষক (ইংরেজী)", indexNo: "N/A", address: "Vill-Atgharia, PO-Muladuli", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770283607/41_fdtkio.jpg" }
];

const STAFF_REGULAR: Staff[] = [
  { name: "Md. Merin Hossain", bnName: "মোঃ মেরিন হোসেন", shift: "Second Shift", designation: "Office Assistant cum Computer Operator", bnDesignation: "অফিস সহকারী কাম কম্পিউটার অপারেটর", indexNo: "N/A", address: "Gopalpur, PO-Gormati", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770288536/29_led1rw.jpg" },
  { name: "Md. Somudro Hossain", bnName: "মোঃ সমুদ্র হোসেন", shift: "First Shift", designation: "Computer Lab Operator", bnDesignation: "কম্পিউটার ল্যাব অপারেটর", indexNo: "N/A", address: "Vill-Raota, PO-Rajapur Hat", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770288493/Screenshot_2021-02-07-12-25-46-1_o9ocfx.png" },
  { name: "Md. Abdur Rahim", bnName: "মোঃ আব্দুর রহিম", shift: "First Shift", designation: "Security Guard", bnDesignation: "নিরাপত্তা কমী", indexNo: "780391", address: "Vill-Gormati, PO-Gormati", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770288490/311_pez0xw.jpg" },
  { name: "Md. Kamruzzaman", bnName: "মোঃ কামরুলজ্জামান", shift: "First Shift", designation: "Cleaner", bnDesignation: "পরিচ্ছতা কমী", indexNo: "780392", address: "Dasgram, PO-Chandai Hat", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770288486/321_krlepd.jpg" },
  { name: "Mst. Najma Khatun", bnName: "মোছাঃ নাজমা খাতুন", shift: "First Shift", designation: "Aya", bnDesignation: "আয়া", indexNo: "565627", address: "Faridpur, PO-Muladuli", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770288484/33_njvfdm.jpg" },
  { name: "Mst. Johura Khatun", bnName: "মোছাঃ জহুরা খাতুন", shift: "Second Shift", designation: "Aya", bnDesignation: "আয়া", indexNo: "N/A", address: "Telo, PO-Chandai Hat", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770288482/34_txzffh.jpg" },
  { name: "Md. Emon Hossain", bnName: "মোঃ ইমন হোসেন", shift: "Second Shift", designation: "Security Guard", bnDesignation: "নিরাপত্তা কমী", indexNo: "N/A", address: "Vill-Gopalpur, PO-Gormati", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770288484/35_r1prw0.jpg" },
  { name: "Kamona Rani Das", bnName: "কামনা রানী দাস", shift: "Second Shift", designation: "Cleaner", bnDesignation: "পরিচ্ছতা কমী", indexNo: "N/A", address: "Muladuli", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770288479/IMG202102071155501_wk9noy.jpg" }
];

const STAFF_CONTRACTUAL: Staff[] = [
  { name: "Md. Saddam Hossain", bnName: "মোঃ সাদ্দাম হোসেন", shift: "Second Shift", designation: "Office Assistant cum Computer Operator", bnDesignation: "অফিস সহকারী কাম কম্পিউটার অপারেটর", indexNo: "N/A", address: "Vill-Diar Garfa, PO-Chandai Hat", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770288477/45_wlvmvi.jpg" },
  { name: "Md. Sher Ali", bnName: "মোঃ শের আলী", shift: "First Shift", designation: "Night Guard", bnDesignation: "নৈশপ্রহরী", indexNo: "N/A", address: "Vill-Nikorhata, PO-Muladuli", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770288475/46_ae8v7f.jpg" },
  { name: "Uttam Kumar", bnName: "উত্তম কুমার", shift: "First Shift", designation: "Cleaner", bnDesignation: "পরিচ্ছতা কমী", indexNo: "N/A", address: "Vill-Muladuli, PO-Muladuli", image: "https://res.cloudinary.com/ddbgubknr/image/upload/v1770288474/Uttom1_rqqzzs.jpg" }
];

// --- Navigation Data ---
const NAVIGATION: MenuItem[] = [
  { label: 'Home', bnLabel: 'হোম', view: 'home' },
  {
    label: 'About Us',
    bnLabel: 'আমাদের বিষয়',
    subItems: [
      { label: "Headmaster's CV", bnLabel: 'প্রধান শিক্ষকের জীবন বৃত্তান্ত', view: 'cv' },
      { label: 'Chairman', bnLabel: 'সভাপতি', view: 'chairman' },
      { label: 'Managing Committee', bnLabel: 'ম্যানেজিং কমিটি', view: 'committee' },
      { label: 'Teachers', bnLabel: 'শিক্ষক/শিক্ষিকা', view: 'teachers' },
      { label: 'Working Employee', bnLabel: 'কর্মচারী', view: 'staff' },
      { label: 'PTA Committee', bnLabel: 'পিটিএ কমিটি', href: '#pta' },
      { label: 'Daily Attendance', bnLabel: 'দৈনিক হাজিরা', href: '#attendance' },
      { label: 'Library', bnLabel: 'পাঠাগার', href: '#library' },
      { label: 'Retired Staff', bnLabel: 'অবসর প্রাপ্ত শিক্ষক/কর্মচারী', href: '#retired' },
    ]
  },
  {
    label: 'Results',
    bnLabel: 'ফলাফল',
    subItems: [
      { label: 'Board Exam Results', bnLabel: 'বোর্ড পরীক্ষার ফলাফল', href: '#board-results' },
      { label: 'School Exam Results', bnLabel: 'স্কুল পরীক্ষার ফলাফল', href: '#school-results' },
      { label: 'Admission Results', bnLabel: 'ভর্তি পরীক্ষার ফলাফল', href: '#admission-results' },
    ]
  },
  {
    label: 'Forms',
    bnLabel: 'ফরম',
    subItems: [
      { label: 'Admission Form', bnLabel: 'ভর্তি আবেদন ফরম', href: '#form-admission' },
      { label: 'TC Form', bnLabel: 'টি.সি ফরম', href: '#form-tc' },
      { label: 'Miscellaneous Forms', bnLabel: 'বিবিধ ফরম', href: '#form-misc' },
      { label: 'Application Download', bnLabel: 'আবেদন ফরম ডাউনলোড', href: '#form-download' },
      { label: 'Admit Card', bnLabel: 'প্রবেশ পত্র ডাউনলোড', href: '#form-admit' },
    ]
  },
  {
    label: 'Students',
    bnLabel: 'ছাত্র-ছাত্রী',
    subItems: [
      { label: 'Class-wise Info', bnLabel: 'শ্রেণী ভিত্তিক তথ্য', href: '#student-class' },
      { label: 'Age-wise Info', bnLabel: 'বয়স ভিত্তিক তথ্য', href: '#student-age' },
      { label: 'Religion Census', bnLabel: 'ধর্ম ভিত্তিক সংখ্যা', href: '#student-religion' },
      { label: 'Daily Attendance', bnLabel: 'দৈনিক হাজিরা', href: '#student-attendance' },
      { label: 'Testimonials', bnLabel: 'প্রশংশা পত্র', href: '#student-testimonial' },
    ]
  },
  { label: 'Admission', bnLabel: 'অনলাইন ভর্তি', href: '#online-admission' },
];

const NOTICES = [
  "২০২৪ শিক্ষাবর্ষের অর্ধবার্ষিক পরীক্ষার ফলাফল প্রকাশিত হয়েছে।",
  "আগামী ১৫ই আগস্ট জাতীয় শোক দিবস পালন করা হবে।",
  "স্কুল ড্রেস কোড কঠোরভাবে মেনে চলার জন্য নির্দেশ প্রদান করা হলো।",
  "অনলাইন ভর্তি প্রক্রিয়া শুরু হয়েছে, বিস্তারিত জানতে ফরম মেনু দেখুন।"
];

// --- Components ---

const Dropdown: React.FC<{ item: MenuItem; isMobile?: boolean; setView: (v: string) => void; onCloseMenu?: () => void }> = ({ item, isMobile, setView, onCloseMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (v?: string) => {
    if (v) {
      setView(v);
      window.scrollTo(0, 0);
    }
    if (onCloseMenu) onCloseMenu();
  };

  if (isMobile) {
    return (
      <div className="w-full">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all font-bold uppercase text-[13px] tracking-wide"
        >
          <span>{item.label}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}>
          <div className="pl-6 bg-gray-50/50 rounded-b-xl border-l-2 border-blue-200 ml-4 space-y-1">
            {item.subItems?.map((sub, i) => (
              <a 
                key={i} 
                href={sub.href || '#'}
                onClick={(e) => {
                  if (sub.view) e.preventDefault();
                  handleLinkClick(sub.view);
                }}
                className="block px-4 py-3 text-[13px] text-gray-600 hover:text-blue-700 hover:bg-blue-100/50 rounded-lg transition-colors font-medium"
              >
                {sub.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-700 transition-colors">
        <span className="text-[14px] font-bold uppercase tracking-wide">{item.label}</span>
        <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
      </button>
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-64 bg-white shadow-2xl rounded-b-xl border border-gray-100 z-50 py-3 animate-in fade-in slide-in-from-top-1 duration-200">
          {item.subItems?.map((sub, i) => (
            <a 
              key={i} 
              href={sub.href || '#'}
              onClick={(e) => {
                if (sub.view) {
                  e.preventDefault();
                  handleLinkClick(sub.view);
                }
              }}
              className="block px-5 py-2.5 text-[13px] text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors border-l-4 border-transparent hover:border-blue-700 font-bold"
            >
              {sub.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const StaffCard: React.FC<{ staff: Staff }> = ({ staff }) => (
  <div className="group bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
    {/* Photo Area */}
    <div className="aspect-[4/5] relative bg-gray-50 overflow-hidden shrink-0">
      <img 
        src={staff.image === "N/A" || !staff.image ? TEACHER_PLACEHOLDER : staff.image} 
        alt={staff.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Shift Badge */}
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg ${staff.shift === 'First Shift' ? 'bg-blue-600 text-white' : 'bg-amber-500 text-white'}`}>
        {staff.shift}
      </div>
    </div>
    
    {/* Info Area */}
    <div className="p-6 md:p-8 flex flex-col flex-1">
      <div className="space-y-1 mb-4">
        <h5 className="font-bn text-xl font-black text-blue-950 leading-tight group-hover:text-blue-600 transition-colors">{staff.bnName}</h5>
        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{staff.name}</p>
      </div>
      
      <div className="space-y-4 pt-4 border-t border-gray-50 mt-auto">
        <div>
           <p className="text-[8px] font-black text-blue-600 uppercase tracking-widest mb-1">Role / Position</p>
           <p className="text-xs font-bold text-gray-700 leading-tight">{staff.bnDesignation}</p>
        </div>

        {staff.indexNo !== "N/A" && (
          <div className="flex items-center gap-2">
            <Hash className="w-3.5 h-3.5 text-blue-600" />
            <div className="flex flex-col">
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Index Number</span>
              <span className="text-xs font-bold text-blue-950">{staff.indexNo}</span>
            </div>
          </div>
        )}

        <div className="flex items-start gap-2">
          <MapPin className="w-3.5 h-3.5 text-blue-600 mt-0.5" />
          <p className="text-[10px] font-medium text-gray-500 leading-relaxed italic">{staff.address}</p>
        </div>
      </div>
    </div>
  </div>
);

const TeacherCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => (
  <div className="group bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
    {/* Photo Area */}
    <div className="aspect-[4/5] relative bg-gray-50 overflow-hidden shrink-0">
      <img 
        src={teacher.image === "N/A" || !teacher.image ? TEACHER_PLACEHOLDER : teacher.image} 
        alt={teacher.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    
    {/* Info Area */}
    <div className="p-6 md:p-8 flex flex-col flex-1">
      <div className="space-y-1 mb-4">
        <h5 className="font-bn text-xl font-black text-blue-950 leading-tight group-hover:text-blue-600 transition-colors">{teacher.bnName}</h5>
        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{teacher.name}</p>
      </div>
      
      <div className="space-y-4 pt-4 border-t border-gray-50 mt-auto">
        <div>
           <p className="text-[8px] font-black text-blue-600 uppercase tracking-widest mb-1">Designation</p>
           <p className="text-xs font-bold text-gray-700 leading-tight">{teacher.bnDesignation}</p>
        </div>

        {teacher.indexNo !== "N/A" && (
          <div className="flex items-center gap-2">
            <Hash className="w-3.5 h-3.5 text-blue-600" />
            <div className="flex flex-col">
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Index Number</span>
              <span className="text-xs font-bold text-blue-950">{teacher.indexNo}</span>
            </div>
          </div>
        )}

        <div className="flex items-start gap-2">
          <MapPin className="w-3.5 h-3.5 text-blue-600 mt-0.5" />
          <p className="text-[10px] font-medium text-gray-500 leading-relaxed italic">{teacher.address}</p>
        </div>
      </div>
    </div>
  </div>
);

const TeachersPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen pt-32 md:pt-44 pb-24 bg-[#f8fafc] animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Navigation & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-16 relative z-20">
          <button 
            onClick={onBack}
            className="group flex items-center space-x-3 text-blue-950 font-black text-[11px] uppercase tracking-widest hover:text-blue-600 transition-all bg-white px-7 py-3.5 rounded-full shadow-md border border-gray-200 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portal</span>
          </button>
          
          <div className="flex items-center gap-3 bg-blue-900 text-white px-7 py-3.5 rounded-full text-[11px] font-black uppercase tracking-widest shadow-lg">
             <GraduationCap className="w-4 h-4" /> <span>Teaching Faculty</span>
          </div>
        </div>

        {/* Section: First Shift */}
        <div className="mb-24">
           <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-6">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-2xl flex items-center justify-center shrink-0">
                 <Clock className="w-6 h-6" />
              </div>
              <div>
                 <h2 className="text-3xl font-black text-blue-950 font-bn uppercase">নিয়মিত শিক্ষক (প্রথম শিফট)</h2>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Regular Teachers - First Shift</p>
              </div>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {TEACHERS_FIRST_SHIFT.map((teacher, idx) => (
                <TeacherCard key={idx} teacher={teacher} />
              ))}
           </div>
        </div>

        {/* Section: Second Shift */}
        <div className="mb-24">
           <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-6">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center shrink-0">
                 <Clock className="w-6 h-6" />
              </div>
              <div>
                 <h2 className="text-3xl font-black text-blue-950 font-bn uppercase">নিয়মিত শিক্ষক (দ্বিতীয় শিফট/অন্যান্য)</h2>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Regular Teachers - Second Shift & Others</p>
              </div>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {TEACHERS_SECOND_SHIFT.map((teacher, idx) => (
                <TeacherCard key={idx} teacher={teacher} />
              ))}
           </div>
        </div>

        {/* Section: Contractual */}
        <div>
           <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-6">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shrink-0">
                 <Briefcase className="w-6 h-6" />
              </div>
              <div>
                 <h2 className="text-3xl font-black text-blue-950 font-bn uppercase">চুক্তিভিত্তিক শিক্ষক</h2>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Contractual Teachers</p>
              </div>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {TEACHERS_CONTRACTUAL.map((teacher, idx) => (
                <TeacherCard key={idx} teacher={teacher} />
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

const WorkingEmployeePage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen pt-32 md:pt-44 pb-24 bg-[#f8fafc] animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Navigation & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-16 relative z-20">
          <button 
            onClick={onBack}
            className="group flex items-center space-x-3 text-blue-950 font-black text-[11px] uppercase tracking-widest hover:text-blue-600 transition-all bg-white px-7 py-3.5 rounded-full shadow-md border border-gray-200 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portal</span>
          </button>
          
          <div className="flex items-center gap-3 bg-blue-950 text-white px-7 py-3.5 rounded-full text-[11px] font-black uppercase tracking-widest shadow-lg">
             <Users className="w-4 h-4" /> <span>Staff Directory</span>
          </div>
        </div>

        {/* Section: Regular Staff */}
        <div className="mb-24">
           <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-6">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-2xl flex items-center justify-center shrink-0">
                 <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                 <h2 className="text-3xl font-black text-blue-950 font-bn uppercase">নিয়মিত কর্মচারী</h2>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Regular Staff Members</p>
              </div>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {STAFF_REGULAR.map((staff, idx) => (
                <StaffCard key={idx} staff={staff} />
              ))}
           </div>
        </div>

        {/* Section: Contractual Staff */}
        <div>
           <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-6">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shrink-0">
                 <Briefcase className="w-6 h-6" />
              </div>
              <div>
                 <h2 className="text-3xl font-black text-blue-950 font-bn uppercase">চুক্তিভিত্তিক কর্মচারী</h2>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Contractual Staff Members</p>
              </div>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {STAFF_CONTRACTUAL.map((staff, idx) => (
                <StaffCard key={idx} staff={staff} />
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

const ManagingCommittee = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen pt-32 md:pt-44 pb-24 bg-[#f8fafc] animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Navigation & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 relative z-20">
          <button 
            onClick={onBack}
            className="group flex items-center space-x-3 text-blue-950 font-black text-[11px] uppercase tracking-widest hover:text-blue-600 transition-all bg-white px-7 py-3.5 rounded-full shadow-md border border-gray-200 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portal</span>
          </button>
          
          <div className="flex items-center space-x-3">
             <div className="flex items-center gap-2 bg-blue-900 text-white px-7 py-3.5 rounded-full text-[11px] font-black uppercase tracking-widest shadow-lg">
               <ShieldCheck className="w-4 h-4" /> <span>Governing Body</span>
             </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
           <h4 className="text-blue-600 font-black text-xs uppercase tracking-[0.3em]">Institutional Governance</h4>
           <h2 className="text-4xl md:text-5xl font-black text-blue-950 font-bn leading-tight">ম্যানেজিং কমিটি</h2>
           <p className="text-gray-400 font-bold tracking-widest text-xs uppercase">Managing Committee Members</p>
           <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Committee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMMITTEE_MEMBERS.map((member, idx) => (
            <div key={idx} className="group bg-white rounded-[40px] shadow-xl shadow-blue-900/5 border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2">
              {/* Image Area */}
              <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                 <img 
                   src={member.image} 
                   alt={member.name} 
                   className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 
                 {/* Quick Action Overlay */}
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a 
                      href={`tel:${member.mobile}`}
                      className="bg-white text-blue-950 p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-900 hover:text-white transition-colors"
                    >
                      <Smartphone className="w-5 h-5" />
                    </a>
                 </div>
              </div>

              {/* Info Area */}
              <div className="p-8 text-center space-y-4">
                 <div className="space-y-1">
                    <h5 className="font-bn text-2xl font-black text-blue-950 leading-tight group-hover:text-blue-600 transition-colors">{member.bnName}</h5>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{member.name}</p>
                 </div>
                 
                 <div className="flex flex-col items-center space-y-3 pt-2 border-t border-gray-50">
                    <div className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                       {member.bnDesignation}
                    </div>
                    <p className="text-xs font-bold text-gray-400 tracking-widest">{member.mobile}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-20 p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
           <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <CheckCircle className="w-8 h-8" />
           </div>
           <div className="space-y-2">
              <h5 className="text-blue-950 font-black text-xs uppercase tracking-widest">Election & Tenure Verified</h5>
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                 The current managing committee has been formed following the guidelines of the Rajshahi Secondary and Higher Secondary Education Board. All members are officially recognized by the institutional governing body.
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};

const ChairmanCV = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen pt-32 md:pt-44 pb-24 bg-[#fcfdfe] animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Navigation & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 relative z-20">
          <button 
            onClick={onBack}
            className="group flex items-center space-x-3 text-blue-950 font-black text-[11px] uppercase tracking-widest hover:text-blue-600 transition-all bg-white px-7 py-3.5 rounded-full shadow-md border border-gray-200 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portal</span>
          </button>
          
          <div className="flex items-center space-x-3">
             <button className="flex items-center gap-2 bg-blue-950 text-white px-7 py-3.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg active:scale-95">
               <Star className="w-4 h-4" /> <span>Institutional Head</span>
             </button>
          </div>
        </div>

        {/* Hero Identity Card */}
        <div className="relative mb-12">
           <div className="absolute top-0 left-0 w-full h-48 bg-blue-800 rounded-[48px] -z-10 opacity-5"></div>
           <div className="bg-white rounded-[48px] shadow-2xl shadow-blue-900/5 border border-gray-100 overflow-hidden">
              <div className="flex flex-col lg:flex-row items-stretch">
                 
                 {/* Photo Column */}
                 <div className="lg:w-1/3 bg-[#0a192f] flex flex-col items-center justify-center p-12 lg:p-16 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                       <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
                       <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full"></div>
                    </div>
                    <div className="relative z-10 w-full max-w-[280px]">
                       <div className="aspect-[1/1] bg-gray-200 rounded-full overflow-hidden border-8 border-white/10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            src={CHAIRMAN_IMAGE} 
                            alt="এ্যাডভোকেট কোহেলী কুদ্দুস" 
                            className="w-full h-full object-cover"
                          />
                       </div>
                    </div>
                    <div className="mt-8 text-center">
                       <div className="bg-amber-400 text-blue-950 px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest">
                          CHAIRMAN
                       </div>
                    </div>
                 </div>

                 {/* Basic Info Column */}
                 <div className="lg:w-2/3 p-10 lg:p-20 flex flex-col justify-center">
                    <div className="space-y-6">
                       <div className="flex items-center gap-3">
                          <span className="w-12 h-1 bg-amber-500 rounded-full"></span>
                          <span className="text-amber-600 font-black text-[10px] uppercase tracking-[0.3em]">Institutional Leadership</span>
                       </div>
                       
                       <h1 className="text-4xl md:text-6xl font-black text-blue-950 font-bn tracking-tight leading-tight">
                          এ্যাডভোকেট কোহেলী কুদ্দুস
                       </h1>
                       <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                          <span className="font-bold uppercase tracking-widest text-sm text-blue-800">Advocate Koheli Quddus</span>
                          <span className="hidden sm:inline opacity-30">|</span>
                          <span className="font-medium italic">Chairman, Rajapur High School</span>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-gray-100">
                          <div className="space-y-1">
                             <h6 className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Father's Information</h6>
                             <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><User className="w-4 h-4" /></div>
                                <div>
                                   <p className="font-bn font-bold text-xl text-gray-900">অধ্যাপক মোঃ আব্দুল কুদ্দুস</p>
                                   <p className="text-[10px] font-bold text-blue-600 uppercase">Hon'ble Member of Parliament, Natore-4</p>
                                </div>
                             </div>
                          </div>
                          <div className="space-y-1">
                             <h6 className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Mother's Name</h6>
                             <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600"><User className="w-4 h-4" /></div>
                                <span className="font-bn font-bold text-xl text-gray-900">রওশন আরা বেগম</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Detailed Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* Sidebar Info */}
           <div className="lg:col-span-4 space-y-8">
              
              {/* Permanent Address */}
              <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
                 <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <h4 className="text-blue-950 font-black text-xs uppercase tracking-widest mb-4">Official Address</h4>
                 <p className="font-bn text-xl leading-relaxed text-gray-700">
                    গ্রাম-চাঁচকৈড় বাজার পাড়া, ডাকঘর-চাঁচকৈড়-6440, উপজেলা- গুরুদাসপুর, জেলা-নাটোর।
                 </p>
              </div>

              {/* Institutional Values */}
              <div className="bg-[#0a192f] p-10 rounded-[40px] text-white shadow-xl">
                 <h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-amber-400">Leadership Vision</h4>
                 <div className="space-y-8">
                    <div className="flex gap-4">
                       <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                       <p className="text-sm font-medium leading-relaxed opacity-80 italic">"Advancing the legacy of Natore-4 through sustainable educational reforms."</p>
                    </div>
                    <div className="flex gap-4">
                       <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                       <p className="text-sm font-medium leading-relaxed opacity-80 italic">"Empowering the next generation with digital excellence and moral values."</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Main Education Section */}
           <div className="lg:col-span-8 space-y-8">
              
              {/* Academic Qualification Section */}
              <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-sm border border-gray-100">
                 <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                       <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-blue-950 uppercase tracking-tight">Academic Profile</h3>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-colors group">
                       <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm"><School className="w-5 h-5" /></div>
                          <h5 className="font-black text-blue-950 uppercase text-[10px] tracking-widest">Alumni Of</h5>
                       </div>
                       <p className="font-bn font-bold text-3xl text-gray-900 mb-2">রাজশাহী কলেজ</p>
                       <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Rajshahi College</p>
                    </div>
                    
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-colors group">
                       <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm"><Library className="w-5 h-5" /></div>
                          <h5 className="font-black text-blue-950 uppercase text-[10px] tracking-widest">Graduate of</h5>
                       </div>
                       <p className="font-bn font-bold text-3xl text-gray-900 mb-2">রাজশাহী বিশ্ববিদ্যালয়</p>
                       <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">University of Rajshahi</p>
                    </div>
                 </div>

                 <div className="mt-12 p-8 bg-blue-50/50 rounded-3xl border border-blue-100/50">
                    <h4 className="text-blue-950 font-black text-xs uppercase tracking-widest mb-4">A Legacy of Service</h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                       With deep roots in the Natore-4 constituency, Advocate Koheli Quddus brings a unique perspective to institutional governance, blending legal expertise with a lifelong commitment to public welfare as the daughter of Hon'ble Member of Parliament, Prof. Md. Abdul Quddus.
                    </p>
                 </div>
              </div>

              {/* Contact Inquiry Card */}
              <div className="bg-gradient-to-br from-amber-400 to-amber-500 p-12 rounded-[40px] text-blue-950 shadow-xl shadow-amber-500/10">
                 <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-20 h-20 rounded-3xl bg-blue-950 text-white flex items-center justify-center shrink-0">
                       <Star className="w-10 h-10" />
                    </div>
                    <div className="space-y-3 text-center md:text-left">
                       <h3 className="text-2xl font-black uppercase tracking-tight">Institutional Motto</h3>
                       <p className="font-bn text-xl md:text-2xl font-bold italic leading-relaxed">
                          "শিক্ষা ও সেবার ব্রতে রাজাপুর উচ্চ বিদ্যালয় সব সময় অঙ্গীকারবদ্ধ।"
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const HeadmasterCV = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen pt-32 md:pt-44 pb-24 bg-[#f8fafc] animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Navigation & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 relative z-20">
          <button 
            onClick={onBack}
            className="group flex items-center space-x-3 text-blue-950 font-black text-[11px] uppercase tracking-widest hover:text-blue-600 transition-all bg-white px-7 py-3.5 rounded-full shadow-md border border-gray-200 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portal</span>
          </button>
          
          <div className="flex items-center space-x-3">
             <button className="flex items-center gap-2 bg-blue-900 text-white px-7 py-3.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg active:scale-95">
               <FileText className="w-4 h-4" /> <span>Download CV</span>
             </button>
          </div>
        </div>

        {/* Hero Identity Card */}
        <div className="relative mb-12">
           <div className="absolute top-0 left-0 w-full h-48 bg-blue-900 rounded-[48px] -z-10 opacity-10"></div>
           <div className="bg-white rounded-[48px] shadow-2xl shadow-blue-900/5 border border-gray-100 overflow-hidden">
              <div className="flex flex-col lg:flex-row items-stretch">
                 
                 {/* Photo Column */}
                 <div className="lg:w-1/3 bg-blue-900 flex flex-col items-center justify-center p-12 lg:p-16 relative overflow-hidden">
                    <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full opacity-20"></div>
                    <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full opacity-20"></div>
                    <div className="relative z-10 w-full max-w-[280px]">
                       <div className="aspect-[4/5] bg-gray-200 rounded-[32px] overflow-hidden border-4 border-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
                          <img 
                            src={HEADMASTER_IMAGE} 
                            alt="এ,বি,এম, আশরাফুল ইসলাম" 
                            className="w-full h-full object-cover"
                          />
                       </div>
                       <div className="absolute -bottom-4 -right-4 bg-amber-400 text-blue-950 p-4 rounded-2xl shadow-xl transform rotate-3">
                          <Award className="w-8 h-8" />
                       </div>
                    </div>
                 </div>

                 {/* Basic Info Column */}
                 <div className="lg:w-2/3 p-10 lg:p-20 flex flex-col justify-center">
                    <div className="space-y-6">
                       <div className="flex items-center gap-3">
                          <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
                          <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em]">Institutional Head Profile</span>
                       </div>
                       
                       <h1 className="text-4xl md:text-6xl font-black text-blue-950 font-bn tracking-tight leading-tight">
                          এ, বি, এম, আশরাফুল ইসলাম
                       </h1>
                       <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                          <span className="font-bold uppercase tracking-widest text-sm">Headmaster / Principal</span>
                          <span className="hidden sm:inline opacity-30">|</span>
                          <span className="font-medium italic">Rajapur High School since 2012</span>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-gray-100">
                          <div className="space-y-1">
                             <h6 className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2">Father's Name</h6>
                             <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600"><User className="w-4 h-4" /></div>
                                <span className="font-bn font-bold text-xl text-gray-900">মৃত শহীদ রফিকুল ইসলাম</span>
                             </div>
                          </div>
                          <div className="space-y-1">
                             <h6 className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2">Mother's Name</h6>
                             <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600"><User className="w-4 h-4" /></div>
                                <span className="font-bn font-bold text-xl text-gray-900">আজিজুন নাহার</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Detailed Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* Sidebar Info */}
           <div className="lg:col-span-4 space-y-8">
              
              {/* Permanent Address */}
              <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
                 <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <h4 className="text-blue-950 font-black text-xs uppercase tracking-widest mb-4">Mailing Address</h4>
                 <p className="font-bn text-xl leading-relaxed text-gray-700">
                    গ্রাম-রাজাপুর বাজার, ডাকঘর-রাজাপুর হাট, উপজেলা-বড়াইগ্রাম, জেলা-নাটোর।
                 </p>
              </div>

              {/* Digital Contact */}
              <div className="bg-blue-950 p-10 rounded-[40px] text-white shadow-xl shadow-blue-900/10">
                 <h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-blue-400">Communication</h4>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 group cursor-pointer">
                       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                          <Phone className="w-4 h-4" />
                       </div>
                       <div>
                          <p className="text-[9px] font-black uppercase text-blue-400 tracking-widest">Phone</p>
                          <p className="font-bold tracking-widest">01716-385446</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                          <Mail className="w-4 h-4" />
                       </div>
                       <div>
                          <p className="text-[9px] font-black uppercase text-blue-400 tracking-widest">Email</p>
                          <p className="font-bold text-xs truncate max-w-[180px]">rajapurhighschool@gmail.com</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Verified Credentials Card */}
              <div className="bg-emerald-50 p-8 rounded-[40px] border border-emerald-100">
                 <div className="flex items-center gap-3 text-emerald-700 font-black text-[10px] uppercase tracking-widest mb-4">
                    <CheckCircle className="w-4 h-4" /> Verified Academician
                 </div>
                 <p className="text-emerald-900/60 text-xs leading-relaxed font-medium">
                    This profile is officially verified by the Governing Body of Rajapur High School.
                 </p>
              </div>
           </div>

           {/* Main Career & Education Section */}
           <div className="lg:col-span-8 space-y-8">
              
              {/* Academic Qualification Section */}
              <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-sm border border-gray-100">
                 <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                          <BookOpen className="w-6 h-6" />
                       </div>
                       <h3 className="text-2xl font-black text-blue-950 uppercase tracking-tight">Academic Journey</h3>
                    </div>
                    <span className="hidden sm:inline bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">NTRCA Certified</span>
                 </div>

                 {/* Custom Academic Timeline */}
                 <div className="relative space-y-8 before:absolute before:top-0 before:left-8 before:bottom-0 before:w-px before:bg-blue-50">
                    {[
                      { 
                        title: 'Bachelor of Education (B.Ed)', 
                        bnTitle: 'বি,এড', 
                        inst: 'উন্মুক্ত বিশ্ববিদ্যালয়', 
                        year: '১৯৯৭', 
                        result: '২য় বিভাগ',
                        color: 'bg-indigo-600'
                      },
                      { 
                        title: 'Master of Arts (M.A)', 
                        bnTitle: 'এম,এ', 
                        inst: 'জাতীয় বিশ্ববিদ্যালয়', 
                        year: '১৯৯৪', 
                        result: '২য় বিভাগ',
                        color: 'bg-blue-600'
                      },
                      { 
                        title: 'Bachelor of Arts (B.A)', 
                        bnTitle: 'বি,এ', 
                        inst: 'ঢাকা বিশ্ববিদ্যালয়', 
                        year: '১৯৯০', 
                        result: '২য় বিভাগ',
                        color: 'bg-sky-600'
                      },
                      { 
                        title: 'Higher Secondary Certificate (HSC)', 
                        bnTitle: 'এইচ,এস,সি', 
                        inst: 'আব্দুলপুর সরকারী কলেজ', 
                        year: '১৯৮৮', 
                        result: '২য় বিভাগ',
                        color: 'bg-emerald-600'
                      },
                      { 
                        title: 'Secondary School Certificate (SSC)', 
                        bnTitle: 'এস,এস,সি', 
                        inst: 'রাজাপুর উচ্চ বিদ্যালয়', 
                        year: '১৯৮৬', 
                        result: '১ম বিভাগ',
                        color: 'bg-amber-600'
                      },
                      { 
                        title: 'Primary Education', 
                        bnTitle: 'প্রাথমিক বিদ্যালয়', 
                        inst: 'রাজাপুর সরকারী প্রাথমিক বিশ্ববিদ্যালয়', 
                        year: 'Pre-1980', 
                        result: 'Standard Pass',
                        color: 'bg-gray-400'
                      }
                    ].map((edu, i) => (
                      <div key={i} className="relative pl-24 group">
                         {/* Bullet */}
                         <div className={`absolute left-4 top-0 w-8 h-8 rounded-full ${edu.color} border-4 border-white shadow-lg flex items-center justify-center text-white font-black z-10 transition-transform group-hover:scale-125`}>
                            {i + 1}
                         </div>
                         
                         {/* Card */}
                         <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 group-hover:bg-white group-hover:shadow-xl group-hover:border-blue-100 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                               <div>
                                  <h4 className="text-blue-950 font-black text-xl mb-1">{edu.title}</h4>
                                  <div className="flex items-center gap-2">
                                     <span className="bg-blue-900 text-white px-3 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-widest">{edu.bnTitle}</span>
                                     <span className="text-gray-400 font-bold text-xs">Class of {edu.year}</span>
                                  </div>
                               </div>
                               <div className="text-right shrink-0">
                                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Result achieved</div>
                                  <div className="bg-white border border-gray-100 px-4 py-1 rounded-xl text-blue-900 font-bold text-sm shadow-sm">{edu.result}</div>
                               </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                               <Library className="w-4 h-4 text-blue-600" />
                               <span className="font-bn font-bold text-2xl">{edu.inst}</span>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Administrative Focus Section */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-12 rounded-[40px] text-white shadow-xl">
                 <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center shrink-0">
                       <Briefcase className="w-10 h-10" />
                    </div>
                    <div className="space-y-3 text-center md:text-left">
                       <h3 className="text-2xl font-black uppercase tracking-tight">Professional Philosophy</h3>
                       <p className="font-bn text-xl md:text-2xl italic leading-relaxed text-blue-50">
                          "আমার লক্ষ্য রাজাপুর উচ্চ বিদ্যালয়কে একটি আদর্শ বিদ্যাপীঠ হিসেবে গড়ে তোলা যেখানে আধুনিক জ্ঞান ও নৈতিকতার সমন্বয় ঘটবে।"
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const headerHeightClass = scrolled ? 'h-[65px] md:h-[70px]' : 'h-[80px] md:h-[85px]';

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      
      {/* Navigation Container */}
      <div className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 ease-in-out ${scrolled ? 'md:-translate-y-10' : 'translate-y-0'}`}>
        
        {/* Top Bar (Hidden on Mobile) */}
        <div className={`bg-blue-900 text-white text-[11px] font-bold uppercase tracking-[0.1em] py-2.5 hidden md:block border-b border-blue-800/50`}>
          <div className="container mx-auto px-4 flex justify-between items-center h-full">
            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-2 opacity-90">
                <Phone className="w-3.5 h-3.5 text-blue-300" />
                <span>01716-385446</span>
              </span>
              <span className="flex items-center space-x-2 opacity-90">
                <Mail className="w-3.5 h-3.5 text-blue-300" />
                <span>rajapurhighschool@gmail.com</span>
              </span>
              <span className="flex items-center space-x-2 opacity-90">
                <Award className="w-3.5 h-3.5 text-blue-300" />
                <span>EIIN: 123910</span>
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#portal" className="hover:text-blue-300 transition-colors">Student Portal</a>
              <span className="opacity-30">|</span>
              <div className="flex items-center space-x-2 text-blue-100">
                <Globe className="w-3.5 h-3.5" />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <header className={`w-full transition-all duration-500 bg-white shadow-sm border-b border-gray-100 ${scrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className={`flex items-center justify-between transition-all duration-500 ${headerHeightClass}`}>
              
              {/* Branding */}
              <div 
                className="flex items-center space-x-3 shrink-0 cursor-pointer"
                onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }}
              >
                <div className={`bg-white p-1 rounded-xl shadow-sm hidden sm:block transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'} overflow-hidden border border-gray-100`}>
                  <img src={LOGO_URL} alt="Logo" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex flex-col">
                  <h1 className={`font-black text-blue-900 leading-tight transition-all duration-500 ${scrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'}`}>
                    রাজাপুর উচ্চ বিদ্যালয়
                  </h1>
                  <p className={`text-gray-400 font-bold tracking-[0.1em] uppercase transition-all duration-500 ${scrolled ? 'text-[8px]' : 'text-[9px]'}`}>
                    Rajapur High School
                  </p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center justify-center flex-1 mx-4 h-full">
                {NAVIGATION.map((item, idx) => (
                  item.subItems ? (
                    <Dropdown key={idx} item={item} setView={setCurrentView} />
                  ) : (
                    <a 
                      key={idx}
                      href={item.href || '#'}
                      onClick={(e) => {
                        if (item.view) {
                          e.preventDefault();
                          setCurrentView(item.view);
                          window.scrollTo(0,0);
                        }
                      }}
                      className="px-4 py-2 text-[14px] font-bold text-gray-700 hover:text-blue-700 transition-all uppercase tracking-wide relative group"
                    >
                      {item.label}
                      <span className="absolute bottom-[-4px] left-1/2 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-1/2 -translate-x-1/2"></span>
                    </a>
                  )
                ))}
              </nav>

              {/* Actions Area */}
              <div className="flex items-center space-x-3 md:space-x-4 justify-end shrink-0">
                <button className="p-2 text-gray-400 hover:text-blue-700 transition-all rounded-full hidden lg:block">
                  <Search className="w-5 h-5" />
                </button>
                <a 
                  href="#online-admission" 
                  className="hidden lg:flex items-center space-x-2 bg-blue-900 text-white px-6 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-wider hover:bg-blue-800 transition-all shadow-md active:scale-95"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Admission</span>
                </a>
                
                <button 
                  className="xl:hidden p-2.5 text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all active:scale-90 z-[120]"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Navigation Overlay */}
        <div className={`xl:hidden fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-[110] ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className={`absolute right-0 top-0 h-screen w-[300px] max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-black text-blue-900 text-lg">Menu</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Rajapur High School</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                   <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 px-2 custom-scrollbar">
                {NAVIGATION.map((item, idx) => (
                  item.subItems ? (
                    <Dropdown 
                      key={idx} 
                      item={item} 
                      isMobile 
                      setView={setCurrentView}
                      onCloseMenu={() => setIsMobileMenuOpen(false)} 
                    />
                  ) : (
                    <a 
                      key={idx}
                      href={item.href || '#'}
                      className="block px-4 py-3.5 text-gray-700 font-bold uppercase text-[13px] tracking-wide hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all"
                      onClick={() => {
                        if (item.view) setCurrentView(item.view);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  )
                ))}
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50/50 space-y-3">
                 <a href="#portal" className="flex items-center justify-center w-full bg-white border border-gray-200 py-4 rounded-xl font-bold uppercase text-xs tracking-widest text-gray-600">Student Portal</a>
                 <a href="#online-admission" className="flex items-center justify-center w-full bg-blue-900 text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest shadow-lg">Online Admission</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main View Logic */}
      {currentView === 'home' ? (
        <>
          {/* Hero Section */}
          <section id="home" className="relative h-[70vh] md:h-[82vh] bg-black overflow-hidden mt-[80px] md:mt-[120px]">
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
              <source src={HERO_VIDEO_URL} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 md:px-6 text-center">
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="inline-block bg-white/10 backdrop-blur-md text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6 border border-white/20 shadow-2xl">
                  Nurturing Talent Since 1956
                </div>
                <h2 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[1.1] md:leading-none drop-shadow-2xl">
                  RAJAPUR HIGH <br /> <span className="text-blue-400">SCHOOL</span>
                </h2>
                <div className="w-16 md:w-24 h-1 md:h-2 bg-blue-600 mx-auto mt-6 md:mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Stats Bar */}
          <section className="bg-white border-b border-gray-100 shadow-xl relative z-30 -mt-10 md:-mt-12 mx-4 md:container md:mx-auto rounded-3xl md:rounded-[32px] overflow-hidden md:max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-gray-100 lg:divide-y-0">
              {[
                { label: 'ESTABLISHED', val: '1956 AD', icon: Clock, color: 'blue' },
                { label: 'LOCATION', val: 'Baraigram', icon: MapPin, color: 'emerald' },
                { label: 'EIIN NUMBER', val: '123910', icon: Award, color: 'amber' },
                { label: 'STUDENTS', val: '850+', icon: Users, color: 'purple' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left md:space-x-4 p-5 md:p-8 hover:bg-gray-50 transition-all border-none">
                  <div className={`bg-${stat.color}-100 p-3 md:p-4 rounded-xl md:rounded-2xl text-${stat.color}-600 mb-3 md:mb-0`}>
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-lg">{stat.val}</h4>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 mt-0.5 md:mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="space-y-6 md:space-y-8">
                <div className="inline-flex items-center space-x-3 text-blue-600 font-bold uppercase tracking-widest text-[11px]">
                  <div className="w-10 h-[2px] bg-blue-600 rounded-full"></div>
                  <span>Academic Legacy</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                  A Legacy of <br /><span className="text-blue-600">Pure Knowledge</span>
                </h2>
                <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
                  Located in the historic Rajapur Hat of Baraigram, Natore, our school has been the cornerstone of academic excellence for generations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-2 md:pt-4">
                  <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 transition-transform hover:-translate-y-1">
                    <div className="bg-blue-50 p-3 rounded-xl text-blue-600"><Library className="w-6 h-6" /></div>
                    <div>
                      <h5 className="font-black text-gray-900 text-xs tracking-widest uppercase">Digital Lab</h5>
                      <p className="text-[11px] text-gray-400 font-bold mt-1 uppercase">Modern ICT Hub</p>
                    </div>
                  </div>
                  <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 transition-transform hover:-translate-y-1">
                    <div className="bg-blue-50 p-3 rounded-xl text-blue-600"><GraduationCap className="w-6 h-6" /></div>
                    <div>
                      <h5 className="font-black text-gray-900 text-xs tracking-widest uppercase">Success</h5>
                      <p className="text-[11px] text-gray-400 font-bold mt-1 uppercase">Board Top Rank</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Message Card */}
              <div id="headmaster" className="bg-white p-6 md:p-12 rounded-3xl md:rounded-[40px] shadow-xl border border-gray-100 relative group">
                <div className="flex flex-col gap-8 md:gap-10">
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 rounded-3xl overflow-hidden shadow-lg flex-shrink-0 border-4 border-white cursor-pointer" onClick={() => setCurrentView('cv')}>
                      <img src={HEADMASTER_IMAGE} alt="Headmaster" className="w-full h-full object-cover transition-transform hover:scale-110" />
                    </div>
                    <div className="space-y-2">
                      <div className="bg-blue-900 text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 inline-block rounded-full">MESSAGE</div>
                      <h3 className="text-2xl md:text-3xl font-black text-gray-900">এ,বি,এম, আশরাফুল ইসলাম</h3>
                      <button onClick={() => setCurrentView('cv')} className="text-blue-600 font-bold uppercase tracking-widest text-[11px] flex items-center gap-2 hover:gap-3 transition-all">
                        VIEW FULL CV <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <p className="italic text-gray-600 text-lg md:text-xl font-medium leading-relaxed border-l-4 border-blue-600 pl-4 md:pl-6 font-bn">
                    "আমরা বিশ্বাস করি শিক্ষা শুধু ভালো ফলের জন্য নয়, বরং একটি সুস্থ ও সুন্দর সমাজ বিনির্মাণের জন্য।"
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : currentView === 'cv' ? (
        <HeadmasterCV onBack={() => setCurrentView('home')} />
      ) : currentView === 'chairman' ? (
        <ChairmanCV onBack={() => setCurrentView('home')} />
      ) : currentView === 'committee' ? (
        <ManagingCommittee onBack={() => setCurrentView('home')} />
      ) : currentView === 'teachers' ? (
        <TeachersPage onBack={() => setCurrentView('home')} />
      ) : currentView === 'staff' ? (
        <WorkingEmployeePage onBack={() => setCurrentView('home')} />
      ) : null}

      {/* Footer (Always Visible) */}
      <footer className="bg-gray-950 text-gray-500 pt-16 md:pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
          <div className="md:col-span-2 space-y-6 md:space-y-8">
            <div className="flex items-center space-x-4">
               <div className="bg-white p-1 rounded-xl overflow-hidden border border-white/10">
                  <img src={LOGO_URL} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
               </div>
               <div>
                 <h4 className="text-white font-black text-xl md:text-2xl tracking-tight">Rajapur High School</h4>
                 <p className="text-[9px] md:text-[10px] font-black tracking-[0.2em] text-gray-600 uppercase">Since 1956</p>
               </div>
            </div>
            <p className="text-base md:text-lg leading-relaxed font-medium max-w-md">Building foundations for a smarter tomorrow in the heart of Baraigram, Natore.</p>
          </div>

          <div className="space-y-6">
            <h5 className="text-white font-black text-xs uppercase tracking-widest border-b border-blue-600 inline-block pb-2">Institutional</h5>
            <ul className="space-y-4">
              {['Academic Calendar', 'Result Archive', 'Online Admission', 'Notice Board'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-all text-[11px] font-bold uppercase tracking-widest block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
             <h5 className="text-white font-black text-xs uppercase tracking-widest border-b border-blue-600 inline-block pb-2">Get in Touch</h5>
             <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-white/5 p-2 rounded-lg text-blue-600 shrink-0"><MapPin className="w-5 h-5" /></div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Rajapur Hat, Baraigram, Natore</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/5 p-2 rounded-lg text-blue-600 shrink-0"><Phone className="w-5 h-5" /></div>
                  <p className="text-[11px] font-bold text-gray-400 tracking-widest">01716-385446</p>
                </div>
             </div>
          </div>
        </div>
        <div className="container mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">© 2025 Rajapur High School.</p>
        </div>
      </footer>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        .animate-marquee { animation: marquee 25s linear infinite; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>
    </div>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
