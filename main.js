const gens = [
  { name: "Baby Boomers", start: 1946, end: 1964, surname: "Boomers" },
  { name: "Génération X", start: 1965, end: 1980, surname: "Xennials" },
  { name: "Génération Y", start: 1981, end: 1996, surname: "Millennials" },
  { name: "Génération Z", start: 1997, end: 2012, surname: "Zoomers" },
  { name: "Génération Alpha", start: 2013, end: 2026, surname: "Alphas" },
];

document.querySelector("#year").max = new Date().getFullYear();

document.querySelector("#start").addEventListener("click", () => {
  const day = document.querySelector("#day").value;
  const month = document.querySelector("#month").value;
  const year = Number(document.querySelector("#year").value);

  const birthDate = new Date(year, month - 1, day);
  renderEvents(birthDate);
  if (day && month && year) {
    document.querySelector("#text").style.opacity = "1";
    document.querySelector("#events").style.opacity = "1";

    const gen = gens.find((g) => year >= g.start && year <= g.end);

    document.querySelector("#gen").textContent = gen.name;
    document.querySelector("#surname").textContent = gen.surname;
    let desc = document.querySelector("#desc");
    switch (gen.name) {
      case "Baby Boomers":
        desc.textContent =
          "Cette génération est naît durant la période de forte croissance démographique qui a suivi la Seconde Guerre mondiale. Elle a connu l'essor de la télévision, de la consommation de masse et les débuts de l'informatique.";
        break;

      case "Génération X":
        desc.textContent =
          "Cette génération a grandi durant les dernières décennies du XXe siècle. Elle a vu apparaître les ordinateurs personnels, les consoles de jeux, puis les premiers pas d'Internet.";
        break;

      case "Génération Y":
        desc.textContent =
          "Cette génération a grandi avec le développement d'Internet, des téléphones portables et des réseaux sociaux. Elle a accompagné la transition vers le monde numérique.";
        break;

      case "Génération Z":
        desc.textContent =
          "Cette génération naît alors que les communications numériques sont déjà bien installées dans la société. Les Zoomers sont donc, avec les Millennials tardifs et les membres de la génération Alpha, des enfants du numérique.";
        break;

      case "Génération Alpha":
        desc.textContent =
          "Cette génération est la première à grandir entièrement dans un monde connecté. Elle évolue dès son plus jeune âge avec les smartphones, les objets connectés, l'intelligence artificielle et les plateformes numériques.";
        break;
    }
  }
});

