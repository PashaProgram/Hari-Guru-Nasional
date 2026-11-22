// ============================================================
// DATA SURAT — satu kolom spreadsheet = satu surat.
// Format: { to: "Nama guru / Semua guru", body: "Isi pesan" }
// ============================================================
const LETTERS = [

/* ===== Baris 1 ===== */
{ to: "Semua guru", body: "Guru nya asik dan nyaman kalo ngajar." },
{ to: "Bu Diarti", body: "Hidup lebih lama lagi, sehat selalu, panjang umur, di beri kemudahan sama Tuhan. Doa terbaik untuk semua guru." },
{ to: "Semua guru", body: "Terima kasih untuk semua guru yang sudah sabar membimbing, mengajar, dan memberikan banyak ilmu kepada kami. Maaf kalau selama ini masih banyak tingkah laku, perkataan, atau sikap kami yang kurang berkenan. Semoga Bapak/Ibu guru selalu diberikan kesehatan, kesabaran, dan kebahagiaan. Terus semangat dalam mendidik generasi penerus bangsa. Semoga semua ilmu yang telah diberikan bisa menjadi bekal yang bermanfaat untuk masa depan kami." },

/* ===== Baris 2 ===== */
{ to: "Semua guru", body: "Kaget si, beda banget ngajarnya sama yang di SMP dulu." },
{ to: "Bu Diarti", body: "Semoga di umrohkan, haji, banyakin rezeki." },
{ to: "Semua guru", body: "Dibanyakin rezekinya, sing sehat, jangan cape mengajar kami ya bu/pak." },

/* ===== Baris 3 ===== */
{ to: "Semua guru", body: "Awalnya kelihatan tegas, ternyata orangnya asik." },
{ to: "Semua guru", body: "Semoga selalu dikelilingi oleh orang-orang baik." },
{ to: "Semua guru", body: "Semoga selalu sehat, dijauhkan dari marabahaya, dan doa terbaik intinya." },

/* ===== Baris 4 ===== */
{ to: "Semua guru", body: "Happy, bersemangat, seru, dan gembira." },
{ to: "Semua guru", body: "Teruslah menjadi guru yang baik, ramah, dan hebat dalam mengajarkan kami." },
{ to: "Semua guru", body: "Teruslah semangat dan pantang menyerah dalam mengajar." },

/* ===== Baris 5 ===== */
{ to: "Bu Diarti", body: "Baik-baik, apalagi Bu Diarti." },
{ to: "Bu Diarti", body: "Terima kasih ya Bu Diarti udah mau jadi walas X MP 1." },
{ to: "Semua guru", body: "Terima kasih sudah membimbing kami." },

/* ===== Baris 6 ===== */
{ to: "Semua guru", body: "Biasa aja, nothing feel special." },
{ to: "Semua guru", body: "Tetap semangat dan jadi guru kebanggaan semua murid." },
{ to: "Semua guru", body: "Terima kasih telah memberikan ilmu yang bermanfaat bagi semua murid." },

/* ===== Baris 7 ===== */
{ to: "Bu Vina", body: "Just wanna say thanks for being such an awesome teacher. Kelas selalu on point dan inspiratif, aku belajar banyak hal dari kalian, bukan cuma soal pelajaran tapi juga soal kehidupan. Keep shining, salam sukses." },
{ to: "Semua guru", body: "Terima kasih telah menjadi lentera di tengah kebingungan kami. Setiap nasihat, teguran, dan pelajaran yang kalian berikan adalah bekal berharga buat masa depan kami. Maafkan segala khilaf kami selama ini, doa terbaik selalu menyertai langkah kalian, semoga kebaikan kalian dibalas berlipat ganda, tetap semangat menginspirasi!" },
{ to: "Semua guru", body: "Terima kasih telah menjadi lentera di tengah kebingungan kami. Setiap nasihat, teguran, dan pelajaran yang kalian berikan adalah bekal berharga buat masa depan kami. Maafkan segala khilaf kami selama ini, doa terbaik selalu menyertai langkah kalian, semoga kebaikan kalian dibalas berlipat ganda, tetap semangat menginspirasi!" },

/* ===== Baris 8 ===== */
{ to: "Semua guru", body: "Baik." },
{ to: "Pak Wigandi", body: "Pak Wigandi, makasih ilmu & bimbingannya!" },
{ to: "Semua guru", body: "Keep up the spirit of teaching." },

/* ===== Baris 9 ===== */
{ to: "Semua guru", body: "Menyenangkan & terinspirasi." },
{ to: "Bu Diarti", body: "Ibu, semoga sehat selalu dan semoga dilancarkan apa yang sedang ibu jalani hari ini, esok, maupun nantinya. Love you, Ibu." },
{ to: "Semua guru", body: "Tetap semangat mengabdi ibu & bapak guru. Semoga hari guru ini bisa menjadi penyemangat bapak dan ibu dalam mengajar serta selalu sabar dan tabah dalam menghadapi siswa/i-nya. Happy teacher day, bapak & ibu guru SMKN 2 Cikarang Barat." },

/* ===== Baris 10 ===== */
{ to: "Semua guru", body: "Senang, tapi jujur sedikit kaget juga karena materi yang disampaikan ternyata detail banget. Awalnya agak perlu penyesuaian, tapi dari situ jadi banyak hal baru yang bisa dipelajari." },
{ to: "Semua guru", body: "Terima kasih sudah sabar dalam mengajar dan membimbing kami. Semoga selalu sehat, bahagia, dan tetap semangat dalam mengajar. Semoga kebaikan kalian selalu dibalas dengan hal-hal baik juga." },
{ to: "Semua guru", body: "Terima kasih sudah mengajarkan banyak hal kepada kami, bukan cuma tentang pelajaran, tapi juga hal-hal yang berguna untuk kehidupan ke depannya. Maaf kalau kami masih sering bikin kesal atau belum bisa jadi murid yang baik. Semoga Bapak/Ibu guru selalu sehat dan bahagia." },

/* ===== Baris 11 ===== */
{ to: "Semua guru", body: "Senang." },
{ to: "Semua guru", body: "Terima kasih atas setiap ilmu, nasihat, dan tawa yang dibagikan di kelas. Berkat bimbingan Ibu, belajar jadi terasa lebih bermakna." },
{ to: "Semua guru", body: "Terima kasih sudah mengajar kami setulus hati, pak/bu." },

/* ===== Baris 12 ===== */
{ to: "Semua guru", body: "Merasa harus lebih giat dan fokus." },
{ to: "Semua guru", body: "Keep spreading kindness." },
{ to: "Semua guru", body: "Thank you teachers for your patience and dedication." },

/* ===== Baris 13 ===== */
{ to: "Semua guru", body: "Happy banget karena banyak tugas." },
{ to: "Semua guru", body: "Selamat hari guru." },
{ to: "Semua guru", body: "Selamat hari guru." },

/* ===== Baris 14 ===== */
{ to: "Semua guru", body: "Kagum." },
{ to: "Bu Putri Yustika Hardiyanti", body: "Terima kasih selalu membimbing saya setiap hari, terima kasih telah menjadi wali kelas saya." },
{ to: "Semua guru", body: "Semangat untuk mengajar anak-anak SMK." },

/* ===== Baris 15 ===== */
{ to: "Semua guru", body: "Nothing." },
{ to: "Semua guru", body: "Ditingkatkan lagi mengajarnya, udah segitu aja." },
{ to: "Semua guru", body: "Sama seperti pesan untuk guru terbaik, ditingkatkan lagi mengajarnya, udah segitu aja." },

/* ===== Baris 16 ===== */
{ to: "Bu Icha", body: "Senang banget karena dapat walas Bu Icha, dia kalau ngajar sabar banget." },
{ to: "Semua guru", body: "Tetap menjadi pribadi yang disegani orang." },
{ to: "Semua guru", body: "Kalau kita ada salah marahin kita aja ya, lebih baik kalian marah dan beritahu kesalahan kami daripada kalian diam." },

/* ===== Baris 17 ===== */
{ to: "Semua guru", body: "Baik semua." },
{ to: "Bu Enden", body: "Untuk Ibu Enden, semoga ibu sehat selalu. Ibu yang paling hebat, ibu yang paling terfavorit bagi saya." },
{ to: "Semua guru", body: "Terima kasih kepada seluruh guru atas kesabaran, dedikasi, dan keikhlasan yang tak pernah putus dalam mendidik, membimbing, serta menginspirasi generasi penerus. Sekali lagi selamat hari guru." },

/* ===== Baris 18 ===== */
{ to: "Semua guru", body: "Seru, baik, sabar." },
{ to: "Semua guru", body: "Sehat selalu, bahagia selalu, makin semangat ngajarnya." },
{ to: "Semua guru", body: "Hidup lebih lama." },

/* ===== Baris 19 ===== */
{ to: "Semua guru", body: "Seru." },
{ to: "Semua guru", body: "Pesannya sama seperti pesan untuk semua guru, karena bagi saya guru yang ada di SMK 2 adalah guru terbaik." },
{ to: "Semua guru", body: "Terima kasih karena tidak pernah lelah memberikan ilmu, arahan, dan nasihat kepada kami. Terima kasih telah menjadi sosok yang bukan hanya mengajarkan pelajaran, tetapi juga mengajarkan arti kesabaran, tanggung jawab, dan kehidupan. Maaf jika selama ini sikap dan perkataan kami sering menguji kesabaran Bapak dan Ibu. Mungkin tidak semua nasihat dapat kami pahami saat ini, tetapi suatu hari nanti kami akan mengerti betapa berharganya setiap hal yang telah kalian ajarkan." },

/* ===== Baris 20 ===== */
{ to: "Semua guru", body: "Kesan pertama saya sangat baik. Guru-gurunya ramah, baik, dan memberikan suasana belajar yang nyaman. Saya juga merasa senang karena bisa mendapatkan banyak ilmu dan pengalaman baru." },
{ to: "Semua guru", body: "Terima kasih sudah menjadi guru yang sabar, baik, dan selalu membimbing saya. Semoga Bapak/Ibu selalu diberikan kesehatan, kebahagiaan, dan kesabaran dalam mendidik murid-muridnya." },
{ to: "Semua guru", body: "Terima kasih kepada semua guru yang telah memberikan ilmu, membimbing, dan mendidik kami dengan penuh kesabaran. Semoga segala kebaikan dan pengorbanan Bapak/Ibu menjadi berkah. Tetap semangat dalam mencerdaskan generasi bangsa!" },

/* ===== Baris 21 ===== */
{ to: "Semua guru", body: "Di awal masuk kelas 10 guru-gurunya super duper baik! Semua materi aku bisa paham. Dan tugas-tugas yang diberikan juga sangat melatih kita untuk memahami materi lebih dalam." },
{ to: "Pak Wigandi", body: "Buat Pak Wigandi, makasih ya Pak, udah ngajarin tentang manajemen perkantoran, ngetik 10 jari mata sambil ditutup. Ujian mengetik 10 jari, jujur ya Pak diajarin Bapak tuh, materi manajemen saya langsung nangkep dan kepakai sampai kelas 12 saat ini. Bener-bener bangga sama Bapak, makasih ya Pak udah ngajarin di bidang manajemen perkantoran." },
{ to: "Semua guru", body: "Semangat ya Bapak, Ibu mengajarnya. Terima kasih sudah jadi guru yang terhebat, menginspirasi kami. Seneng rasanya bisa diajar oleh Bapak dan Ibu guru, sehat-sehat ya Pak/Bu." },

/* ===== Baris 22 ===== */
{ to: "Semua guru", body: "Deg-degan si." },
{ to: "Semua guru", body: "Saya harap Ibu selalu jadi guru yang berdedikasi tinggi dalam mengajar." },
{ to: "Semua guru", body: "Terima kasih banyak sudah mau mengajar dan memberi arahan kepada kami semua Bapak dan Ibu guru." },

/* ===== Baris 23 ===== */
{ to: "Semua guru", body: "Deg-degan, takut galak." },
{ to: "Semua guru", body: "Semoga sehat selalu dan lebih semangat, lebih sabar lagi dalam mengajar." },
{ to: "Semua guru", body: "Lebih semangat lagi untuk mengajar." },

/* ===== Baris 24 ===== */
{ to: "Semua guru", body: "Kaget, tapi suka karena guru nya profesional dan sesuai bidangnya." },
{ to: "Pak Armys", body: "Pak Armys sehat-sehat, kita masih mau denger cerita pengalaman Bapak yang unik-unik." },
{ to: "Semua guru", body: "Sehat selalu dan terus berkarya!" },

/* ===== Baris 25 ===== */
{ to: "Semua guru", body: "Seru, tapi kalo tugasnya banyak cape." },
{ to: "Semua guru", body: "Sehat-sehat Bapak/Ibu." },
{ to: "Semua guru", body: "Guru, engkaulah cahaya bagi kami yang masih mencari jalan masa depan kami. Guru adalah pahlawan tanpa tanda jasa, we love you." },

/* ===== Baris 26 ===== */
{ to: "Semua guru", body: "Ramah-ramah loh guru akumah." },
{ to: "Bu Indri", body: "Sehat-sehat Bu Indri, guru baik, semangat terus gym-nya ibuk." },
{ to: "Semua guru", body: "Semoga setiap hari mood guru bagus dan semoga sabar-sabar ngadepin murid-muridnya terutama acu, i love you ibuk-ibuk yang selalu baik sama acu." },

/* ===== Baris 27 ===== */
{ to: "Semua guru", body: "Awalnya pas saya kelas 10 rasanya tegang dan deg-degan, saya kira guru nya galak-galak dan jutek tapi ternyata guru nya baik dan ramah poll kadang juga bisa dijadiin inspiratif saya." },
{ to: "Semua guru", body: "Terima kasih atas segala kesabaran dan ketulusan Bapak dan Ibu dalam membimbing saya. Ilmu dan teladan yang Bapak dan Ibu berikan akan selalu menjadi bekal berharga dalam hidup saya." },
{ to: "Semua guru", body: "Terima kasih telah menjadi cahaya dan penuntun arah di masa-masa sulit belajar. Semoga Bapak dan Ibu selalu diberikan kesehatan dan kebahagiaan." },

/* ===== Baris 28 ===== */
{ to: "Semua guru", body: "Seru, kalau mengajar tidak membosankan apalagi dibarengi dengan cerita." },
{ to: "Semua guru", body: "Terima kasih sudah selalu percaya pada saya, bahkan ketika saya sendiri ragu dengan kemampuan saya." },
{ to: "Semua guru", body: "Semoga setiap huruf, angka, dan nilai kebaikan yang Ibu/Bapak ajarkan menjadi ladang pahala serta amal jariyah yang tidak pernah terputus alirannya." },

/* ===== Baris 29 ===== */
{ to: "Semua guru", body: "Menyenangkan dan mudah dipahami ketika mengajar." },
{ to: "Semua guru", body: "Semoga Bapak/Ibu sehat selalu." },
{ to: "Semua guru", body: "Untuk semua guru yang ada di SMKN 2 Cikarang Barat semoga sehat selalu, bimbing kita terus supaya menjadi orang sukses." },

/* ===== Baris 30 ===== */
{ to: "Semua guru", body: "Seru, banyak bercandanya, jadi di setiap pelajaran ga terlalu tegang, ada juga si yang ngeselin, tapi itu normal lah, ga semuanya berpendapat yang sama." },
{ to: "Semua guru", body: "Terima kasih Ibu udah mau ngajar dengan cara yang seru dan ga ngebosenin, dan di beberapa guru ada game-nya tersendiri, game-nya juga isinya tugas buat nambah nilai, jadi membangun pola pikir yang aktif buat kita, biar ga bengong aja." },
{ to: "Semua guru", body: "Soal ramah setiap guru berbeda cara nunjukinnya, tapi menurut saya semua guru itu ramah dengan caranya sendiri, dan cara ngajarnya juga berbeda-beda, tugasnya juga berbeda-beda ada yang banyak banget ada yang dikit ada juga yang ga dikit ga banyak, terima kasih buat semua guru yang ngajar di SMKN, sehat-sehat bu/pa." },

/* ===== Baris 31 ===== */
{ to: "Pak Depana", body: "First impression ke Pak Depana: nyebelin banget, receh, ngeselin. Kirain bakal jadi guru paling nyebelin, ternyata emang beneran nyebelin, tapi seru banget." },
{ to: "Bu Nining", body: "Untuk Bu Nining, makasih ya Bu udah sabar ngajarin aku, ya walaupun pelajarannya bikin aku pusing tujuh keliling dan suara Ibu yang bikin ngantuk hehehe jadi sering ketiduran, tapi aku suka banget belajar sama Bu Nining." },
{ to: "Semua guru", body: "Buat semua guru, makasih ya udah ngajarin aku sejauh ini. Maaf kalau aku sering bikin repot dan kadang nyebelin. Semoga Bapak Ibu sehat terus dan selalu sabar ngadepin murid-murid kayak aku." },

/* ===== Baris 32 ===== */
{ to: "Semua guru", body: "Terima kasih Bapak/Ibu, sudah sabar menghadapi kami yang kadang susah diatur. Berkat Bapak/Ibu, saya jadi lebih semangat belajar dan lebih berani bermimpi. Jasa Bapak/Ibu tidak akan pernah saya lupakan." },
{ to: "Semua guru", body: "Semoga Bapak/Ibu selalu sehat, panjang umur, dan tetap semangat dalam mengajar kami." },
{ to: "Semua guru", body: "Jangan terlalu sering ngasih PR ya Bu/Pak, hehe. Semoga Bapak/Ibu tetap sabar menghadapi angkatan kami yang super bandel ini." },

/* ===== Baris 33 ===== */
{ to: "Semua guru", body: "Waw gokil seru abis." },
{ to: "Semua guru", body: "Terima kasih telah membimbing kami dengan sabar, memberikan teladan yang baik, serta berbagi pengalaman berharga yang telah Ibu/Bapak lalui." },
{ to: "Semua guru", body: "Setiap pelajaran yang Anda berikan bukan hanya menyiapkan saya untuk ujian, tetapi juga membekali saya untuk perjalanan setelah sekolah. Terima kasih atas semua dedikasi Anda." },

/* ===== Baris 34 ===== */
{ to: "Semua guru", body: "Always good." },
{ to: "Semua guru", body: "Thanks for all, jangan cape buat jadi yang terbaik." },
{ to: "Semua guru", body: "Take care for yourself." },

/* ===== Baris 35 ===== */
{ to: "Semua guru", body: "Awalnya merasa sedikit canggung karena masih beradaptasi, tetapi lama-kelamaan merasa nyaman karena guru-gurunya baik." },
{ to: "Semua guru", body: "Terima kasih Bu sudah selalu membimbing, mengingatkan, dan memberikan banyak nasihat untuk kami, semoga Ibu selalu sehat dan tidak pernah bosan membimbing murid-muridnya." },
{ to: "Semua guru", body: "Terima kasih atas ilmu dan bimbingannya selama ini, semoga Bapak dan Ibu guru selalu diberikan kesehatan dan kebahagiaan." },

/* ===== Baris 36 ===== */
{ to: "Semua guru", body: "Seru." },
{ to: "Miss Tyas", body: "Semoga dimudahkan rezeki and selalu sehat Miss Tyas tercinta." },
{ to: "Semua guru", body: "Semangat buat guru-guru SMKN 2 Cikarang Barat." },

/* ===== Baris 37 ===== */
{ to: "Semua guru", body: "Seruuu." },
{ to: "Semua guru", body: "Sehat-sehat selalu Ibu." },
{ to: "Semua guru", body: "Sehat-sehat selalu Ibu dan Bapak, terima kasih sudah memberi ilmu yang sangat melimpah." },

/* ===== Baris 38 ===== */
{ to: "Semua guru", body: "Beragam macam jadi bercampuran si first impression-nya, overall ada yang seru banget, enjoy gitu beberapa guru hehe, tapi ada juga yang sekedar oke, cuman semuanya tetap ngasih yang terbaik untuk murid SMKN 2 Cikarang Barat. Sehat selalu Ibu Bapak!" },
{ to: "Bu Shelly", body: "Sehat-sehat selalu Ibu dan Bapak guru, terima kasih atas jasa yang Ibu dan Bapak guru berikan pada Dena dan kita semua, jaga kesehatan ya Bu, Pak, semangat terus ngajarnya! Y'all best teacher. Terutama terima kasih juga untuk Bu Shelly karena beliau sudah menemani XII DKV 3 sejak Dena dan teman-teman XII DKV 3 masih kelas 10, terima kasih atas kesabarannya Ibu, terima kasih atas semua ilmu yang sudah Ibu salurkan kepada kami, terima kasih karena selalu membimbing kami, semoga Bu Shelly dan guru-guru di sekolah selalu dalam lindungan Allah SWT dan selalu sehat dalam menjalankan hari-harinya." },
{ to: "Semua guru", body: "Sehat-sehat selalu Ibu dan Bapak guru, terima kasih atas jasa yang Ibu dan Bapak guru berikan pada Dena dan kami semua, jaga kesehatan ya Bu, Pak, semangat terus ngajarnya! Doakan Dena ya Ibu, Bapak, Dena juga selalu doain Ibu dan Bapak guru semuanya." },

/* ===== Baris 39 ===== */
{ to: "Semua guru", body: "Gugup sama takut tapi seru kok." },
{ to: "Miss Tyas", body: "Miss Tyas, i wanna say thank you so much buat semuanya, cara Miss Tyas ngajar itu bener-bener seru dan asik banget terus materinya juga gampang dipahami, pengen diajar Miss lagi." },
{ to: "Semua guru", body: "Untuk semua guru kalian benar-benar hebat." },

/* ===== Baris 40 ===== */
{ to: "Semua guru", body: "Termotivasi dan inspirasional." },
{ to: "Semua guru", body: "Sehat terus Pak/Bu, pelajaran dan nasihat Bapak/Ibu akan kami kenang hingga kehidupan kedua telah kami sambangi." },
{ to: "Semua guru", body: "Aku bagai gulita yang tersesat dalam rimba sunyi, dan kalian adalah petromaknya. Benderang, menuntunku keluar menjelajahi alas keingintahuan, membawaku ke puncak gunung pengetahuan. Maka izinkan aku berhutang jasa pada kalian, karena tanpa bimbingan, karena tanpa kasih sayang, karena tanpa ajaran, aku bagai kerbau tanpa tambang. ~Sajak Hari Guru, ALi al Karim — 17 Nov 2026." },

/* ===== Baris 41 ===== */
{ to: "Pak Kardi", body: "Pak Kardi hebat." },
{ to: "Pak Kardi", body: "Pak Kardi keren." },
{ to: "Pak Kardi", body: "Pak Kardi." },

/* ===== Baris 42 ===== */
{ to: "Semua guru", body: "Seru." },
{ to: "Bu Ipah", body: "Saya kira Bu Ipah galak karena di awal udah marah-marah, ternyata baik bahkan lebih baik dari yang saya kira. Untuk Bu Ipah teruslah menjadi orang baik untuk semua orang agar amal ibadah Bu Ipah terus mengalir dan untuk Bu Ipah terima kasih banyak sudah mau menerima murid bandel kayak saya, terima kasih sudah mau sabar sama sikap saya, dan terima kasih banyak sudah mau membantu saya, saya tidak akan pernah melupakan semua jasa dan kebaikan Ibu ke saya. Inshaallah Bu saya akan menjadi orang sukses di masa depan nanti, jangan pernah cape ya Bu sama saya, saya pengen selalu diajar sama Ibu." },
{ to: "Semua guru", body: "Teruslah menjadi guru yang terbaik untuk SMKN 2, untuk guru kesiswaan tolong berikan duit kepada anak-anak yang sedang bertanding terutama kepada anak-anak silat SMKN 2, kemaren official-nya kaga dikasih duit dari sekolahan sampe makan cuman 3 hari 2x doang, lain kali dipantau anak-anak yang sedang mengejar prestasi, kalo begini kan anak-anak silat jadi males buat ikut event selanjutnya." },

/* ===== Baris 43 ===== */
{ to: "Semua guru", body: "Seru, asik." },
{ to: "Bu Bekti", body: "Buat Bu Bekti terima kasih udah sabar ngajar dan menjadi walas yang baik, kasih motivasi ke anak-anak didiknya agar terus mau belajar. Proud of you ibok." },
{ to: "Semua guru", body: "Terima kasih udah sabar ngajar dan menjadi walas yang baik, kasih motivasi ke anak-anak didiknya agar terus mau belajar. Proud of you ibok." },

/* ===== Baris 44 ===== */
{ to: "Semua guru", body: "First impression waktu pertama kali diajar sama guru-guru SMKN 2 Cikarang Barat tuh bener-bener di luar ekspektasi. Awalnya ngerasa ciut karena suasananya beda banget sama waktu SMP, ditambah harus adaptasi sama lingkungan sekolah kejuruan yang disiplin. Tapi seiring berjalannya waktu, kesan pertama yang tadinya bikin deg-degan itu berubah jadi rasa kagum. Di balik ketegasan mereka pas lagi ngajar atau ngasih arahan, terselip kepedulian yang tulus supaya siswanya bisa siap kerja, berkarya, dan jadi orang sukses. Nggak nyesel bisa jadi bagian dari sekolah ini." },
{ to: "Bu Shelly", body: "Teruntuk Bu Shelly, terima kasih banyak ya Bu sudah jadi sosok guru sekaligus tempat pulang yang nyaman di sekolah. Makasih atas kesabarannya ngadepin tingkah kami, nasihat-nasihat hangatnya, dan cara ngajarnya yang selalu bikin betah di kelas. Sehat dan bahagia selalu ya Bu, semoga kebaikan Ibu dibalas berlipat-lipat ganda. Selamat Hari Guru!" },
{ to: "Semua guru", body: "Terima kasih yang tak terhingga kepada Bapak dan Ibu Guru sekalian atas kesabaran, ketulusan, dan ilmu yang telah diberikan selama ini. Menjadi bagian dari SMK Negeri 2 Cikarang Barat adalah sebuah perjalanan berharga karena bimbingan luar biasa dari guru-guru hebat. Semoga setiap ilmu yang disalurkan menjadi amal jariyah dan membawa keberkahan. Selamat Hari Guru Nasional!" },

/* ===== Baris 45 ===== */
{ to: "Pak Wigandi", body: "Pak Wigandi." },
{ to: "Semua guru", body: "Ungkapan terima kasih atas kesabaran, ketulusan, dan dedikasi dalam membimbing kita melampaui batas ruang kelas." },
{ to: "Semua guru", body: "Terima kasih kepada seluruh Bapak dan Ibu Guru di mana pun berada atas kesabaran, keikhlasan, dan dedikasi tanpa lelah dalam membimbing serta mencerdaskan generasi bangsa." },

/* ===== Baris 46 ===== */
{ to: "Pak Depana", body: "Pak Depana." },
{ to: "Semua guru", body: "Terima kasih sudah menjadi guru terbaik bagi kami. Terima kasih atas ilmu, kesabaran, dan semua nasihat yang telah diberikan selama kami di SMK. Maaf jika selama ini kami sering membuat Bapak/Ibu kesal. Semoga Bapak/Ibu selalu sehat dan bahagia. Jasa dan kebaikan Bapak/Ibu akan selalu kami kenang." },
{ to: "Semua guru", body: "Untuk semua guru yang telah membimbing kami, terima kasih atas ilmu, kesabaran, dan segala nasihat yang telah diberikan. Maaf jika selama ini kami sering membuat Bapak/Ibu kesal atau kecewa. Semoga semua kebaikan Bapak/Ibu dibalas dengan kebahagiaan dan kesehatan. Terima kasih sudah menjadi bagian dari perjalanan kami selama di SMK." },

/* ===== Baris 47 ===== */
{ to: "Semua guru", body: "Seruuu bangatt." },
{ to: "Semua guru", body: "Semangat." },
{ to: "Semua guru", body: "Terus semangat." },

/* ===== Baris 48 ===== */
{ to: "Semua guru", body: "Gurunya ramah-ramah." },
{ to: "Bu Putri Yustika", body: "Terima kasih Ibu Putri Yustika untuk segala ilmu yang telah diberikan kepada kami dan terima kasih sudah selalu sabar menghadapi kami, we love u." },
{ to: "Semua guru", body: "Terima kasih kepada seluruh guru di SMK Negeri 2 Cikarang Barat atas segala ilmu yang telah diberikan." },

/* ===== Baris 49 ===== */
{ to: "Bu Indry, Bu Geby, Bu Selvi, Bu Yuli", body: "Bu Indry, Bu Geby, Bu Selvi, Bu Yuli." },
{ to: "Semua guru", body: "Makasih paa Bu semua nya guru terbaik saya." },
{ to: "Semua guru", body: "Guru nya hebat, baik dan ramah, saya suka, terima kasih banyak Bu sudah mau mengajarkan kami dengan sepenuh hati." },

/* ===== Baris 50 ===== */
{ to: "Semua guru", body: "Menyenangkan, kreatif, tegas." },
{ to: "Semua guru", body: "Semangat terus Ibu ngejalanin hari-harinya." },
{ to: "Semua guru", body: "Semangat Bapak/Ibu guru." },

/* ===== Baris 51 ===== */
{ to: "Semua guru", body: "So far so good, banyak pembelajaran yang belum saya paham bahkan belum saya tahu saat saya berada di sekolah SMP saya." },
{ to: "Pak Jay", body: "Dear Bapak Kusuma Jaya S.Pd (aka Pak Jay), selama belajar bersama Pak Jay, saya mendapatkan banyak ilmu dan pengetahuan. Cara mengajar Bapak membuat saya lebih memahami dunia desain dan menjadi lebih tertarik untuk mengembangkan kreativitas. Pesan dari saya, semoga Pak Jay selalu sabar dalam membimbing dan mengajar saya dan teman-teman semua. Terima kasih atas ilmu, pengalaman, dan arahan yang telah diberikan. Semoga Bapak selalu sehat dan sukses." },
{ to: "Semua guru", body: "Terima kasih kepada seluruh Bapak dan Ibu guru atas kesabaran, ilmu, dan bimbingan yang telah diberikan kepada kami. Mohon maaf apabila selama proses belajar kami masih sering melakukan kesalahan. Semoga Bapak dan Ibu guru selalu diberikan kesehatan, kesabaran, dan kebahagiaan dalam mendidik generasi berikutnya." },

/* ===== Baris 52 ===== */
{ to: "Semua guru", body: "Takut." },
{ to: "Semua guru", body: "Sehat selalu Bapak Ibu." },
{ to: "Semua guru", body: "Terima kasih atas ilmu yang telah diberikan kepada anak murid." },

/* ===== Baris 53 ===== */
{ to: "Semua guru", body: "Seneng dan seru banget." },
{ to: "Pak Dahlan", body: "Makasih ya Pak Dahlan, Bapak sering kasih saya saran, sharing pengalaman dan menginspirasi saya." },
{ to: "Semua guru", body: "Semangat pahlawan pendidikan." },

/* ===== Baris 54 ===== */
{ to: "Semua guru", body: "Awalnya aku kira bakal galak dan serem banget, ternyata pas udah diajarin malah asik dan sabar. Cara ngajarnya gampang dimengerti, jadi yang awalnya takut malah jadi semangat buat belajar." },
{ to: "Semua guru", body: "Terima kasih Bu/Pak udah sabar banget ngajarin aku dari yang belum ngerti apa-apa sampe bisa. Maaf ya kalau aku sering bikin pusing di kelas, tapi berkat Bapak/Ibu aku jadi lebih semangat dan percaya diri. Sehat selalu ya, semoga Bapak/Ibu selalu bahagia!" },
{ to: "Semua guru", body: "Terima kasih untuk semua guru SMKN 2 Cikarang Barat yang udah sabar ngajarin kami, yang udah jadi orang tua kedua di sekolah. Semoga semua guru selalu diberi kesehatan, kesabaran, dan kebahagiaan. Kami bangga jadi murid Bapak/Ibu!" },

/* ===== Baris 55 ===== */
{ to: "Semua guru", body: "Awalnya agak takut sama canggung sih karena belum kenal, tapi ternyata enggak, gurunya asik, enak belajarnya." },
{ to: "Semua guru", body: "Pokoknya buat guru yang terbaik versi aku selalu sehat, bahagia dan dilimpahkan banyak rezekinya. Pokoknya love you udah membimbing aku selama ini dan pastinya banyak doa baik dariku untuk kalian semua." },
{ to: "Semua guru", body: "Untuk semua guru pengkolan aku harap selalu sehat dan bahagia, selalu mendukung dan merangkul semua muridnya tanpa kecuali dan selalu menjadi orang tua dan contoh yang baik di sekolah." },

/* ===== Baris 56 ===== */
{ to: "Semua guru", body: "Guru nya keren-keren, humble, hebat, semangat! Suka banget, fun saat waktunya, serius pada waktunya. Pokoknya beda banget sama pas SMP." },
{ to: "Pak Yogi", body: "Untuk Bapak Yogi, guru kesiswaan dan juga pembina KSB. Saya bersyukur ketemu Bapak, Bapak merubah cara pandang saya dan membuat saya lebih percaya diri, dulu saya nggak bakal pernah kepikiran untuk mengikuti kata hati saya. Tapi semenjak masuk KSB, saya bisa menjadi diri saya sendiri, saya dihargai, dan saya punya banyak teman. Tanpa KSB atau Bapak mungkin saya nggak bakal bisa jadi diri saya sendiri. Terima kasih Bapak, semoga Bapak sehat selalu, panjang umur, dilancarkan rezekinya, semakin bahagia, dan tidak pernah bersedih." },
{ to: "Semua guru", body: "Terima kasih untuk semua guru SMKN 2 Cikarang Barat, yang pernah mengajar saya maupun yang belum pernah. Kalian adalah orang dengan jasa yang tidak akan terbalas, kalian adalah orang dengan dedikasi tinggi. Saya bersyukur dengan kehadiran guru-guru di SMKN 2 Cikarang Barat. Terima kasih untuk semuanya, saya bukan seseorang yang pandai berbicara atau merangkai kata-kata, tapi semoga pesan ini membuat guru-guru bahagia. I LOVE ALL THE TEACHERS AT SMKN 2 CIKARANG BARAT!" },

/* ===== Baris 57 ===== */
{ to: "Pak Armys", body: "Pak Armys." },
{ to: "Bu Ica, Miss Astri, Pak Jay", body: "Buat Bu Ica, Miss Astri, Pak Jay, sehat-sehat ya kalian. Kalian tu best, ga bikin boring. Bu Ica yang setiap ngejelasin materi pasti enak banget didenger dan detail, begitupun juga Miss Astri yang tahap pemberian tugasnya sesuai, selalu ada kesempatan buat kita biar bisa maju ke depan ngejawab soal (fav banget si bagian ini), dan Pak Jay yang setiap ngasi tugas pasti seru-seru kayak foto dan ngegambar ehehehe." },
{ to: "Semua guru", body: "Buat semua Bapak/Ibu guru, walaupun saya tidak mengenal keseluruhan guru yang ada di SMK ini, tapi saya yakin kalau kalian adalah guru-guru terbaik yang bisa sepenuhnya membimbing murid tanpa tanda jasa, sehat-sehat ya kalian, terima kasih atas seluruh pelajaran berharga yang kalian beri kepada kami, rasa gamood, lelah, cape, mungkin kecewa, itu semua kalian tahan demi masuk ke jam pelajaran dan mengajar kami. Ih sedih ahh udah, makasih." },

/* ===== Baris 58 ===== */
{ to: "Bu Ipah", body: "Buat Bu Ipah, jujur ya Bu, pertama kali diajar Ibu, aku kira Ibu itu orangnya tegas banget dan agak galak. Soalnya dari cara Ibu ngomong tuh keliatan berwibawa banget. Tapi ternyata setelah beberapa kali belajar bareng Ibu, kesan itu langsung hilang. Ibu itu ternyata orangnya baik banget, sabar, lembut, dan enak banget diajak ngobrol. Cara Ibu ngejelasin tuh gampang dimengerti, bikin aku yang tadinya takut jadi malah semangat belajar. Sekarang kalau inget pertama kali diajar Ibu, aku malah senyum sendiri. Ternyata first impression itu salah, Ibu itu guru yang paling baik dan paling berkesan buat aku." },
{ to: "Pak Marbani", body: "Buat Pak Marbani, walikelas saya. Selamat Hari Guru, Pak Marbani. Terima kasih karena Bapak sudah menjadi guru yang hebat, sabar, dan luar biasa untuk saya. Pak Marbani bukan hanya mengajari saya pelajaran, tapi juga mengajari saya bagaimana menjadi orang yang kuat, disiplin, bertanggung jawab, dan tidak mudah menyerah. Setiap nasihat Bapak, setiap cerita Bapak, semua itu selalu saya ingat. Saya sangat bersyukur bisa menjadi murid Pak Marbani. Bapak adalah sosok guru yang membuat saya merasa dihargai dan didukung. Bapak membuat belajar menjadi lebih menyenangkan, dan membuat saya berani bermimpi lebih besar. Di Hari Guru ini, saya berdoa semoga Pak Marbani selalu diberikan kesehatan, kebahagiaan, rezeki yang lancar, dan umur yang panjang. Semoga semua ilmu yang Bapak ajarkan menjadi amal yang tidak pernah putus dan menjadi bekal untuk saya di masa depan. Selamat Hari Guru, Pak Marbani. Bapak adalah pahlawan tanpa tanda jasa. Terima kasih sudah menjadi cahaya dan panutan untuk saya. Saya akan selalu hormat dan bangga menjadi murid Pak Marbani." },
{ to: "Semua guru", body: "Jujur, pertama kali diajar sama Bapak/Ibu Guru, aku kira Bapak/Ibu itu orangnya tegas banget dan agak galak. Soalnya cara ngajarnya keliatan berwibawa banget. Tapi ternyata setelah beberapa kali belajar bareng, kesan itu langsung hilang. Bapak/Ibu Guru ternyata orangnya baik banget, sabar, asik, dan enak banget diajak ngobrol. Cara ngejelasinnya tuh gampang dimengerti, bikin aku yang tadinya takut jadi malah semangat belajar. Sekarang kalau inget pertama kali diajar, aku malah senyum sendiri. Ternyata first impression itu salah. Bapak/Ibu Guru itu guru yang paling baik dan paling berkesan buat aku. Terima kasih ya Bapak/Ibu Guru, sudah sabar ngajarin aku. Semoga Bapak/Ibu selalu sehat dan bahagia. Selamat Hari Guru." },

/* ===== Baris 59 ===== */
{ to: "Semua guru", body: "Cape ga kuat mau nangis." },
{ to: "Semua guru", body: "Lope-lope pokoknya." },
{ to: "Semua guru", body: "Tugasnya jangan banyak-banyak, agit pusing." },

/* ===== Baris 60 ===== */
{ to: "Semua guru", body: "Biasa saja." },
{ to: "Semua guru", body: "Jangan pernah lelah menjadi sosok pahlawan tanpa tanda jasa bagi generasi berikutnya. Terima kasih untuk setiap nasihat dan ketulusannya!" },
{ to: "Semua guru", body: "Terima kasih sudah membuat setiap pelajaran terasa lebih berarti, seru, dan mudah dipahami." },

/* ===== Baris 61 ===== */
{ to: "Miss Astri", body: "Miss Astri." },
{ to: "Semua guru", body: "Ibu/Bapak Guru, terima kasih sudah sabar membimbing kami, mengajarkan banyak ilmu, dan selalu mendoakan kami. Semoga Ibu/Bapak Guru selalu sehat, bahagia, dan segala kebaikan Ibu/Bapak dibalas oleh Tuhan. Kami akan berusaha menjadi murid yang baik." },
{ to: "Semua guru", body: "Terima kasih Ibu/Bapak Guru, atas semua kesabaran dan ilmunya. Semoga selalu diberi kesehatan, rezeki yang lancar, dan kebahagiaan setiap hari. Kami sayang Ibu/Bapak Guru." },

/* ===== Baris 62 ===== */
{ to: "Semua guru", body: "Selama Bapak/Ibu mengajar di sekolah ini, saya merasa sangat senang. Cara Bapak/Ibu menjelaskan materi sangat jelas dan mudah dipahami, sehingga membuat saya lebih termotivasi untuk belajar." },
{ to: "Semua guru", body: "Jangan pernah lelah mendidik kami ya, Bapak dan Ibu. Maafkan jika selama ini kami sering membuat kesalahan. Semoga kebaikan Bapak/Ibu selalu dibalas dan sukses terus ke depannya!" },
{ to: "Semua guru", body: "Semoga Bapak/Ibu selalu diberikan kesehatan dan kekuatan untuk terus menuntun serta menginspirasi murid-murid lainnya. Terima kasih atas setiap ilmu dan kesabaran yang telah diberikan." },

/* ===== Baris 63 ===== */
{ to: "Semua guru", body: "Tegas namun bertanggung jawab." },
{ to: "Semua guru", body: "Tetap semangat." },
{ to: "Semua guru", body: "Semangat guru-guru SMKN 2 Cikarang Barat #dariagit." },

/* ===== Baris 64 ===== */
{ to: "Bu Bekti, Bu Diarti, Bu Putri", body: "Guru-guru MP, I love you so much, aku sayang Bu Bekti, Bu Diarti, Bu Putri dan lainnya yang gak bisa aku sebutkan tapi aku sayang MP, sayang banget." },
{ to: "Semua guru", body: "I love you Bapak Ibu guru MP, semoga kita bisa umroh bareng, dosanya di-reset admin dan kita bisa selalu bahagia." },
{ to: "Semua guru", body: "Semoga jasa Bapak dan Ibu guru bisa menjadi suri tauladan untuk kami para generasi penerus, semangat terus Pak, Bu." },

/* ===== Baris 65 ===== */
{ to: "Semua guru", body: "Menegangkan dan takut salah berbicara." },
{ to: "Semua guru", body: "Yey semangat terus ya Bapak dan Ibu." },
{ to: "Semua guru", body: "Sehat selalu ya Bapak dan Ibu guru." },

/* ===== Baris 66 ===== */
{ to: "Semua guru", body: "WOW banget. Kirain Ibu/Bapak guru di SMKN 2 akan galak-galak, tetapi ASIK BANGET, banyak Ibu guru yang cantik dan ramah, dan Bapak guru yang ganteng dan pastinya juga asik banget." },
{ to: "Bu Shelvy Putri Astuti", body: "Teruntuk Bu Shelvy Putri Astuti, semoga kelak saya bisa seperti Ibu. Ibu hebat banget, cara mengajarnya sangat membuat saya cepat tangkap, saya suka Ibu, Ibu keren pokoknya, Ibu sudah menjadi salah satu inspirasi bagi saya. Sehat-sehat Ibu Shelvy." },
{ to: "Semua guru", body: "Haloo Ibu, haloo Bapak, teruntuk seluruh guru di SMKN 2, mungkin mengajar adalah sebuah profesi yang mudah kelihatannya. Namun mengajar bukanlah sebatas pelajaran, tetapi Ibu/Bapak juga mengajarkan kami akhlak, sopan santun, tata krama, kesabaran, kedisiplinan, tanggung jawab, dan lain sebagainya. Jasa Ibu/Bapak tidak akan bisa kami balas, semua ilmu yang telah Ibu/Bapak berikan tiada habisnya untuk kami, selamanya akan kami ingat dan abadikan dalam setiap langkah kami Bu/Pak. Terima kasih banyak Ibu/Bapak sudah menjadi guru-guru yang HEBAT. -Nada X AKL 1" },

/* ===== Baris 67 ===== */
{ to: "Semua guru", body: "Jujur seru banget ya, kayak lucu-lucu gurunya, ramah, baik, pokoknya seru deh apalagi Pak Depana beliau tuh kalo udah ketawa nyamber ke semua." },
{ to: "Semua guru", body: "Guru terbaik menurut saya semuanya, karena semua guru pengkolan terbaik, pesannya tetap jadi guru yang ramah dan murah senyum ya Ibu/Bapak guru." },
{ to: "Semua guru", body: "Makasih Bapak/Ibu guru yang sudah sabar ngajar anak murid yang bandelnya udah kayak apaan tau." },

/* ===== Baris 68 ===== */
{ to: "Semua guru", body: "Asik." },
{ to: "Semua guru", body: "Semoga selalu dilancarkan dalam setiap langkahnya." },
{ to: "Semua guru", body: "Sayang Bapak/Ibu guru." },

/* ===== Baris 69 ===== */
{ to: "Semua guru", body: "Okelah." },
{ to: "Semua guru", body: "Semoga ketulusan, niat, serta ilmu yang diberikan membawakan hal-hal baik ke dalam hidup Ibu sendiri. Beliau bener-bener baik." },
{ to: "Semua guru", body: "Terima kasih." },

/* ===== Baris 70 ===== */
{ to: "Bu Bekti", body: "Sayang Bu Bekti." },
{ to: "Bu Bekti", body: "Bu Bekti." },
{ to: "Semua guru", body: "Ramah selalu." },

/* ===== Baris 71 ===== */
{ to: "Semua guru", body: "Takut tapi lama-lama biasa aja." },
{ to: "Semua guru", body: "Sukses selalu." },
{ to: "Semua guru", body: "Sukses terus, sehat selalu, semoga ilmu dan segala hal yang telah diajarkan menjadi ladang pahala, aamiin ya rabbal 'alamin." },

/* ===== Baris 72 ===== */
{ to: "Semua guru", body: "Menyenangkan." },
{ to: "Semua guru", body: "Ibu tetap semangat dan sehat selalu." },
{ to: "Semua guru", body: "Semangat buat semua guru, semangat, i love u." },

/* ===== Baris 73 ===== */
{ to: "Semua guru", body: "Seru, baik-baik, pokoknya best banget." },
{ to: "Bu Bekti", body: "Buat Bu Bekti, ku sayang banget sama Ibu hehehehe, sehat terus ibuk." },
{ to: "Semua guru", body: "Sehat selalu, semoga ilmu yang diberikan kepada kita semua bermanfaat selalu." },

/* ===== Baris 74 ===== */
{ to: "Bu Bekti", body: "Love you Bu Bekti." },
{ to: "Bu Bekti", body: "Bu Bekti." },
{ to: "Semua guru", body: "Semoga sehat selalu." },

/* ===== Baris 75 ===== */
{ to: "Semua guru", body: "Kaget, kayak terkejut terus seru terus juga ada menegangkannya karena suka angry-angry." },
{ to: "Semua guru", body: "Sehat selalu, panjang umur, semoga makin soft spoken." },
{ to: "Semua guru", body: "Jan galak-galak, aku takut." },

/* ===== Baris 76 ===== */
{ to: "Semua guru", body: "Seru." },
{ to: "Bu Bekti", body: "Ibu Bekti, terima kasih udah sabar banget ngadepin murid kayak aku, love you Ibu." },
{ to: "Semua guru", body: "Love you banyak-banyak pokoknya." },

/* ===== Baris 77 ===== */
{ to: "Semua guru", body: "Baik." },
{ to: "Semua guru", body: "Baik-baik." },
{ to: "Semua guru", body: "Yang baik ya." },

/* ===== Baris 78 ===== */
{ to: "Semua guru", body: "Bahagia, bisa serius bisa bercanda." },
{ to: "Semua guru", body: "Tetap semangat." },
{ to: "Semua guru", body: "Terima kasih udah ngajar kami semua." },

/* ===== Baris 79 ===== */
{ to: "Semua guru", body: "Senang, suka, seruuuuuuuuuuuuuw." },
{ to: "Semua guru", body: "Sehat selalu, dilancarkan segala gala galanya (bukan lagu tapi)." },
{ to: "Semua guru", body: "Sehat selalu, dibalas jasanya dengan kebaikan yang melimpah." },

/* ===== Baris 80 ===== */
{ to: "Semua guru", body: "Seru, senang." },
{ to: "Semua guru", body: "Semoga panjang umur sehat selalu." },
{ to: "Semua guru", body: "Semoga jasanya dibalas dengan kebaikan." },

/* ===== Baris 81 ===== */
{ to: "Semua guru", body: "Ramah semua, suka." },
{ to: "Semua guru", body: "Selamat hari guru Ibu, terima kasih ya sudah membimbing kami yang susah diatur ini, terima kasih atas jasa-jasa yang Ibu berikan." },
{ to: "Semua guru", body: "Selamat hari guru Bapak/Ibu, terima kasih atas jasa-jasanya, tidak akan kami lupakan, maaf kalau kami susah diatur, terima kasih." },

/* ===== Baris 82 ===== */
{ to: "Semua guru", body: "Seru dan senang." },
{ to: "Semua guru", body: "Sehat selalu, dan terus ngajar kita." },
{ to: "Semua guru", body: "Sehat selalu, berkah rezekinya Ibu." },

/* ===== Baris 83 ===== */
{ to: "Semua guru", body: "Baik dan asik." },
{ to: "Semua guru", body: "Sehat selalu, panjang umur, segala usaha dipermudah." },
{ to: "Semua guru", body: "Terima kasih sudah sabar dalam mengajar kami, sehat selalu Ibu/Bapak guru, rezekinya melimpah." },

/* ===== Baris 84 ===== */
{ to: "Semua guru", body: "Waktu awal ketemu atau diajar keliatan galak, tapi aslinya tidak, sangat amat baik." },
{ to: "Semua guru", body: "Terus menjadi guru yang ramah, baik, dan welcome kepada siswa/i SMKN 2 Cikarang Barat." },
{ to: "Semua guru", body: "Terima kasih Ibu/Bapak guru SMKN 2 Cikarang Barat, selamat hari guru!" },

/* ===== Baris 85 ===== */
{ to: "Semua guru", body: "Happy banget pokoknya." },
{ to: "Miss Dyass", body: "Semua guru baik tidak ada yang tidak baik, tapi guru yang paling saya suka Miss Dyass." },
{ to: "Semua guru", body: "Semoga panjang umur sehat selalu, makin lancar rezekinya, aamiin." },

/* ===== Baris 86 ===== */
{ to: "Semua guru", body: "Baik." },
{ to: "Semua guru", body: "Sehat selalu, terima kasih sudah ngajar kami dengan baik dan semoga rezekinya dilimpahkan." },
{ to: "Semua guru", body: "Semoga diberikan rezeki yang melimpah dan sehat selalu." },

/* ===== Baris 87 ===== */
{ to: "Bu Bekti", body: "Bu Bekti." },
{ to: "Semua guru", body: "Terima kasih atas ilmu, kesabaran, dan bimbingan yang telah Bapak/Ibu berikan. Semoga selalu sehat, bahagia, dan diberikan keberkahan dalam setiap langkah." },
{ to: "Semua guru", body: "Terima kasih kepada seluruh guru atas ilmu, kesabaran, dan dedikasi yang telah diberikan. Semoga setiap kebaikan yang Bapak/Ibu ajarkan menjadi berkah dan selalu dikenang oleh murid-murid." },

/* ===== Baris 88 ===== */
{ to: "Semua guru", body: "Seru, senang." },
{ to: "Semua guru", body: "Sehat selalu, dan terima kasih sudah menjadi guru yang terbaik." },
{ to: "Semua guru", body: "Terima kasih banyak sudah membimbing kita semua dengan baik, dan penuh kesabaran, sehat selalu untuk Bapak/Ibu guru semuanya." },

/* ===== Baris 89 ===== */
{ to: "Semua guru", body: "Kesan pertama saya diajar oleh guru SMKN 2 Cikarang Barat adalah beliau terlihat ramah, sabar, disiplin, dan mampu menyampaikan materi dengan jelas sehingga pembelajaran terasa nyaman, menyenangkan, dan mudah dipahami." },
{ to: "Semua guru", body: "Terima kasih telah menjadi guru yang sabar, baik, dan selalu memberikan ilmu serta motivasi kepada kami. Semoga Bapak/Ibu selalu sehat, bahagia, dan diberikan kelancaran dalam mendidik generasi penerus bangsa. Jangan pernah lelah menjadi guru hebat yang menginspirasi." },
{ to: "Semua guru", body: "Terima kasih kepada semua guru yang telah sabar membimbing, mendidik, dan memberikan ilmu kepada kami. Maaf jika selama belajar ada sikap dan perkataan kami yang kurang berkenan. Semoga semua guru selalu diberikan kesehatan, kebahagiaan, dan kesabaran. Jasa dan ilmu yang telah diberikan akan selalu kami ingat." },

/* ===== Baris 90 ===== */
{ to: "Semua guru", body: "Awalnya merasa sedikit canggung, seiring berjalannya waktu menjadi lebih nyaman. Guru-gurunya baik, ramah." },
{ to: "Semua guru", body: "Terima kasih sudah sabar dalam mengajar, membimbing, dan memberikan ilmu. Semoga selalu diberikan kesehatan, kebahagiaan, dan kesabaran dalam mendidik murid-muridnya." },
{ to: "Semua guru", body: "Terima kasih untuk semua guru yang sudah sabar mengajar dan membimbing kami. Maaf kalau selama ini kami masih sering bikin kesalahan atau terkadang susah diatur. Semoga Bapak dan Ibu guru selalu sehat, bahagia, dan tetap semangat dalam mengajar. Terima kasih sudah memberikan banyak ilmu dan pengalaman untuk kami." },

/* ===== Baris 91 ===== */
{ to: "Semua guru", body: "Awalnya terlihat tegas, tetapi ternyata baik, ramah, dan menyenangkan saat mengajar." },
{ to: "Semua guru", body: "Terima kasih telah sabar membimbing dan memberikan ilmu. Semoga selalu sehat dan semangat dalam mengajar." },
{ to: "Semua guru", body: "Terima kasih kepada semua guru atas ilmu, kesabaran, dan bimbingannya. Semoga selalu sehat dan terus menjadi inspirasi bagi murid-muridnya." },

/* ===== Baris 92 ===== */
{ to: "Semua guru", body: "Pertama kali diajar, terasa ramah, sabar, dan cara ngajarnya gampang dimengerti." },
{ to: "Bu Bekti", body: "Terima kasih Ibu Bekti, sudah sabar membimbing dan selalu menyemangati saya." },
{ to: "Semua guru", body: "Terima kasih untuk semua guru SMKN 2 Cikarang Barat, atas ilmu dan kesabarannya. Semoga sehat selalu." },

/* ===== Baris 93 ===== */
{ to: "Semua guru", body: "-" },
{ to: "Semua guru", body: "-" },
{ to: "Semua guru", body: "-" },

/* ===== Baris 94 ===== */
{ to: "Semua guru", body: "Seru." },
{ to: "Semua guru", body: "Ibu terima kasih banyak sudah memberikan ilmu serta memotivasi kita, semoga Ibu selalu diberikan kesehatan, aamiin." },
{ to: "Semua guru", body: "Semoga Bapak Ibu sehat selalu." },

/* ===== Baris 95 ===== */
{ to: "Semua guru", body: "Seru." },
{ to: "Semua guru", body: "Terima kasih banyak Ibu atas ilmunya." },
{ to: "Semua guru", body: "Terima kasih Bapak Ibu ilmunya." },

/* ===== Baris 96 ===== */
{ to: "Semua guru", body: "Senang, seru, dapat banyak ilmu." },
{ to: "Bu Bekti Ninghati", body: "Untuk Ibu Bekti Ninghati, terima kasih telah bersabar mengajarkan kami, sabar menghadapi berbagai tingkah laku kami, membimbing kami saat kesulitan, dan tidak pernah lelah berbagi ilmu. Semoga Ibu selalu diberikan kesehatan, kebahagiaan, kesabaran serta keberkahan dalam menjalankan tugas mulia ini! Happy Teacher Days untuk Ibu Bekti Ninghati! Many love for u, thank u again!" },
{ to: "Semua guru", body: "Selamat hari guru untuk semua guru! Terima kasih telah sabar mengajarkan dan membimbing kami, setiap ilmu yang diajarkan, setiap nasihat yang disampaikan dan setiap teguran yang diberikan akan menjadi bekal berharga bagi kami untuk melangkah ke masa depan. Maaf apabila selama ini kami sering membuat lelah, kurang memperhatikan atau melakukan kesalahan yang mungkin mengecewakan Bapak dan Ibu. Semoga Bapak dan Ibu selalu diberikan kesehatan, kebahagiaan, kesabaran serta keberkahan dalam menjalankan tugas mulia ini! Thank u again and Happy Teacher Days! We love u all!" },

/* ===== Baris 97 ===== */
{ to: "Semua guru", body: "Asik, seru, dan inspiratif." },
{ to: "Pak Mamet, Pak Tio, Bu Nadela", body: "I love dan semoga bisa terus belajar sama Mr. Mamet, oiya Pak Tio juga paling seru saat belajar dan Bu Nadela selalu belajar praktik jadi sangat masuk dan sesuai dengan style saya." },
{ to: "Semua guru", body: "PESAN UNTUK SELURUH GURU. Aku hanyalah seorang pelajar yang sedang mencari arah di luasnya perjalanan. Di antara banyaknya hal yang belum kupahami, kalian hadir sebagai pelita yang menerangi langkahku. Dengan kesabaran kalian membimbing, dengan ketulusan kalian mengajar, dan dengan nasihat yang selalu diberikan, kalian membantuku mengenal dunia lebih jauh dari yang pernah kubayangkan. Bukan hanya ilmu yang kalian ajarkan, tetapi juga arti sebuah usaha, keberanian untuk mencoba, serta keteguhan untuk tidak mudah menyerah. Mungkin sebuah ucapan terima kasih tak akan pernah cukup untuk membalas semuanya. Namun, setiap ilmu dan kebaikan yang kalian berikan akan selalu menjadi bagian dari perjalanan hidupku. Sebab seorang guru bukan sekadar pengajar, melainkan penunjuk jalan bagi mereka yang sedang mencari masa depan. Terima kasih atas segala jasa dan pengabdian. Hormat saya, Muhaimin Rafa Ramdani, 18 November 2026." },

/* ===== Baris 98 ===== */
{ to: "Bu Putri Yustika", body: "Bu Putri Yustika." },
{ to: "Semua guru", body: "-" },
{ to: "Semua guru", body: "-" },

/* ===== Baris 99 ===== */
{ to: "Semua guru", body: "Seru." },
{ to: "Semua guru", body: "Sehat selalu, dan makin diluaskan kesabarannya untuk menghadapi murid-murid. You are the best." },
{ to: "Semua guru", body: "Good." },

/* ===== Baris 100 ===== */
{ to: "Semua guru", body: "Baik banget, ramah dan mengajarkan kami dengan penuh kesabaran serta seru juga." },
{ to: "Semua guru", body: "Selamat hari guru, terima kasih Bapak/Ibu guru sudah mengajarkan kami dengan baik dan penuh kesabaran." },
{ to: "Semua guru", body: "Selamat hari guru Bapak/Ibu guru. Terima kasih Bapak/Ibu sudah mengajarkan kami dengan baik dan sabar." },

/* ===== Baris 101 ===== */
{ to: "Semua guru", body: "Seneng." },
{ to: "Semua guru", body: "Beribu-ribu terima kasih dari saya karena rasa sayang saya tidak bisa diekspresikan, terima kasih sudah susah payah menghadapi keluhan kami selama belajar." },
{ to: "Semua guru", body: "Terima kasih sudah mengajarkan kami ilmu." },

/* ===== Baris 102 ===== */
{ to: "Semua guru", body: "First impression saya terhadap guru ini adalah orangnya baik, ramah, dan cukup tegas. Cara mengajarnya juga mudah dipahami sehingga membuat saya lebih nyaman saat mengikuti pembelajaran." },
{ to: "Semua guru", body: "Terima kasih sudah menjadi guru yang sabar dalam membimbing dan mengajari kami. Terima kasih atas ilmu, nasihat, dan perhatian yang telah diberikan. Semoga Bapak/Ibu selalu diberikan kesehatan, kebahagiaan, dan kesabaran dalam mendidik murid-murid. Jangan pernah bosan untuk membimbing kami agar menjadi pribadi yang lebih baik. Bagi kami, Bapak/Ibu adalah guru terbaik yang selalu memberikan inspirasi." },
{ to: "Semua guru", body: "Terima kasih kepada semua guru yang telah sabar mendidik dan membimbing kami. Maaf jika selama ini kami sering melakukan kesalahan. Semoga Bapak/Ibu selalu diberikan kesehatan, kebahagiaan, dan kesabaran. Jasa dan kebaikan kalian akan selalu kami ingat." },

/* ===== Baris 103 ===== */
{ to: "Semua guru", body: "First impression saya terhadap guru ini adalah orangnya baik, ramah, dan cukup tegas. Cara mengajarnya juga mudah dipahami sehingga membuat saya lebih nyaman saat mengikuti pembelajaran." },
{ to: "Semua guru", body: "Terima kasih sudah menjadi guru yang sabar dalam membimbing dan mengajari kami. Terima kasih atas ilmu, nasihat, dan perhatian yang telah diberikan. Semoga Bapak/Ibu selalu diberikan kesehatan, kebahagiaan, dan kesabaran dalam mendidik murid-murid. Jangan pernah bosan untuk membimbing kami agar menjadi pribadi yang lebih baik. Bagi kami, Bapak/Ibu adalah guru terbaik yang selalu memberikan inspirasi." },
{ to: "Semua guru", body: "Terima kasih kepada semua guru yang telah sabar mendidik dan membimbing kami. Maaf jika selama ini kami sering melakukan kesalahan. Semoga Bapak/Ibu selalu diberikan kesehatan, kebahagiaan, dan kesabaran. Jasa dan kebaikan kalian akan selalu kami ingat." },

/* ===== Baris 104 ===== */
{ to: "Bu Putri", body: "Bu Putri." },
{ to: "Bu Putri", body: "Terima kasih Ibu telah membimbing saya dengan sabar, jasamu selalu saya ingat." },
{ to: "Semua guru", body: "Terima kasih atas bimbingan dan jasa yang telah kalian berikan kepada kami." },

/* ===== Baris 105 ===== */
{ to: "Semua guru", body: "Ramah-ramah, terus baik-baik dan ada yang tegas karena untuk membentuk karakter kita." },
{ to: "Bu Putri Yustika", body: "Untuk Bu Putri Yustika, terima kasih banyak sudah mengajar dan menjadi walas kelas XI MP 1 selama 2 tahun dan selalu baik sama anak muridnya serta selalu sabar saat ada masalah di anak muridnya, sehat selalu ya Bu Putri dan bahagia selalu untuk keluarga Bu Putri, i love u ibuuuu." },
{ to: "Semua guru", body: "Sehat selalu ya untuk semua guru dan bahagia selalu serta rezekinya dilancarkan." },

/* ===== Baris 106 ===== */
{ to: "Semua guru", body: "Oke banget." },
{ to: "Bu Putri", body: "I love u Bu Putri, sehat selalu biar bisa bareng anak XI MP 1 terus." },
{ to: "Semua guru", body: "I love u guru pengkolan." },

/* ===== Baris 107 ===== */
{ to: "Semua guru", body: "Ramah, seru, guru SMKN 2 punya pengalaman yang seru untuk dibagikan ke murid-muridnya." },
{ to: "Semua guru", body: "Sehat selalu Ibu, semoga rezekinya selalu berlimpah." },
{ to: "Semua guru", body: "Untuk semua guru yang ada di SMKN 2, selalu diberikan kesehatan, rezeki yang melimpah dan diberikan umur yang panjang." },

/* ===== Baris 108 ===== */
{ to: "Semua guru", body: "Senang." },
{ to: "Bu Putri", body: "Bu Putri i love you, sehat selalu, dilancarkan rezekinya, sayang Ibu." },
{ to: "Semua guru", body: "I love you semua guru pengkolan." },

/* ===== Baris 109 ===== */
{ to: "Semua guru", body: "Asik deh." },
{ to: "Semua guru", body: "Josjis." },
{ to: "Semua guru", body: "I love u." },

/* ===== Baris 110 ===== */
{ to: "Semua guru", body: "Senang." },
{ to: "Bu Putri", body: "Bu Putri i love you, sehat selalu, dilancarkan rezekinya, aamiin." },
{ to: "Semua guru", body: "Kepada seluruh Bapak dan Ibu Guru, terima kasih atas kesabaran, bimbingan, dan ketulusan yang tak pernah padam. Perjuangan dan pengorbanan Anda mungkin tidak selalu terlihat atau terdengar riuh, tetapi setiap ilmu yang ditanamkan akan menjadi cahaya dan amal jariyah yang terus mengalir. Terima kasih telah membentuk masa depan yang tidak hanya dicatat di atas kertas, tetapi hidup dalam setiap keberhasilan kami. I love you." },

/* ===== Baris 111 ===== */
{ to: "Semua guru", body: "Senang." },
{ to: "Bu Putri", body: "Ibu Putri makasih ya udah sabar ngajarin kami, i love you Ibu, tapi bukan buat Ibu Putri aja ya, semua guru juga." },
{ to: "Semua guru", body: "Semoga Ibu guru dan Bapak guru selalu sehat selalu, dan semoga rezekinya selalu mengalir seperti sabar sama kami hehehe." },

/* ===== Baris 112 ===== */
{ to: "Semua guru", body: "Beliau semua sangat disiplin terhadap pembelajaran yang kami dapatkan tapi tetap dibungkus dengan kehangatan di setiap cara belajarnya." },
{ to: "Semua guru", body: "Semoga semua hal baik menemukan jalannya menuju kehidupan beliau-beliau yang sudah membakar pijar lentera pengetahuan kami, semoga cahaya dari tiap-tiap muridnya kelak menjadi penerang dan amal jariah di akhir hidupnya." },
{ to: "Semua guru", body: "Kami adalah penerus bangsa, dan kalianlah tombak pengetahuan penerus bangsa. Maka, lapangkanlah lagi dada untuk berbagi ilmu kehidupan kepada kami. Terima kasih Bapak dan Ibu!" },

/* ===== Baris 113 ===== */
{ to: "Semua guru", body: "Keren-keren." },
{ to: "Pak Sandi", body: "Guru terbaik saya Pak Sandi, Pak Sandi terima kasih sudah memotivasi saya, saya jadi punya semangat lagi untuk selalu bangkit dari rasa aman. Terima kasih banyak Pak Sandi." },
{ to: "Semua guru", body: "Untuk semua guru, you are better give masuk kelas dan menjelaskan daripada tidak masuk dan banyak PR." },

/* ===== Baris 114 ===== */
{ to: "Semua guru", body: "Sangat baik." },
{ to: "Semua guru", body: "Semoga semakin sukses." },
{ to: "Semua guru", body: "Semoga panjang umur dan sehat selalu." },

/* ===== Baris 115 ===== */
{ to: "Semua guru", body: "Memberikan kesan yang cukup baik dan menyenangkan." },
{ to: "Semua guru", body: "Terima kasih Bapak/Ibu guru yang telah sabar mengajar kami selama ini." },
{ to: "Semua guru", body: "Makasih banyak buat Bapak/Ibu guru atas kesabarannya ngadepin kita tiap hari. Jasanya bakal kita ingat terus." },

/* ===== Baris 116 ===== */
{ to: "Semua guru", body: "Seru." },
{ to: "Bu Putri", body: "Terima kasih banyak Bu Putri sudah membersamai kami selama dua tahun ini sebagai wali kelas yang luar biasa. Terima kasih atas kesabaran, kebaikan, dan ketulusan Ibu dalam mendidik dan membimbing kami melewati suka dan duka selama di kelas. Kami minta maaf ya Bu, kalau selama dua tahun ini kadang ada perbuatan atau perkataan kami yang kurang berkenan di hati Ibu. Semoga kebaikan, kesabaran, dan semua ilmu yang Ibu berikan menjadi ladang pahala serta berkah yang melimpah. Sehat selalu ya Bu. Kami 11 MP 1 sayang Ibu." },
{ to: "Semua guru", body: "Terima kasih yang tak terhingga kepada seluruh Bapak dan Ibu guru SMKN 2 Cikarang Barat. Terima kasih sudah sabar membimbing, mencurahkan ilmu, dan mendidik kami bukan hanya agar pintar secara akademis, tapi juga menjadi pribadi yang lebih baik. Maafkan kami jika selama ini sering membuat kesalahan, gaduh, atau kurang disiplin di kelas. Jasa dan kesabaran Bapak Ibu guru sekalian tidak akan pernah bisa kami balas, namun doa terbaik selalu kami panjatkan. Semoga Bapak dan Ibu guru selalu diberikan kesehatan, kesabaran tanpa batas, kebahagiaan, dan keberkahan dalam setiap langkahnya." },

/* ===== Baris 117 ===== */
{ to: "Semua guru", body: "Seru." },
{ to: "Semua guru", body: "Keren." },
{ to: "Semua guru", body: "Mantap." },

/* ===== Baris 118 ===== */
{ to: "Semua guru", body: "Happy banget." },
{ to: "Semua guru", body: "Semangat terus dan sukses." },
{ to: "Semua guru", body: "Sehat selalu." },

/* ===== Baris 119 ===== */
{ to: "Semua guru", body: "Seru." },
{ to: "Semua guru", body: "Sehat selalu Ibu." },
{ to: "Semua guru", body: "Sehat selalu Bapak & Ibu, semangat terus untuk ngajar kita!" },

/* ===== Baris 120 ===== */
{ to: "Semua guru", body: "Senang dan sedikit kaget." },
{ to: "Semua guru", body: "Terima kasih sudah mendidik kita." },
{ to: "Semua guru", body: "Terima kasih banyak sudah mendidik anak-anak murid ya Ibu/Bapak guru, semoga panjang umur, sehat selalu serta dilancarkan rezekinya." },

/* ===== Baris 121 ===== */
{ to: "Semua guru", body: "Senang." },
{ to: "Semua guru", body: "Terima kasih sudah menjadi guru baik yang pernah mengajarkan kami dan semoga selalu dilancarkan urusannya." },
{ to: "Semua guru", body: "Terima kasih sudah mengajar kami dengan setulus hati, semoga kalian selalu sehat." },

/* ===== Baris 122 ===== */
{ to: "Pak Agung", body: "Pak Agung." },
{ to: "Bu Yuli", body: "Buat Bu Yuli ketua jurusan akuntansi, saya bangga bisa diajar dan dibimbing oleh Ibu, saya sangat sayang dan menghargai beliau karena dia kajur dan juga guru akuntansi saya, saya bangga bisa diajar oleh Ibu, kadang beliau marah dan kesal tapi saya sangat senang bisa diajar Ibu, maafkan saya kalo buat Ibu kesal dan marah, saya sayang Bu Yuli." },
{ to: "Semua guru", body: "Saya sangat bangga diajar kalian semua." },

/* ===== Baris 123 ===== */
{ to: "Semua guru", body: "Senang." },
{ to: "Semua guru", body: "Semangat Ibu." },
{ to: "Semua guru", body: "Tetap semangat Ibu." },

/* ===== Baris 124 ===== */
{ to: "Semua guru", body: "No comment." },
{ to: "Semua guru", body: "No comment." },
{ to: "Semua guru", body: "Semangat para pahlawan pendidikan." },

/* ===== Baris 125 ===== */
{ to: "Semua guru", body: "Senang." },
{ to: "Semua guru", body: "Senang." },
{ to: "Semua guru", body: "Baik, terima kasih." },

/* ===== Baris 126 ===== */
{ to: "Semua guru", body: "Senang sekali karena bisa diajar oleh guru-guru di SMKN 2 Cikarang Barat." },
{ to: "Semua guru", body: "Terima kasih Ibu sudah menjadi guru terbaik bagi saya." },
{ to: "Semua guru", body: "Terima kasih Bapak Ibu guru yang sudah berjasa bagi saya." },

/* ===== Baris 127 ===== */
{ to: "Semua guru", body: "Seru karena guru nya baik semua, tapi ada rasa takutnya juga karena takut gurunya nanti pada galak." },
{ to: "Semua guru", body: "Jangan cape-cape ya Bapak/Ibu ngajar di kelas saya, sehat terus Bapak/Ibu." },
{ to: "Semua guru", body: "Terima kasih sudah menjadi guru yang sabar kepada anak-anak SMKN 2 Cikarang Barat. Terima kasih atas semua bimbingan yang telah Bapak/Ibu guru kasih kepada siswa siswi SMK 2, jangan pernah cape ya Bapak/Ibu guru mengajar dan membimbing kami." },

/* ===== Baris 128 ===== */
{ to: "Semua guru", body: "Senang dan baik." },
{ to: "Semua guru", body: "Semangat terus Ibu mengajarnya." },
{ to: "Semua guru", body: "Terima kasih, Bapak/Ibu atas kesabaran, bimbingan, dan ilmu yang telah diberikan. Semoga kebaikan kalian selalu dibalas dengan kesehatan dan kebahagiaan." },

/* ===== Baris 129 ===== */
{ to: "Semua guru", body: "Canggung dan seru." },
{ to: "Semua guru", body: "Semangat untuk terus berkembang dan memotivasi murid." },
{ to: "Semua guru", body: "Semangat ngajarnya, jangan lupa jaga kesehatan ya karena masih banyak orang yang membutuhkan seorang pahlawan tanda jasa." },

/* ===== Baris 130 ===== */
{ to: "Semua guru", body: "Suka banget tapi banyak tugas, tapi gapapa aku tetap sayang banget sama Ibu." },
{ to: "Semua guru", body: "Sehat-sehat ya Ibu, terima kasih Ibu selalu sabar." },
{ to: "Semua guru", body: "Makasih ya." },

/* ===== Baris 131 ===== */
{ to: "Semua guru", body: "Gaada." },
{ to: "Semua guru", body: "Josjisssss Bu." },
{ to: "Semua guru", body: "Josjis." },

/* ===== Baris 132 ===== */
{ to: "Semua guru", body: "Seru menyenangkan." },
{ to: "Semua guru", body: "Janganlah menyerah dalam membimbing anak-anak SMKN 2 Cikarang Barat karena dengan kalian anak SMKN 2 Cikarang Barat jadi pinter-pinter." },
{ to: "Semua guru", body: "Semangat dalam mengajarnya ya guru-guru ku." },

/* ===== Baris 133 ===== */
{ to: "Semua guru", body: "Seru, menyenangkan." },
{ to: "Semua guru", body: "Semangat aja." },
{ to: "Semua guru", body: "Semangat terus mendidik anak-anak di SMKN 2 Cikarang Barat, jasa kalian tiada tara." },

/* ===== Baris 134 ===== */
{ to: "Semua guru", body: "Menyenangkan dan moment yang membanggakan." },
{ to: "Semua guru", body: "Terima kasih atas tenaga yang diberikan." },
{ to: "Semua guru", body: "Terima kasih telah mengajarkan kami dengan sepenuh hati." },

/* ===== Baris 135 ===== */
{ to: "Semua guru", body: "Keren-keren gurunya." },
{ to: "Bu Inggit", body: "Bu Inggit semangat selalu." },
{ to: "Semua guru", body: "Semangat terus Ibu/Bapak dalam mengajar." },

/* ===== Baris 136 ===== */
{ to: "Semua guru", body: "Asik walau sedikit pusing karena sulit paham." },
{ to: "Semua guru", body: "Makasih sudah baik kepada semua murid di kelas saya." },
{ to: "Semua guru", body: "Semangat terus mengajar dan mengajak anak muridnya untuk jadi lebih baik ke depannya." },

/* ===== Baris 137 ===== */
{ to: "Semua guru", body: "Seru." },
{ to: "Semua guru", body: "Semangat." },
{ to: "Semua guru", body: "Terus semangat." },

/* ===== Baris 138 ===== */
{ to: "Semua guru", body: "Deg-degan karena belum kenal." },
{ to: "Semua guru", body: "Sehat selalu." },
{ to: "Semua guru", body: "Sehat selalu." },

/* ===== Baris 139 ===== */
{ to: "Pak Depana", body: "Pak Depana." },
{ to: "Semua guru", body: "Maap ya Ibu kalo sering ngerepotin, makasih udah sabar mau ngeladenin orang kaya saya." },
{ to: "Semua guru", body: "Buat para guru, semangat ya. Makasih udah sabar ngajar saya. Makasih buat setiap ilmunya." },

/* ===== Baris 140 ===== */
{ to: "Semua guru", body: "Awalnya saya merasa sedikit takut dan gugup, tetapi seiring berjalannya waktu saya merasa nyaman karena guru-guru di SMKN 2 Cikarang Barat ternyata baik, ramah, tegas, dan sangat membantu dalam proses belajar." },
{ to: "Semua guru", body: "Terima kasih atas ilmu, kesabaran, perhatian, dan bimbingan yang telah diberikan. Semoga Bapak/Ibu selalu sehat, bahagia, dan diberikan kemudahan dalam menjalankan tugas. Saya akan selalu mengingat jasa dan kebaikan Bapak/Ibu." },
{ to: "Semua guru", body: "Terima kasih kepada seluruh guru yang telah mendidik, membimbing, dan memberikan ilmu kepada kami. Semoga semua ilmu yang diberikan menjadi bekal bagi masa depan kami dan semoga Bapak/Ibu selalu diberikan kesehatan, kebahagiaan, serta keberkahan." },

/* ===== Baris 141 ===== */
{ to: "Pak Depana", body: "Pak Depana." },
{ to: "Semua guru", body: "Maap ya Ibu kalo sering ngerepotin, makasih udah sabar mau ngeladenin orang kaya saya." },
{ to: "Semua guru", body: "Buat para guru, semangat ya. Makasih udah sabar ngajar saya. Makasih buat setiap ilmunya." },

/* ===== Baris 142 ===== */
{ to: "Semua guru", body: "Karakter guru berbeda-beda ada yang baik dan ada yang galak menurut masing-masing." },
{ to: "Semua guru", body: "Terima kasih Ibu sudah mengajar kami dengan sungguh-sungguh." },
{ to: "Semua guru", body: "I LOVE YOU IBU/BAPAK." },

/* ===== Baris 143 ===== */
{ to: "Semua guru", body: "Enak." },
{ to: "Semua guru", body: "Teruslah menjadi guru terbaik." },
{ to: "Semua guru", body: "Teruslah berbuat baik." },

/* ===== Baris 144 ===== */
{ to: "Semua guru", body: "WOW." },
{ to: "Semua guru", body: "Sehat-sehat." },
{ to: "Semua guru", body: "Semangat terus." },

/* ===== Baris 145 ===== */
{ to: "Semua guru", body: "Baik." },
{ to: "Semua guru", body: "Terima kasih Ibu sudah mengajarkan kami dengan sungguh-sungguh." },
{ to: "Semua guru", body: "I love you Ibu & Bapak." },

/* ===== Baris 146 ===== */
{ to: "Semua guru", body: "Tegas dan baik, jadi ada waktunya tegas dan ada waktunya bersahabat dengan murid." },
{ to: "Semua guru", body: "Tetap jadi guru yang selalu menginspirasi murid." },
{ to: "Semua guru", body: "Semangat Bapak Ibu guru." },

/* ===== Baris 147 ===== */
{ to: "Semua guru", body: "Seneng banget karena cara ngejelasinnya bagus banget jadi kita sebagai murid jadi lebih mudah mengerti pelajaran." },
{ to: "Semua guru", body: "Terima kasih Ibu, saya senang banget bisa mengenal Ibu dan diajar Ibu jadi saya benar-benar bisa mengerti pelajaran yang saya dapatkan, semoga sehat selalu, panjang umur, dan dilancarkan rezekinya, sekali lagi terima kasih Ibu, i love you." },
{ to: "Semua guru", body: "HAPPY TEACHERS DAY! Terima kasih Bapak/Ibu yang sudah selalu sabar mengajar kami dan menyayangi kami dengan caranya masing-masing, saya harap kalian semua selalu sehat, panjang umur, dan dilancarkan rezekinya, aamiin. Semoga juga tugas-tugasnya bisa dikurangi ya Ibu Bapak, LOVE YOU." },

/* ===== Baris 148 ===== */
{ to: "Semua guru", body: "Seru, karena metode setiap guru berbeda-beda, ga bikin bosen." },
{ to: "Semua guru", body: "Semoga sehat selalu, diberi umur panjang, terima kasih juga atas jasanya dalam mengajar saya dan teman-teman, meskipun kadang kita kebanyakan bercanda. Terima kasih sudah sabar dan sayang kepada kita, dan mohon diringankan tugasnya agar tidak kebanyakan." },
{ to: "Semua guru", body: "SELAMAT HARI GURU! Terima kasih atas jasanya yang telah sabar mengajar dan membimbing kami, serta semoga diberi umur panjang dan keberkahan yang melimpah dan kesabaran yang tebal, dan hari yang selalu cerah." },

/* ===== Baris 149 ===== */
{ to: "Semua guru", body: "Awalnya merasa gugup, tetapi ternyata gurunya ramah, baik, tegas, dan cara mengajarnya menyenangkan." },
{ to: "Semua guru", body: "Terima kasih sudah sabar membimbing, mengajar, dan memberikan ilmu. Semoga Bapak/Ibu selalu sehat, bahagia, dan terus menjadi guru yang menginspirasi." },
{ to: "Semua guru", body: "Terima kasih kepada semua guru yang telah sabar mendidik, membimbing, dan memberikan ilmu. Semoga selalu sehat, bahagia, dan tidak pernah lelah menjadi inspirasi bagi murid-muridnya." },

/* ===== Baris 150 ===== */
{ to: "Semua guru", body: "Awalnya merasa takut tapi, lama kelamaan saya merasa nyaman belajar di sini karena gurunya ramah, baik, dan selalu memberikan motivasi untuk kami semua." },
{ to: "Semua guru", body: "Terima kasih sudah menjadi guru yang baik, sabar, dan selalu memberikan motivasi. Terima kasih atas ilmu, nasihat, dan perhatian yang sudah diberikan. Semoga Ibu selalu sehat dan bahagia." },
{ to: "Semua guru", body: "Terima kasih kepada semua guru yang telah membimbing, mendidik, dan mengajarkan banyak hal kepada kami. Maaf jika selama ini kami sering membuat kesalahan atau kurang memperhatikan saat belajar. Semoga semua guru selalu diberikan kesehatan, kebahagiaan, dan kesabaran dalam mendidik kami, kami sayang Ibu/Bapak guru semua. I LOVE YOU BU/PAK." },

/* ===== Baris 151 ===== */
{ to: "Semua guru", body: "Sangat menyenangkan dan senang sekali bisa diajar oleh guru-guru hebat." },
{ to: "Semua guru", body: "Terima kasih telah menjadi panutan dan selalu menginspirasi kami." },
{ to: "Semua guru", body: "Teruntuk guru-guru SMKN 2 Cikarang Barat, terima kasih telah mengajarkan kami tentang materi pelajaran maupun kehidupan sehari-hari, semoga ilmu yang diberikan Bapak Ibu akan bermanfaat bagi kami, dan Bapak Ibu diberikan kesehatan serta kemudahan dalam menjalankan setiap tugasnya." },

/* ===== Baris 152 ===== */
{ to: "Semua guru", body: "Senang." },
{ to: "Semua guru", body: "Terima kasih karena sudah mengajar dengan sabar." },
{ to: "Semua guru", body: "Semangat." },

/* ===== Baris 153 ===== */
{ to: "Semua guru", body: "Kesan pertamaku saat diajar oleh guruku adalah sesuatu yang tidak akan pernah aku lupakan. Di hari pertama, aku datang ke kelas dengan perasaan gugup dan penasaran. Aku tidak tahu guru seperti apa dia. Tapi begitu dia mulai mengajar, dia menyapa kami dengan hangat dengan senyuman lebar dan memperkenalkan dirinya dengan cara yang ramah. Dia membuat kami merasa bukan hanya sebagai murid, tapi juga sebagai temannya. Cara mengajarnya sangat mudah dimengerti, dia selalu memberi contoh dari kehidupan sehari-hari, dan dia selalu memastikan tidak ada murid yang tertinggal. Karena dia, aku mulai mencintai Bahasa Inggris dan aku menjadi lebih percaya diri untuk berbicara di depan kelas. Bagiku, dia bukan hanya seorang guru, tapi juga sebuah inspirasi." },
{ to: "Bu Dian", body: "Bu Dian makasih karena cara belajarnya sangat enak dan menyenangkan." },
{ to: "Semua guru", body: "Sangat memotivasi bagi saya untuk explore lebih jauh lagi terhadap value dalam hidup saya." },

/* ===== Baris 154 ===== */
{ to: "Semua guru", body: "Senang karena pertama kalinya diajar." },
{ to: "Bu Diarti", body: "Untuk Bu Diarti terima kasih karena sudah mau sabar menjadi wali kelas X MP 1 dan mau mengajari kami." },
{ to: "Semua guru", body: "Semoga sehat selalu." },

/* ===== Baris 155 ===== */
{ to: "Semua guru", body: "Saya merasa senang dan bangga." },
{ to: "Bu Inggit", body: "Untuk Bu Inggit terima kasih atas semua hal yang sudah diajarkan kepada saya meskipun Ibu adalah guru baru di sini saya tetap senang dan bangga kepada Ibu, tetap semangat dan berjuang ke depannya. Semangat Ibu." },
{ to: "Semua guru", body: "Terima kasih telah mengajar dan memberikan ilmu kepada saya, saya merasa senang dan bangga telah diajar Bapak Ibu semuanya, saya benar-benar berterima kasih untuk semua jasa Bapak dan Ibu guru." },

/* ===== Baris 156 ===== */
{ to: "Semua guru", body: "Sangat senang." },
{ to: "Semua guru", body: "Sehat selalu Ibu, love you." },
{ to: "Semua guru", body: "Sehat selalu Ibu Bapak semuanya." },

/* ===== Baris 157 ===== */
{ to: "Semua guru", body: "Kesan pertama saat diajar oleh guru SMKN 2 Cikarang Barat adalah merasa sedikit gugup, tetapi juga antusias. Setiap guru memiliki cara mengajar, karakter, dan pembawaan yang berbeda, sehingga memberikan pengalaman belajar yang menarik, berkesan, dan penuh pelajaran baru." },
{ to: "Semua guru", body: "Terima kasih telah menjadi guru yang bukan hanya mengajarkan ilmu, tetapi juga memberikan motivasi, perhatian, dan inspirasi. Semoga Bapak/Ibu selalu sehat, bahagia, dan terus menjadi sosok yang membawa semangat bagi banyak siswa." },
{ to: "Semua guru", body: "Terima kasih kepada seluruh Bapak/Ibu Guru atas ilmu, kesabaran, bimbingan, dan kasih sayang yang telah diberikan. Semoga selalu sehat, bahagia, dan diberikan keberkahan dalam setiap langkah. Jasa Bapak/Ibu Guru akan selalu kami kenang." },

/* ===== Baris 158 ===== */
{ to: "Semua guru", body: "First impression saya saat diajar oleh guru SMKN 2 Cikarang Barat adalah ramah, baik, dan menyenangkan. Cara mengajarnya cukup jelas sehingga membuat saya lebih mudah memahami pelajaran dan nyaman saat belajar di kelas." },
{ to: "Semua guru", body: "Terima kasih kepada guru terbaik yang selalu sabar dalam mengajar, membimbing, dan memberikan ilmu kepada kami. Semoga Bapak/Ibu selalu sehat, bahagia, dan diberikan kesabaran dalam mendidik murid-muridnya." },
{ to: "Semua guru", body: "Terima kasih kepada semua guru yang telah sabar mendidik, membimbing, dan memberikan ilmu kepada kami. Mohon maaf jika selama belajar kami sering melakukan kesalahan. Semoga semua guru selalu sehat, bahagia, dan tetap semangat dalam mencerdaskan generasi bangsa." },

/* ===== Baris 159 ===== */
{ to: "Semua guru", body: "Awalnya canggung, tapi lama-lama jadi nyaman dan menyenangkan." },
{ to: "Semua guru", body: "Terima kasih sudah sabar membimbing dan memberikan banyak ilmu, semoga selalu sehat." },
{ to: "Semua guru", body: "Terima kasih atas ilmu dan kesabarannya, semoga semua guru selalu sehat dan bahagia." },

/* ===== Baris 160 ===== */
{ to: "Semua guru", body: "Menyenangkan, karena kebanyakan gurunya asik." },
{ to: "Semua guru", body: "Terima kasih telah membagi ilmu yang bermanfaat dengan sabar." },
{ to: "Semua guru", body: "Terima kasih sudah menjadi orang tua kami di sekolah." },

/* ===== Baris 161 ===== */
{ to: "Semua guru", body: "Kirain bakal agak santai ternyata engga." },
{ to: "Semua guru", body: "Semangat ngajarnya Ibu/Pak." },
{ to: "Semua guru", body: "Terima kasih sudah mau berkorban dalam membimbing kami semua." },

/* ===== Baris 162 ===== */
{ to: "Semua guru", body: "Awalnya saya merasa tidak paham, karena saya masih ada di masa peralihan dari SMP ke SMK." },
{ to: "Semua guru", body: "Terima kasih telah memberikan ilmu kepada kami sebagai murid." },
{ to: "Semua guru", body: "Terima kasih kepada guru-guru yang sudah memberikan ilmu kepada kami semua, tanpa kenal lelah." },

/* ===== Baris 163 ===== */
{ to: "Semua guru", body: "Guru-gurunya menarik semua, setiap guru beda sikap, beda cara ngajar dan beda konsekuensi, keren-keren." },
{ to: "Semua guru", body: "Tidak tahu mau memberikan pesan apa, tapi semangat buat Bapak dan Ibu guru yang terbaik bagi saya, terima kasih sudah mau mengajar saya." },
{ to: "Semua guru", body: "Terima kasih banyak Bapak dan Ibu guru yang sudah mau mengajar kami, insyaAllah kami akan berusaha keras mengejar mimpi kami. Terima kasih untuk Bapak Ibu guru yang sudah membimbing kami." },

/* ===== Baris 164 ===== */
{ to: "Semua guru", body: "Ada yang galak, ada yang susah ngejelasin materi, ada yang baik." },
{ to: "Semua guru", body: "Sehat selalu Bapak Ibu, terima kasih udah jadi salah satu alasan saya ngerasa nyaman di kelas dan ngebantu berkembang." },
{ to: "Semua guru", body: "Terima kasih atas semua ilmu, kesabaran, dan waktu yang sudah dicurahkan buat kami. Semoga setiap pelajaran yang disampaikan nggak cuma nempel di kepala, tapi juga bermanfaat buat bekal kami ke depannya." },

/* ===== Baris 165 ===== */
{ to: "Semua guru", body: "Awalnya sempat gugup karena suasana baru, tapi ternyata guru-guru di SMKN 2 Cikarang Barat sangat ramah, asik, dan sabar saat menjelaskan materi." },
{ to: "Bu Shelvy", body: "Terima kasih banyak Bu Shelvy sudah menjadi guru yang sangat menginspirasi dan selalu sabar membimbing kami. Sehat dan bahagia selalu ya, Bu!" },
{ to: "Semua guru", body: "Terima kasih kepada seluruh Bapak/Ibu guru SMKN 2 Cikarang Barat atas dedikasi, kesabaran, dan ilmu yang telah diberikan. Semoga Bapak/Ibu selalu diberikan kesehatan dan keberkahan." },

/* ===== Baris 166 ===== */
{ to: "Semua guru", body: "Seneng karena bisa mengenal Ibu dan Bapak guru SMKN 2." },
{ to: "Semua guru", body: "Semangat terus Ibu, sehat-sehat ya Bu, kita sayang Ibu." },
{ to: "Semua guru", body: "Happy teacher day untuk Ibu dan Bapak guru SMKN 2 Cikbar, semoga dengan hari guru nanti Ibu dan Bapak guru selalu menjadi guru yang ramah, amanah, dan sehat, aamiin." },

/* ===== Baris 167 ===== */
{ to: "Semua guru", body: "Seru." },
{ to: "Semua guru", body: "Semangat dan sehat selalu." },
{ to: "Semua guru", body: "Semangat dan semoga selalu sabar dalam mendidik kami." },

/* ===== Baris 168 ===== */
{ to: "Semua guru", body: "Seneng banget karena langsung ketemu Bu Eti." },
{ to: "Bu Eti", body: "Terima kasih banyak dan tunggu saya jadi pengusaha beras Bu Eti." },
{ to: "Semua guru", body: "Terima kasih banyak atas semuanya Ibu Bapak, jasamu akan kami kenang sampai kamu sukses." },

/* ===== Baris 169 ===== */
{ to: "Semua guru", body: "Ramah-ramah." },
{ to: "Semua guru", body: "Sangat membantu motivasi untuk belajar." },
{ to: "Semua guru", body: "Terima kasih atas dukungannya dan motivasi yang telah diberikan." },

/* ===== Baris 170 ===== */
{ to: "Semua guru", body: "Seneng banget." },
{ to: "Semua guru", body: "Semoga hal-hal baik selalu menyertai hidupmu." },
{ to: "Semua guru", body: "Selamat hari guru buat guru-guru SMKN 2 Cikarang Barat." },

/* ===== Baris 171 ===== */
{ to: "Semua guru", body: "Kesan pertama, guru-gurunya sangat baik dan sabar dalam mengajar. Suasana belajar terasa nyaman dan menyenangkan." },
{ to: "Semua guru", body: "Terima kasih sudah selalu ada dan membimbingku dengan penuh kesabaran. Kehadiran Bapak/Ibu membuatku merasa berharga. Semoga kebaikan Bapak/Ibu dibalas dengan kebahagiaan yang berlimpah. Terima kasih untuk segalanya, guru terbaikku." },
{ to: "Semua guru", body: "Terima kasih atas segala ilmu dan kesabaran Bapak/Ibu semua. Kalian adalah pelita yang menerangi jalan masa depan kami. Semoga kebaikan Bapak/Ibu selalu dibalas dengan berlipat ganda. Hormat kami untuk kalian." },

/* ===== Baris 172 ===== */
{ to: "Semua guru", body: "Keren banget gurunya ramah." },
{ to: "Semua guru", body: "Terima kasih udah ngajak saya Bu." },
{ to: "Semua guru", body: "Keren banget." },

/* ===== Baris 173 ===== */
{ to: "Semua guru", body: "Menyenangkan." },
{ to: "Semua guru", body: "Semoga sehat selalu ya Bu." },
{ to: "Semua guru", body: "Terima kasih sudah mengajar di SMKN 2 Cikarang Barat." },

/* ===== Baris 174 ===== */
{ to: "Semua guru", body: "Deg-degan sedikit." },
{ to: "Semua guru", body: "Sehat selalu." },
{ to: "Semua guru", body: "Sehat selalu." },

/* ===== Baris 175 ===== */
{ to: "Semua guru", body: "Awalnya takut tapi lama kelamaan bisa beradaptasi dengan baik, senang juga bisa berada di lingkungan SMKN 2 Cikarang Barat." },
{ to: "Semua guru", body: "Terima kasih atas apresiasi untuk setiap motivasi." },
{ to: "Semua guru", body: "Tetaplah menjadi cahaya yang menerangi generasi muda di tengah perubahan zaman." },

/* ===== Baris 176 ===== */
{ to: "Semua guru", body: "Awalnya takut, tapi semakin lama semakin nyaman karena cara ngajarnya asik dan gampang dipahami." },
{ to: "Semua guru", body: "Terima kasih sudah sabar ngajarin saya, walaupun saya sering susah paham. Berkat Bapak/Ibu, saya jadi lebih semangat belajar dan berani. Sehat selalu ya, semoga Bapak/Ibu selalu dimudahkan rezekinya. Saya sayang Bapak/Ibu guru terbaikku!" },
{ to: "Semua guru", body: "Tetap semangat, jangan pantang menyerah." },

/* ===== Baris 177 ===== */
{ to: "Semua guru", body: "Tegas tapi asik, ramah, dan ngajarnya gampang dimengerti. Awalnya deg-degan, sekarang malah betah." },
{ to: "Semua guru", body: "Buat guru terbaikku, makasih udah jadi guru yang gak cuma ngajar, tapi juga ngertiin. Jasa Bapak/Ibu gak akan pernah aku lupain. Sehat selalu ya!" },
{ to: "Semua guru", body: "Untuk semua guru, terima kasih sudah sabar ngajarin kami, sudah jadi orang tua kedua di sekolah. Sehat selalu, sukses terus. Kami bangga punya guru-guru hebat kayak Bapak/Ibu." },

/* ===== Baris 178 ===== */
{ to: "Semua guru", body: "Kesan pertama saya diajar guru SMKN 2 Cikarang Barat ramah, sabar, dan cara mengajarnya mudah dimengerti. Bikin saya semangat belajar." },
{ to: "Semua guru", body: "Untuk guru terbaikku, terima kasih sudah mendidikku dengan sabar dan tulus. Bukan hanya ilmu yang kau berikan, tapi juga semangat dan kebaikan. Berkatmu, aku berani bermimpi lebih besar. Sehat selalu, Guruku. Jasamu takkan pernah kulupakan." },
{ to: "Semua guru", body: "Untuk semua guruku, terima kasih sudah mendidik kami dengan sabar dan tulus. Kalian tidak hanya memberi ilmu, tapi juga mengajarkan kebaikan dan disiplin. Maaf jika kami sering membuat salah. Sehat selalu, Guruku. Kalian adalah pahlawan tanpa tanda jasa bagi kami." },

/* ===== Baris 179 ===== */
{ to: "Semua guru", body: "Awalnya sempat mengira bakal tegang dan kaku, tapi ternyata cara mengajarnya asik, sabar, dan gampang dipahami. Suasana kelas jadi nyaman dan nggak membosankan." },
{ to: "Pak Sumaryono", body: "Terima kasih banyak Pak Sumaryono atas ilmu, kesabaran, dan motivasinya selama ini. Sehat selalu Pak, semoga tetap jadi sosok yang menginspirasi buat murid-muridnya." },
{ to: "Semua guru", body: "Terima kasih Bapak/Ibu guru SMKN 2 Cikarang Barat atas dedikasi dan kesabarannya dalam membimbing kami. Semoga sehat selalu, dilancarkan rezekinya, dan terus semangat mencerdaskan generasi penerus." },

/* ===== Baris 180 ===== */
{ to: "Semua guru", body: "Kesan pertama saya sangat positif, guru-gurunya ramah, sabar, dan menjelaskan materi dengan jelas. Saya merasa senang belajar di sini." },
{ to: "Semua guru", body: "Terima kasih banyak Bapak/Ibu karena sudah selalu sabar membimbing saya. Semoga Bapak/Ibu selalu sehat dan semangat dalam mengajar. Saya sangat berterima kasih atas semua ilmunya." },
{ to: "Semua guru", body: "Terima kasih kepada seluruh guru di SMKN 2 Cikarang Barat yang telah mendidik kami dengan penuh kesabaran dan dedikasi. Semoga Bapak dan Ibu Guru selalu sehat, sukses, dan terus semangat membimbing kami meraih cita-cita." },

/* ===== Baris 181 ===== */
{ to: "Semua guru", body: "Takut." },
{ to: "Semua guru", body: "Semoga hari-harinya selalu indah dan bahagia." },
{ to: "Semua guru", body: "Semangat terus Bapak/Ibu guru." },

/* ===== Baris 182 ===== */
{ to: "Semua guru", body: "Senang, ramah." },
{ to: "Semua guru", body: "Semoga sehat selalu, panjang umur, banyak rezekinya, doa yang terbaik menyertai." },
{ to: "Semua guru", body: "Semangat terus Bapak & Ibu, semoga tidak pernah menyerah membimbing kami." },

/* ===== Baris 183 ===== */
{ to: "Semua guru", body: "Senang." },
{ to: "Semua guru", body: "I love you." },
{ to: "Semua guru", body: "I love you." },

/* ===== Baris 184 ===== */
{ to: "Semua guru", body: "Senang, karena kebanyakan guru di sekolah ini ramah dan baik lalu cara mengajarnya juga bagus." },
{ to: "Semua guru", body: "Tetap sehat, semangat, dan sukses selalu." },
{ to: "Semua guru", body: "Sukses selalu." },

/* ===== Baris 185 ===== */
{ to: "Semua guru", body: "Kesan pertama saya saat diajar Bapak/Ibu adalah menyenangkan. Cara mengajarnya mudah dipahami dan membuat saya menjadi lebih semangat untuk belajar." },
{ to: "Semua guru", body: "Terima kasih Bapak/Ibu sudah sabar mengajar dan membimbing kami. Semoga Bapak/Ibu selalu diberikan kesehatan dan semangat dalam mengajar. Ilmu yang Bapak/Ibu berikan sangat bermanfaat bagi saya." },
{ to: "Semua guru", body: "Terima kasih kepada seluruh guru SMKN 2 Cikarang Barat yang telah mendidik kami dengan sabar dan ikhlas. Semoga semua guru selalu diberikan kesehatan, kebahagiaan, dan semangat dalam mengajar." },

/* ===== Baris 186 ===== */
{ to: "Semua guru", body: "Tegas dan sabar." },
{ to: "Semua guru", body: "Terima kasih telah sabar dalam mengajar kami." },
{ to: "Semua guru", body: "Terima kasih sudah sabar mengajar, membimbing, dan berbagi ilmu kepada kami. Semoga selalu sehat dan bahagia, maaf jika selama belajar kami pernah melakukan kesalahan." },

/* ===== Baris 187 ===== */
{ to: "Semua guru", body: "First impression diajar guru SMKN 2 Cikarang Barat, kesan dari saya kayak menyenangkan karena mendapatkan ilmu yang luar biasa yang bisa saya dapatkan dan bisa dipelajari, dan nilai dari saya 100000000% dari guru-guru hebat SMKN 2 Cikarang Barat." },
{ to: "Bu Trimah & Pak Dahlan", body: "Pesan untuk guru terbaik saya adalah Bu Trimah & Pak Dahlan, tetaplah jadi guru yang baik dan ramah untuk muridnya dan selalu berbagi cerita ke anak muridnya agar bisa mendapatkan sesuatu hal yang bisa dijadikan pelajaran, terus tingkatkan rasa kesabarannya dan semoga untuk Ibu diberikan kesehatan serta panjang umur, lancar rezekinya dan dimudahkan setiap urusannya, aamiin." },
{ to: "Semua guru", body: "Pesan untuk semua guru yang hebat dan kuat dalam membagikan ilmunya dengan baik, pesan dari saya terima kasih telah memberikan ilmu yang terbaik untuk saya dan yang lainnya karena guru orang tua kedua saya yang sudah mendidik menjadi lebih baik lagi dengan segala peraturan yang baik dari Bapak/Guru yang disampaikan, tetaplah pantang menyerah untuk menjadi seseorang guru yang kuat dan hebat karena membagikan ilmu itu sesuatu hal yang diwajibkan tetapi Bapak/Ibu guru tidak pelit untuk membagi ilmu dan tidak menyerah dalam mengajarkan kami walaupun kesalahan kami begitu banyak dan mungkin suka mengetes kesabaran dalam Bapak/Ibu mengajarkannya, terima kasih sekali lagi untuk Bapak/Ibu guru yang saya banggakan. Wassalamu'alaikum warahmatullahi wa barakatuh." },

/* ===== Baris 188 ===== */
{ to: "Semua guru", body: "Ramah, asik banget ngajarnya." },
{ to: "Semua guru", body: "Sehat terus ya Bu, semoga ilmu yang diberikan oleh Ibu bermanfaat bagi kita semua." },
{ to: "Semua guru", body: "Untuk Bapak/Ibu guru SMKN 2 Cikarang Barat, semoga sehat dan dipanjangkan umurnya agar bisa mengajarkan kami lebih semangat, dan juga terima kasih sudah membekali kami ilmu yang sangat bermanfaat bagi kami semua, kami tidak akan lupa atas semua jasa yang kalian berikan kepada kami." },

/* ===== Baris 189 ===== */
{ to: "Semua guru", body: "Awalnya terlihat tegas dan disiplin, namun setelah mengenal lebih jauh, cara mengajarnya sangat asyik, jelas, dan mudah dipahami." },
{ to: "Semua guru", body: "Terima kasih banyak Bapak/Ibu sudah menjadi guru yang sangat sabar dan selalu memotivasi saya. Cara mengajar Bapak/Ibu membuat saya lebih bersemangat dalam belajar dan mengejar cita-cita." },
{ to: "Semua guru", body: "Terima kasih atas dedikasi dan kesabaran Bapak/Ibu guru dalam mendidik kami. Semoga seluruh guru SMKN 2 Cikarang Barat selalu diberikan kesehatan, kebahagiaan, dan kesuksesan." },

/* ===== Baris 190 ===== */
{ to: "Semua guru", body: "Sangat kaget karena tidak semua guru dapat mengajar dengan baik, dan ada beberapa yang metode pembelajarannya susah dipahami." },
{ to: "Semua guru", body: "Terima kasih atas semua jasanya Bapak Ibu." },
{ to: "Semua guru", body: "Terima kasih, semoga sehat selalu ya." },

/* ===== Baris 191 ===== */
{ to: "Semua guru", body: "Lumayan senang." },
{ to: "Semua guru", body: "Semoga disehatkan selalu dan diberi rezeki yang baik." },
{ to: "Semua guru", body: "Semoga dipanjangkan umurnya dan disehatkan selalu." },

/* ===== Baris 192 ===== */
{ to: "Semua guru", body: "Lumayan seru pas mengajar di kelas." },
{ to: "Bu Flora", body: "Untuk Ibu Flora, terima kasih sudah sabar dan tetap menjalankan tugas sebagai wali kelas dengan sangat baik. Untuk 2 tahun ini, saya harap segala ilmu dari Ibu, baik yang materi maupun non materi dapat saya ingat selalu untuk perjalanan saya di masa depan." },
{ to: "Semua guru", body: "Terima kasih untuk semua guru SMKN 2 Cikarang Barat, karena telah dengan sabar mengajari kami para murid yang sangat banyak ini. Dan di segala sela istirahatmu, semoga kalian selalu diberi keberkahan dalam hidup kalian dari Tuhan, dan selalu dibukakan jalan yang baik jikalau sedang dalam masalah. Terima kasih banyak ya Pak, Bu. Semoga semua ilmu yang kalian beri kepada kami, akan selalu terpakai untuk di masa depan nanti." },

/* ===== Baris 193 ===== */
{ to: "Semua guru", body: "Awalnya ya Allah ya Allah." },
{ to: "Mr. Mamet", body: "Mr. Mamet terima kasih atas jasa dan pengorbanannya." },
{ to: "Semua guru", body: "I love u." },

/* ===== Baris 194 ===== */
{ to: "Semua guru", body: "Ramah." },
{ to: "Semua guru", body: "Tetap menjadi yang terbaik." },
{ to: "Semua guru", body: "Love u Bapak Ibu." },

/* ===== Baris 195 ===== */
{ to: "Semua guru", body: "Asik dan ramah." },
{ to: "Semua guru", body: "Panjang umur, sehat selalu, dilancarkan segala urusannya, diberikan kesabaran untuk para murid yang diajar." },
{ to: "Semua guru", body: "Terus semangat :)" },

/* ===== Baris 196 ===== */
{ to: "Semua guru", body: "Ramah, seru, kaget." },
{ to: "Mrs. Vani", body: "Mrs. Vani, terima kasih sudah menjadi orang tua di sekolah sekaligus guru yang membimbing saya, sabar menjaga berlianmu ini. We love u Mrs. Selalu jaga kesehatan supaya bisa terus berbagi ilmu." },
{ to: "Semua guru", body: "Terima kasih atas ilmu yang diberikan semoga menjadi ladang pahala untuk para guru yang hebat." },

/* ===== Baris 197 ===== */
{ to: "Semua guru", body: "Awalnya merasa perlu beradaptasi dengan lingkungan dan cara mengajar yang baru. Namun, seiring berjalannya waktu, saya mulai mengenal karakter para guru dan mendapatkan banyak pengalaman serta pelajaran baru." },
{ to: "Semua guru", body: "Terima kasih kepada Bapak/Ibu guru yang sudah mengajar dan membimbing kami selama ini. Setiap ilmu, nasihat, dan pengalaman yang diberikan sangat berarti bagi kami. Semoga Bapak/Ibu selalu diberikan kesehatan dan tetap semangat dalam mendidik generasi berikutnya." },
{ to: "Semua guru", body: "Semoga Bapak/Ibu guru selalu diberikan kesabaran dalam menghadapi berbagai karakter murid. Mohon maaf apabila selama ini kami pernah melakukan kesalahan, baik disengaja maupun tidak. Teruslah menjadi sosok yang menginspirasi dan membawa pengaruh baik bagi banyak orang." },

/* ===== Baris 198 ===== */
{ to: "Semua guru", body: "Senang, seru." },
{ to: "Semua guru", body: "Jangan lelah untuk membimbing generasi yang butuh cahayamu, Bu. Semangat terus dan sehat selalu." },
{ to: "Semua guru", body: "Semoga keikhlasanmu dalam mengajar dan memberi kami bekal untuk berjalan di kehidupan ini memberikan kebahagiaan dan pahala untuk Ibu/Bapak. Semoga apapun yang diajarkan dapat terus berguna bagi kehidupan. Terima kasih Ibu/Bapak." },

/* ===== Baris 199 ===== */
{ to: "Semua guru", body: "Seru, seneng dan cara mengajar yang mudah buat dipahami." },
{ to: "Semua guru", body: "Terima kasih sudah menjadi guru yang sabar dalam mendidik kami hingga saat ini, ga kerasa waktu jalan begitu cepat sampai bentar lagi udah menjadi alumni pengkolan, bakal kangen banget sama masa ini apalagi diajar guru-guru yang selalu bikin ketawa, guru yang bikin suasana menjadi tenang tanpa ada rasa takut, terima kasih doa baik buat semua guru pengkolan." },
{ to: "Semua guru", body: "Terima kasih buat semua guru di pengkolan atas ilmu yang diberikan selama 3 tahun ini, sehat dan panjang umur selalu." },

/* ===== Baris 200 ===== */
{ to: "Semua guru", body: "Awalnya saya merasa sedikit gugup karena belum mengenal cara mengajar beliau. Namun, setelah mengikuti pembelajaran, ternyata beliau cukup menyenangkan, ramah, dan mampu menyampaikan materi dengan baik sehingga suasana kelas terasa nyaman." },
{ to: "Semua guru", body: "Terima kasih sudah menjadi guru yang tidak hanya mengajarkan ilmu, tetapi juga memberikan banyak pelajaran dan pengalaman berharga. Semoga Bapak Ibu selalu diberikan kesehatan, kesabaran, dan kebahagiaan. Tetaplah menjadi guru yang menginspirasi dan memberikan kesan baik bagi setiap murid." },
{ to: "Semua guru", body: "Terima kasih kepada seluruh guru yang telah membimbing, mendidik, dan membagikan ilmu dengan penuh kesabaran. Maaf jika selama ini masih banyak sikap dan perkataan kami yang kurang berkenan. Semoga segala ilmu yang diberikan menjadi amal jariyah dan Bapak/Ibu selalu diberikan kesehatan serta kebahagiaan. Tetaplah menjadi sosok hebat yang menginspirasi generasi berikutnya." },

/* ===== Baris 201 ===== */
{ to: "Semua guru", body: "Awalnya agak gugup karena belum kenal sama karakter masing-masing gurunya, tapi ternyata guru-gurunya asik, ramah, dan cara ngajarnya juga mudah dipahami." },
{ to: "Semua guru", body: "Terima kasih telah menjadi guru terbaik dalam hidup saya. Kesabaran dan ketulusan Bapak/Ibu akan selalu saya kenang." },
{ to: "Semua guru", body: "Pahlawan tanpa tanda jasa sejati adalah Bapak/Ibu yang selalu hadir dengan senyuman meski lelah tak terlihat." },

/* ===== Baris 202 ===== */
{ to: "Semua guru", body: "Culture shock karena berbeda dengan SMP saya." },
{ to: "Semua guru", body: "Selamat berjuang, sukses." },
{ to: "Semua guru", body: "Selamat berjuang, sukses." },

/* ===== Baris 203 ===== */
{ to: "Semua guru", body: "Tegang." },
{ to: "Semua guru", body: "Terima kasih atas ilmu dan kesabarannya. Semoga selalu sehat dan bahagia." },
{ to: "Semua guru", body: "Terima kasih atas semua ilmu dan bimbingannya, Bapak/Ibu." },

/* ===== Baris 204 ===== */
{ to: "Semua guru", body: "Ada serunya, lucunya, ada juga yang bikin semangat belajar naik." },
{ to: "Semua guru", body: "Di hati saya semua guru itu guru terbaik, ngga ada guru yang lebih baik dari guru lainnya, karena setiap guru punya cara, perjuangan, dan jasa masing-masing dalam membentuk diri kita." },
{ to: "Semua guru", body: "Untuk seluruh Bapak dan Ibu Guru terkhususnya tenaga pengajar SMKN 2 Cikarang Barat, saya ingin mengucapkan terima kasih yang sebesar-besarnya atas segala ilmu, kesabaran, ketulusan, dan pengorbanan yang telah diberikan selama ini. Bagi saya, setiap guru adalah guru terbaik dengan cara dan perjuangannya masing-masing. Terima kasih telah membimbing, mendidik, serta menjadi bagian dari perjalanan saya hingga menjadi pribadi yang lebih baik. Mohon maaf atas segala perkataan dan perbuatan yang mungkin pernah kurang berkenan. Semoga Bapak dan Ibu Guru selalu diberikan kesehatan, kebahagiaan, dan keberkahan. Semoga setiap ilmu dan kebaikan yang diberikan menjadi amal jariyah yang tak pernah terputus. Terima kasih telah menjadi bagian dari perjalanan hidup saya, selamat hari guru nasional." },

/* ===== Baris 205 ===== */
{ to: "Semua guru", body: "Awalnya mungkin masih malu-malu dan harus banyak beradaptasi. Tapi ternyata, banyak hal seru yang saya temukan di sini. Bertemu guru-guru dengan karakter yang berbeda-beda, cara mengajar yang unik, dan pastinya banyak pengalaman baru. Ternyata, belajar di sekolah bukan cuma soal pelajaran, tetapi juga tentang mengenal diri sendiri dan menemukan banyak hal baru." },
{ to: "Bu Shelvy & Bu Inggit", body: "Untuk Bu Shelvy dan Bu Inggit, terima kasih sudah menjadi guru yang bukan hanya mengajar, tetapi juga selalu memberikan dukungan dan semangat. Terima kasih sudah percaya dengan kemampuan saya dan selalu mendorong saya untuk berani mencoba hal-hal baru. Mungkin bagi Ibu itu hal sederhana, tetapi bagi saya dukungan tersebut sangat berarti. Semoga Ibu selalu sehat dan bahagia. Jangan pernah bosan untuk terus menginspirasi, karena ada banyak murid yang merasa beruntung bisa diajar oleh Ibu." },
{ to: "Semua guru", body: "Untuk semua Bapak dan Ibu guru, terima kasih sudah sabar menghadapi kami dengan segala tingkah dan keunikannya. Maaf kalau terkadang kami suka bikin kesal, kurang fokus, atau sulit diatur. Tapi percayalah, setiap ilmu dan nasihat yang diberikan akan selalu kami bawa sebagai bekal ke depannya. Semoga Bapak dan Ibu selalu sehat, bahagia, dan tetap semangat mengajar. Terima kasih sudah menjadi bagian dari cerita perjalanan kami di sekolah ini." },

/* ===== Baris 206 ===== */
{ to: "Semua guru", body: "Kaget ternyata kalo ngasi tugas banyak." },
{ to: "Semua guru", body: "BEST." },
{ to: "Semua guru", body: "Jangan terlalu dikejar-kejar catetan Bu." },

/* ===== Baris 207 ===== */
{ to: "Miss Vani", body: "Miss Vani." },
{ to: "Bu Trimah", body: "Sehat selalu Bu Trimah." },
{ to: "Semua guru", body: "Love." },

/* ===== Baris 208 ===== */
{ to: "Semua guru", body: "Setiap penjelasan ilmu yang diberi merasa sangat berharga." },
{ to: "Guru Pemasaran", body: "Teruntuk Ibu Bapak guru pemasaran, terima kasih atas semua ilmu dan waktu yang sudah dikeluarkan untuk kami, terima kasih karena sudah selalu membimbing dan memberi nasihat serta kekompakan yang kalian tunjukkan kepada kami. Kami sangat bangga karena bisa dibimbing dan diarahkan oleh Bapak Ibu guru, semua guru adalah guru terbaik bagi kami, sampai bertemu di akhir masa PKL kami." },
{ to: "Semua guru", body: "Selamat hari guru Bapak Ibu SMKN 2 Cikarang Barat. Terima kasih banyak atas senyuman kesenduan yang diberikan kepada kami. Setiap nasihat akan selalu kami simpan seperti bintang yang akan terus menerangi perjalanan kami, terima kasih atas segala lelah yang tidak pernah dikeluhkan dihadapan kami, kami akan sangat selalu merindukan canda tawa Bapak Ibu guru, tetap bahagia dimanapun dan kapanpun berada ya." },

/* ===== Baris 209 ===== */
{ to: "Semua guru", body: "Ya gitu lah." },
{ to: "Semua guru", body: "Sehat selalu." },
{ to: "Semua guru", body: "Panjang umur." },

/* ===== Baris 210 ===== */
{ to: "Semua guru", body: "Ternyata guru nya baik-baik semua." },
{ to: "Bu Putri", body: "Buat Bu Putri, bahagia selalu Ibu." },
{ to: "Semua guru", body: "Untuk semua guru yang telah mengajar di SMKN 2 Cikarang Barat, semangat terus dan terima kasih banyak telah mengajar kami dengan sabar dan sangat baik." },

/* ===== Baris 211 ===== */
{ to: "Semua guru", body: "First impression diajar guru di SMKN 2 Cikarang Barat terasa terarah, disiplin, dan berorientasi pada kesiapan belajar maupun praktik, dengan penekanan pada sikap sopan santun, ketelitian menyimak arahan, serta tanggung jawab dalam mengikuti aturan dan tugas di kelas." },
{ to: "Bu Diarti", body: "Teruntuk Bu Diarti, terima kasih banyak atas kesabaran, ketulusan, dan cara mengajar Ibu yang selalu membuat materi terasa lebih mudah dipahami dan menyenangkan untuk dipelajari. Tidak hanya ilmu di kelas yang sangat bermanfaat, tetapi juga keteladanan, motivasi, dan perhatian yang Ibu berikan benar-benar membentuk semangat belajar serta kedisiplinan kami. Semoga Ibu selalu diberikan kesehatan, kebahagiaan, dan keberkahan dalam setiap langkah mendidik generasi penerus." },
{ to: "Semua guru", body: "Terima kasih banyak kepada seluruh Bapak dan Ibu guru atas dedikasi, kesabaran, dan ketulusan dalam membimbing serta membagikan ilmu kepada kami setiap hari. Setiap arahan, nasihat, dan keteladanan yang Bapak dan Ibu berikan tidak hanya membantu kami memahami pelajaran, tetapi juga membentuk karakter, kedisiplinan, dan kesiapan kami untuk melangkah ke masa depan. Semoga Bapak dan Ibu guru selalu diberikan kesehatan, kekuatan, dan keberkahan dalam menjalankan pengabdian yang mulia ini." },

/* ===== Baris 212 ===== */
{ to: "Semua guru", body: "Baik banget tapi sekalinya ngasih tugas langsung banyak." },
{ to: "Semua guru", body: "Semoga beliau-beliau semua selalu sehat sehingga bisa mengajar kita sampai seterusnya." },
{ to: "Semua guru", body: "Sama seperti yang di atas, terima kasih." },

/* ===== Baris 213 ===== */
{ to: "Semua guru", body: "Kesan pertama saya, guru-guru di SMKN 2 Cikarang Barat memiliki cara mengajar dan karakter yang berbeda-beda, awalnya mungkin masih perlu beradaptasi, tetapi seiring waktu berjalan, saya jadi lebih mengenal mereka dan mendapatkan banyak ilmu serta pengalaman baru yang sebelumnya tidak pernah saya temui, dan dapat menjadi pelajaran dalam kehidupan sehari-hari saya." },
{ to: "Semua guru", body: "Terima kasih sudah sabar dalam mengajar dan membimbing saya. Semoga selalu diberikan kesehatan, kebahagiaan, dan tetap semangat dalam mendidik murid-muridnya." },
{ to: "Semua guru", body: "Terima kasih atas ilmu, kesabaran, dan segala usaha yang sudah diberikan kepada kami. Mohon maaf apabila selama ini ada perkataan atau perbuatan saya maupun kami yang kurang berkenan, baik disengaja maupun tidak. Semoga semua guru selalu diberikan kesehatan, kebahagiaan, rezeki, dan tetap semangat dalam membimbing kami." }
];