var Katamutiara = []
Katamutiara[0] = "Kebebasan bukanlah <br />mengizinkanmu untuk melakukan<br />segala yang kau inginkan,<br />melainka menhajarkanmu untuk<br />tidak melakukan apa yang tidak<br />kau inginkan.";
Katamutiara[1] = "Jika kita mau sedikit<br />menurunkan ego,mundur sedikit<br />serta mengalah,<br />kita bisa menyelamatkan yang lain<br />diam bukan berarti salah,<br />mengalah bukan berarti kalah.";
Katamutiara[2] = "Seberat apapun yang kita hadapi nanti,<br />aku mohon jangan pernah<br />lelah dan menyerah.<br />tetaplah berjalan bersama,ingatlah<br />pertemuan kita,ingatlah Bagaimana<br />perjuangan kita hingga saat ini.<br /><br />- cethar.";
Katamutiara[3] = "<h2>Perbanyak istigfar</h2>Barangsiapa senantiasa beristigfar,niscanya allah SWT<br />menjadikan setiap kesedihannya kelapangan,dan<br />menjadikan setiap kesempitannya jalan keluar,dan<br />akan diberinya rizki dari arah yang tidak disangka-sangka <br /><br />HR.Abu Daud.";
Katamutiara[4] = "Batas ku hanya<br /> untuk<br />mengagumimu,<br />bukan untuk<br />memiliki,karna<br />aku bukan orang<br />yang menurutmu<br />tepat.Dan tak<br />pantas untuk kau<br />miliki,karena aku<br />sadar,im not a<br />perfect person<br /> and you have the <br />right to.";
Katamutiara[5] = "Jika masa mudamu sering<br />di remehkan orang lain<br />maafkan mereka.<br />Tapi jangan lupa catat dan<br />ingat nama mereka,<br />untuk memotivasi dirimu<br />selalu menjadi lebih baik<br />dari mereka";
Katamutiara[6] = "<h2>Kamu tahu...?</h2>Pembalasan terbaik<br />bukanlah melakukan<br />tindakan yang sama<br />terhadap mereka yang<br />menyakiti,melainkan<br />tersenyum lalu pergi";
Katamutiara[7] = "Tanpa cinta,<br />kecerdasan itu<br />berbahanya.Dan tanpa<br />kecerdasan,<br />cinta itu tidak<br />cukup.<br /> <br /><h3>-BJ.Habibie</h3><br />Presiden ke-3 indonesia";
Katamutiara[8] = "<h2>AKHLAK PALING<br />MULIA<br /><br/><br /><br /><br />Akhlak yang paling mulia adalah menyapa mereka yang,<br />memutuskan silaturahmi,memneri kepada yang kikir<br />terhadamu,dam memaafkan merka yang menyalahimu<br />(HR ibnu Majah).";   
Katamutiara[9] = "<h2>SELEPAS MALAM<br>AKAN ADA SIANG<br />SELEPAS GELAP<br />AKAN ADA TERANG<br />SELEPAS KABUS<br />AKAN ADA CAHANYA<br /><br /><br />SABARLAH,SELEPAS UJIAN<br />MELANDA PASTI ADA<br/>KABAR YANG GEMBIRA</h2>.";
Katamutiara[10] = "He must return <br />.,when he longsn to be nagging me.<br />.";

function  katamutiara(){
	var randomkatamutiara = Math.floor(Math.random()*(Katamutiara.length));
	document.getElementById('p').innerHTML = Katamutiara[randomkatamutiara];
}