const events = [
  {
    name: "le premier iPhone",
    date: new Date(2007, 5, 29),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPl5rMRzgMrsTSO7ESzvA0BzG6bPPsJ0F4aL-QNriQPA&s=10",
  },
  {
    name: "la Nintendo Switch",
    date: new Date(2017, 2, 3),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIl3LTKG7lOTZcNLmG1YEWQ6mYkrHALsnntX78zb_bvnAjUv4nbI3jMsW&s=10",
  },
  {
    name: "la chute du mur de Berlin",
    date: new Date(1989, 10, 9),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Berlinermauer.jpg",
  },
  {
    name: "Windows 95",
    date: new Date(1995, 7, 24),
    image: "https://i.redd.it/4dmktwyj80lf1.jpeg",
  },
  {
    name: "la PlayStation",
    date: new Date(1994, 11, 3),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/PSX-Console-wController.png",
  },
  {
    name: "Facebook",
    date: new Date(2004, 1, 4),
    image:
      "https://focus.huffingtonpost.fr/2022/07/24/0/0/0/0/1024/682/60/0/1fbe55f_1658681774108-5c9342d22400003500c77788.jpeg",
  },
  {
    name: "le premier pas sur la Lune",
    date: new Date(1969, 6, 20),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZJXHMBwDRVL3KrX0PqxtR9BXkqbHnY3KiGubpwdlMg&s=10",
  },
  {
    name: "ChatGPT",
    date: new Date(2022, 10, 30),
    image:
      "https://cdn.prod.website-files.com/66eaebf7f23c6ba827f8ce13/6842d25f92f05eb02f0a95c4_67fe8b49a3c31836727db4d0_image-708.webp",
  },
  {
    name: "Google",
    date: new Date(1998, 8, 4),
    image: "https://miro.medium.com/1*F6jND4tTSBXOmJWI368mqg.png",
  },
  {
    name: "YouTube",
    date: new Date(2005, 1, 14),
    image:
      "https://preview.redd.it/youtube-in-2005-v0-bz9rv3aepi9c1.jpeg?auto=webp&s=1869f691714a3b09fb449e9d47855b0caa169f23",
  },
  {
    name: "la Wii",
    date: new Date(2006, 10, 19),
    image: "https://cdn.pji.nu/product/standard/280/48126.jpg",
  },
  {
    name: "Minecraft",
    date: new Date(2011, 4, 17),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1j-HjNKS6TLZbOSAmIFiIfSjz3bnP95FYAHzhQNP_sUE-nlD02N6Ummm&s=10",
  },
  {
    name: "Instagram",
    date: new Date(2010, 9, 6),
    image:
      "https://www.researchgate.net/publication/338005809/figure/fig6/AS:837372216348675@1576656502361/nstagrams-homepage-2010-Instagram-was-founded-in-2010-by-Kevin-Systrom-and-Mike.png",
  },
  {
    name: "Twitter",
    date: new Date(2006, 2, 21),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmG10OX-IAJ48uu_XxVV4df_2iVQr7mV_3uH8iBswuiBUomf4yNrgFWU8&s=10",
  },
  {
    name: "la PS5",
    date: new Date(2020, 10, 19),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4P_EEmHziQGJ_bs5XJhoIhQ741E3NOHiuIEOgH0WATw&s=10",
  },
  {
    name: "la Xbox 360",
    date: new Date(2005, 10, 22),
    image:
      "https://hiscoga.wordpress.com/wp-content/uploads/2016/10/61yx3urbbnl-_sl1000_.jpg?w=840",
  },
  {
    name: "Netflix (streaming)",
    date: new Date(2007, 0, 16),
    image:
      "https://substackcdn.com/image/fetch/$s_!oJu-!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F719aa264-8db1-4a9e-b9a5-ef348ec9e078_1584x974.jpeg",
  },
  {
    name: "World of Warcraft",
    date: new Date(2004, 10, 23),
    image: "https://i.redd.it/x0vdmpkpwtjd1.jpeg",
  },
  {
    name: "Spotify",
    date: new Date(2008, 9, 7),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1QmmhQ63H79Hd56ZiOO8NnocxGpHNeGNhvJimQ_BDog6csMaMdPaE6Ro&s=10",
  },
  {
    name: "la première Xbox",
    date: new Date(2001, 10, 15),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0uw-iS5CfYAYuc2s1fX6DtmJc2H14reqNJi5CDtsP6g&s=10",
  },
  {
    name: "Snapchat",
    date: new Date(2011, 8, 1),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_Oqc1xGbJLQga72DXO5XU31oxadI_-loSKvWxesn2Q&s",
  },
  {
    name: "l'iPad",
    date: new Date(2010, 3, 3),
    image:
      "https://static.wikia.nocookie.net/ipod/images/2/25/Ipad1ios4.jpg/revision/latest?cb=20111212021842",
  },
  {
    name: "la pandémie de Covid-19",
    date: new Date(2020, 2, 11),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LFPL6l7L5qa4wLvyKV3Gb2Bq8AI7z8fu_608_ibTog&s=10",
  },
  {
    name: "le lecteur CD",
    date: new Date(1982, 9, 1),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Marantz_CD-52-130314-0001EC.jpg",
  },
  {
    name: "la cassette VHS",
    date: new Date(1976, 0, 1),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_cCFrx21EXlNiGegDHtOatvVQd4hpfVfun3MTk5fDQ&s=10",
  },
  {
    name: "le premier ordinateur grand public",
    date: new Date(1977, 5, 10),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Apple_II_plus.jpg/250px-Apple_II_plus.jpg",
  },
  {
    name: "Internet",
    date: new Date(1969, 9, 29),
    image:
      "https://img.magnific.com/vecteurs-premium/internet_1271422-15071.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "le GPS opérationnel",
    date: new Date(1995, 0, 1),
    image:
      "https://www.sciencesetavenir.fr/assets/img/2023/10/27/cover-r4x3w1200-653bc4f6e3a36-010-arp11a02-073.jpg",
  },
  {
    name: "le Nokia 3310",
    date: new Date(2000, 9, 12),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9l9CkZ-Wqc5JHqQTAHD4Hy_L6tNL5AnphgOFXCKZ-Zg&s=10",
  },
  {
    name: "le tunnel sous la Manche",
    date: new Date(1994, 4, 6),
    image:
      "https://www.radiofrance.fr/pikapi/images/c11410b8-da6a-4e32-b0f9-cd210d0a095b/2048",
  },
  {
    name: "la Nintendo 64",
    date: new Date(1997, 8, 1),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/N64-Console-Set.png/500px-N64-Console-Set.png",
  },
  {
    name: "la Gameboy",
    date: new Date(1990, 8, 28),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Game-Boy-Original.jpg",
  },
  {
    name: "le Minitel",
    date: new Date(1980, 6, 1),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Minitel_terminal.jpg",
  },
  {
    name: "la Gamegear",
    date: new Date(1991, 6, 1),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sega-Game-Gear-WB.png/1280px-Sega-Game-Gear-WB.png",
  },
  {
    name: "Skyblog",
    date: new Date(2002, 11, 17),
    image:
      "https://images.rtl.fr/~c/770v513/rtl/www/1599045-skyrock-a-annonce-la-fin-des-skyblogs-pour-aout-prochain.jpg",
  },
  {
    name: "MSN Messenger",
    date: new Date(1999, 6, 22),
    image:
      "https://cdn.prod.website-files.com/6179a66d5f9cc70024c61878/6179a66e5f9cc70024c6cee8_what-happened-to-msn-messenger1%20(1)%20(1).jpeg",
  },
  {
    name: "l'ADSL",
    date: new Date(1999, 0, 1),
    image:
      "https://www.zdnet.fr/wp-content/uploads/zdnet/2024/02/Netissimo20ADSL20620-1.jpg",
  },
  {
    name: "la fibre optique",
    date: new Date(2013, 0, 1),
    image: "https://achicourt.fr/wp-content/uploads/2018/12/fibre-optique2.jpg",
  },
  {
    name: "MySpace",
    date: new Date(2003, 7, 1),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2PJ1vqPxh2vIzRUIyarGy1GSwYGXGEbkOAxg9Wuiuw&s=10",
  },
  {
    name: "Viadeo",
    date: new Date(2004, 0, 1),
    image:
      "https://i.f1g.fr/media/figaro/1200x630_crop/2016/05/20/XVMd635d08a-1eb0-11e6-9ee6-ec20862de658.jpg",
  },
  {
    name: "Jeuxvideos.com",
    date: new Date(1997, 0, 1),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjw7VOkqeW0_ODf0Iwkp9G7R2xcqu5rEsL0SiuULyiSB3Z6P9G573apgU&s=10",
  },
  {
    name: "Dofus",
    date: new Date(2004, 8, 1),
    image:
      "https://img.lemde.fr/2016/02/05/0/0/1279/695/664/0/75/0/bdb9c3e_22049-xvhf08.jpg",
  },
  {
    name: "le Nokia 3330",
    date: new Date(2001, 8, 1),
    image: "https://files.gsmchoice.com/phones/nokia-3330/nokia-3330-01.jpg",
  },
  {
    name: "le Trium",
    date: new Date(1999, 0, 1),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlawdeCfD0tfs8upwXeKFlaziFp0c89Nqg1vQhLFiCag&s=10",
  },
  {
    name: "Pong",
    date: new Date(1972, 8, 29),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2z4h0uXNQ4Dq87RKErf4_WZ476M_CeBz1jnJLp5cog&s=10",
  },
  {
    name: "la Super Nintendo",
    date: new Date(1992, 3, 11),
    image:
      "https://m.media-amazon.com/images/I/81SVwPdq3tL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "la Nintendo DS",
    date: new Date(2005, 2, 11),
    image:
      "https://img.lemde.fr/2024/11/15/0/100/600/400/1440/960/60/0/4c0e420_1731689223419-nintendo-ds.jpg",
  },
  {
    name: "Star Wars",
    date: new Date(1977, 8, 11),
    image:
      "https://images.rtl.fr/~c/770v513/rtl/www/1255491-luke-skywalker-la-princesse-leia-et-han-solo-dans-un-nouvel-espoir.jpg",
  },
  {
    name: "Pokémon",
    date: new Date(1999, 9, 5),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfUS3c2sLRQOS39IWxKRAeAcAG6cTWczkXS-kpLr21wFyASwtMPSDIpN85&s=10",
  },
  {
    name: "Wikipédia",
    date: new Date(2001, 0, 15),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Wikipedia-logo-v2-square.svg/1920px-Wikipedia-logo-v2-square.svg.png",
  },
  {
    name: "le MCU",
    date: new Date(2008, 3, 30),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Marvel_Cinematic_Universe_logo_2.png",
  },
  {
    name: "la Gamecube",
    date: new Date(2002, 4, 3),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/GameCube-Console-Set.png/1920px-GameCube-Console-Set.png",
  },
  {
    name: "le Walkman",
    date: new Date(1979, 0, 1),
    image:
      "https://cdn-s-www.bienpublic.com/images/677EF80F-4E3D-4D48-B153-ED6816EBC7E9/NW_raw/le-tout-premier-walkman-signe-sony-est-sorti-au-japon-le-1-er-juillet-1979-photo-sony-1563125160.jpg",
  },
  {
    name: "le Tamagotchi",
    date: new Date(1996, 0, 1),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqp7QXeTmBSHqt15X-BWKNArqWmwEfJGmOHsZxXmNWtwcx5fPxOPqIkmw&s=10",
  },
  {
    name: "Skype",
    date: new Date(2003, 0, 1),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1S2zG_wHWhy7jvnOMmADac4CwwqvrJQ8XDC0DjqpSn_MoatV37dK7k0&s=10",
  },
  {
    name: "le premier IBM PC",
    date: new Date(1981, 0, 1),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/IBM_PC-IMG_7271_%28transparent%29.png/1920px-IBM_PC-IMG_7271_%28transparent%29.png",
  },
  {
    name: "la disquette Sony",
    date: new Date(1982, 0, 1),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Diskette_ubt-edit.png?utm_source=fr.wikinews.org&utm_campaign=index&utm_content=original",
  },
  {
    name: "le Commodore 64",
    date: new Date(1982, 7, 1),
    image:
      "https://pictures.laprovence.com/cdn-cgi/image/width=800,format=auto,quality=80,/media/relaxnews/2017-08/2017-08-13/c64c_system.92a34093623.w768.jpg",
  },
  {
    name: "le téléphone de voiture",
    date: new Date(1986, 0, 1),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdY3zX2Y7eK9zhO9fr_VlhLudwZ7hsnA4gTXdczFicIsql36kNXNS6FFBa&s=10",
  },
  {
    name: "l'Atari 2600",
    date: new Date(1981, 8, 1),
    image:
      "https://i.pcmag.com/imagery/articles/05swvjW1eNFvD9nbbWBSrcz-4..v1662580227.jpg",
  },
  {
    name: "le modem 56K",
    date: new Date(1997, 0, 1),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6f07xJgV0UuO7cFC8cE-toF6IRA-D1IuaAEdqxa27JG5qDxqrbXHktQ&s=10",
  },
  {
    name: "Windows 11",
    date: new Date(2021, 5, 28),
    image:
      "https://msftstories.thesourcemediaassets.com/sites/612/2021/06/Hero-Bloom-Logo.jpg",
  },
  {
    name: "Windows 10",
    date: new Date(2015, 6, 29),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-oio8UezU3SZ-DTnsrL2RrZFWRJY7O6sopU_wbN1MgQ&s=10",
  },
  {
    name: "le câble HDMI",
    date: new Date(2002, 0, 1),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pb6ZldxQKkL-VEp8X153Xv7ziU5_rqp3d9sO8QYOGw&s=10",
  },
  {
    name: "Windows XP",
    date: new Date(2001, 9, 25),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Windows_XP_SP2_boot_screen.png",
  },
  {
    name: "le lecteur DVD",
    date: new Date(1997, 0, 1),
    image: "https://www.homecine-compare.com/images/pdts/xl/PHIDVP3010.jpg",
  },
  {
    name: "la Dreamcast",
    date: new Date(1999, 9, 14),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWw5YBELLISzFd8LFhfCi_nXoAQlcDT_9l7vwHJ_ZfoQ&s=10",
  },
  {
    name: "l'Ipod",
    date: new Date(2001, 9, 23),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IPod_classic.png",
  },
  {
    name: "le téléphone portable",
    date: new Date(1973, 3, 3),
    image:
      "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fphonecharacteristics.com%2Flink_img%2F57161445fc1c9e917512.jpg&sp=1784991113T84e417c5c22db0389a4856fe457723ccf3023b0f5ef2a8aec93b8b6a3e788bd4",
  },
  {
    name: "la 2G (GSM)",
    date: new Date(1991, 0, 1),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/GSMLogo.svg/1920px-GSMLogo.svg.png",
  },
  {
    name: "la 4G",
    date: new Date(2008, 0, 1),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Samsung_4G_LTE_modem-2.jpg/500px-Samsung_4G_LTE_modem-2.jpg",
  },
  {
    name: "la 5G",
    date: new Date(2020, 0, 1),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Antennes_5G_o2_Munich.jpg/1920px-Antennes_5G_o2_Munich.jpg",
  },
  {
    name: "le Blackberry Curve",
    date: new Date(2007, 4, 3),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Bb-curve-8520%281%29.jpg",
  },
  {
    name: "le passage à l'Euro",
    date: new Date(2002, 0, 1),
    image:
      "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fcdn.britannica.com%2F77%2F237877-138-64FBA19C%2Fhistory-of-the-Euro-currency.jpg&sp=1784992467T5f41d5630f59b6851698d55ea10ee36bd57e4d29e931fd5316daea0e2b87973b",
  },
  {
    name: "le Metaverse",
    date: new Date(2021, 9, 28),
    image:
      "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2Fv2%2FD4D10AQGZx37_6rujOQ%2Fimage-shrink_1280%2Fimage-shrink_1280%2F0%2F1734274818820%3Fe%3D2147483647%26v%3Dbeta%26t%3DMwMXc-Dg1aPTBrivoyOuiav0fRdJKER_sSX_dt9ODPM&sp=1784992639Ta70cb18b26f93952aded7e27a3bf229b33b443dd3d12ee37140d4b5cac91f4e7",
  },
  {
    name: "le casque VR",
    date: new Date(2016, 2, 28),
    image:
      "https://images.openai.com/static-rsc-4/pnbHKkLs013BJSD67H26f3pcdBP5LZMl-7B5nko85ads2vjqWJsc7aekKFjBpbXG6OnJ2wA16l3Ldi7UR5C0gKlZgnXfLOa0PVi7af-YU85gJvXV-pmMbKoyniLmT0BDZWkbeUqC7jOEbPbNbYUVf-MgbGSPfGAfDnqfBb07-3jWq91L8U6BRUpb5lRzwNSO?purpose=fullsize",
  },
  {
    name: "le bipeur",
    date: new Date(1994, 8, 1),
    image:
      "https://www.annuaire-inverse-france.com/s/i/actu/tamtam-taatoo-kobby-big.jpg",
  },
  {
    name: "le Kodak jetable",
    date: new Date(1987, 0, 1),
    image: "https://lasonotheque.org/museumofsounds/webp/40_1.webp?v=293",
  },
  {
    name: "les Pogs",
    date: new Date(1995, 0, 1),
    image:
      "https://offloadmedia.feverup.com/bordeauxsecret.com/wp-content/uploads/2021/10/07055438/shutterstock_1685140069-768x512.png",
  },
  {
    name: "la Télévision Numérique Terrestre",
    date: new Date(2005, 2, 31),
    image:
      "https://www.startpage.com/av/proxy-image?piurl=http%3A%2F%2Fnews.aniamey.com%2Fimg_photos%2FL%2Ftnt-television-numerique-terrestre-700x352.png&sp=1784994296Tb7ca7f4633604af1575708ae90db19f3fae4eba7a47be972961e8c534e7a1e83",
  },
  {
    name: "Métropole télévision 6 (M6)",
    date: new Date(1987, 2, 1),
    image:
      "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Flogos%2Fimages%2Fd%2Fdd%2FM6_1987_logo.jpg%2Frevision%2Flatest%3Fcb%3D20160624155944%26path-prefix%3Dfr&sp=1784994359T320ee445736005fbfaf21bbf7fcf599720c8617de18713f7118c54a9bd3acf08",
  },
  {
    name: "la télé HD",
    date: new Date(1998, 0, 1),
    image:
      "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1331151042%2Fphoto%2Fan-old-black-tv-is-on-the-bedside-table-in-the-apartment-vintage-tvs-1980s-1990s-2000s.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DDXssKwxXm9l_bycrsrofPyVVInX8f4lkC-5YiSt5khE%3D&sp=1784994540T0cd2a74f7f7b9614871fc45752f8c7c3233aa18e76c849856a19076f5e187d9f",
  },
];

