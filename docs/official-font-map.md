# خريطة الخطوط الرسمية في Sakina Pro

تمت قراءة Sakina Pro للقراءة فقط. تعريفات الخطوط الأصلية موجودة في `src/index.css` وتستخدم الملفات المحلية من `/public/fonts/`:

| الاستخدام | اسم العائلة الرسمي | الملف الأصلي |
|---|---|---|
| نصوص الواجهة والشعار النصي | `Thmanyah Sans` | `thmanyahsans-Regular.woff2` و`thmanyahsans-Bold.woff2` |
| النصوص العربية التحريرية | `Thmanyah Serif Text` | `thmanyahseriftext-Regular.woff2` و`thmanyahseriftext-Medium.woff2` |
| العناوين الكبيرة/الشعار | `Thmanyah Serif Display` | `thmanyahserifdisplay-Bold.woff2` و`thmanyahserifdisplay-Black.woff2` |
| صفحة المصحف | `KFGQPC Uthman Taha Naskh` | `KFGQPC_Uthmanic_Script_HAFS_Regular.otf` |
| glyphs صفحة QCF 001 | `QCF_P001` | `qcf/p001.woff2` |
| عنوان اسم السورة داخل البرواز | `SuraNames` | `sura_names.woff2` |
| أسلوب عنوان السورة الملون الأصلي | `QCF_SurahHeader_COLOR` | `QCF_SurahHeader_COLOR-Regular.ttf` |

Sakina Pro يربط `font-sans` بـ`Thmanyah Sans`، و`font-serif` بـ`Thmanyah Serif Text`، و`font-display` بـ`Thmanyah Serif Display`. لا يوجد احتياج لاستخدام Google Fonts بعد نقل الملفات محليًا.

المصدر: نسخة القراءة المحلية من مستودع Sakina Pro، ملف `src/index.css` وتعريفات `/public/fonts/`. لم يتم تعديل مستودع المصدر أو رفع أي شيء إليه.