function getDiff(eventDate, birthDate) {
  const when = eventDate < birthDate ? "après" : "avant";

  const early = eventDate < birthDate ? eventDate : birthDate;
  const late = eventDate < birthDate ? birthDate : eventDate;

  let years = late.getFullYear() - early.getFullYear();
  let months = late.getMonth() - early.getMonth();

  if (late.getDate() < early.getDate()) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, when };
}

function createCard(event, birthDate) {
  const { years, months, when } = getDiff(event.date, birthDate);

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = event.image;
  img.alt = event.name;

  if (event.name === "le modem 56K") {
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
      const audio = new Audio("modem.mp3");
      audio.play();
    });
  }
  if (event.name === "le lecteur CD") {
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
      const audio = new Audio("cd.mp3");
      audio.play();
    });
  }
  if (event.name === "la disquette Sony") {
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
      const audio = new Audio("disquette.mp3");
      audio.play();
    });
  }
  if (event.name === "le bipeur") {
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
      const audio = new Audio("bipeur.mp3");
      audio.play();
    });
  }
  if (event.name === "le Kodak jetable") {
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
      const audio = new Audio("kodak.mp3");
      audio.play();
    });
  }
  if (event.name === "la cassette VHS") {
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
      const audio = new Audio("vhs.mp3");
      audio.play();
    });
  }

  const p = document.createElement("p");
  const span = document.createElement("span");
  span.classList.add("diff", when === "avant" ? "before" : "after");

  let text = "";
  if (years > 0) {
    text += `${years} an${years > 1 ? "s" : ""}`;
  }
  if (months > 0) {
    text += `${text ? " et " : ""}${months} mois`;
  }
  if (!text) {
    text = "le même mois";
  }
  span.textContent = `${text} ${when}`;

  p.append(span, ` ${event.name}`);
  card.append(img, p);

  return card;
}

function renderEvents(birthDate) {
  const beforeList = document.querySelector("#before-list");
  const afterList = document.querySelector("#after-list");
  beforeList.innerHTML = "";
  afterList.innerHTML = "";

  const before = events.filter((e) => e.date < birthDate);
  const after = events.filter((e) => e.date >= birthDate);

  before.sort((a, b) => a.date - b.date);
  after.sort((a, b) => a.date - b.date);

  before.forEach((event) => beforeList.append(createCard(event, birthDate)));
  after.forEach((event) => afterList.append(createCard(event, birthDate)));
}
