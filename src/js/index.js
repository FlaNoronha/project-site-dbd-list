/* Quando clicarmos no button o tema troca de survivor para killer. Fazer as alterações de cor, background dos carts. Tbm preciso que mude o names, char-preview, links e description para o dos killers.
Objetivo 1 - quando clicar no button, adicionar a classe killer-mode no body para que os estilos mudem e o button mude pro logo do suvivor.
Objetivo 2 - Quando clicar no botão de troca, caso o body já tenha a classe killer-mode, remover a classe para mudar para o tema survivor.*/

//- passo 1: pegar no JS o elemento Html correspondente ao botão de troca de tema.
const buttonChangeTheme = document.getElementById("button-change-theme");

//- passo 2: pegar no JS o elemento Html correspondente ao body.
const body = document.querySelector("body");
//var do botão
const imageButtonChangeTheme = document.querySelector(".button");
//variavel nome
const names1 = document.querySelector(".names1");
const names2 = document.querySelector(".names2");
const names3 = document.querySelector(".names3");
const names4 = document.querySelector(".names4");
const names5 = document.querySelector(".names5");
const names6 = document.querySelector(".names6");
const names7 = document.querySelector(".names7");
const names8 = document.querySelector(".names8");
const names9 = document.querySelector(".names9");
const names10 = document.querySelector(".names10");
const names11 = document.querySelector(".names11");
const names12 = document.querySelector(".names12");
const names13 = document.querySelector(".names13");
const names14 = document.querySelector(".names14");
const names15 = document.querySelector(".names15");
const names16 = document.querySelector(".names16");
const names17 = document.querySelector(".names17");
const names18 = document.querySelector(".names18");
const names19 = document.querySelector(".names19");
const names20 = document.querySelector(".names20");
const names21 = document.querySelector(".names21");
const names22 = document.querySelector(".names22");
const names23 = document.querySelector(".names23");
const names24 = document.querySelector(".names24");
const names25 = document.querySelector(".names25");
const names26 = document.querySelector(".names26");
const names27 = document.querySelector(".names27");
const names28 = document.querySelector(".names28");
const names29 = document.querySelector(".names29");
const names30 = document.querySelector(".names30");
const names31 = document.querySelector(".names31");
const names32 = document.querySelector(".names32");
const names33 = document.querySelector(".names33");
const names34 = document.querySelector(".names34");
const names35 = document.querySelector(".names35");
const names36 = document.querySelector(".names36");
const names37 = document.querySelector(".names37");

//var char
const char1 = document.querySelector(".char1");
const char2 = document.querySelector(".char2");
const char3 = document.querySelector(".char3");
const char4 = document.querySelector(".char4");
const char5 = document.querySelector(".char5");
const char6 = document.querySelector(".char6");
const char7 = document.querySelector(".char7");
const char8 = document.querySelector(".char8");
const char9 = document.querySelector(".char9");
const char10 = document.querySelector(".char10");
const char11 = document.querySelector(".char11");
const char12 = document.querySelector(".char12");
const char13 = document.querySelector(".char13");
const char14 = document.querySelector(".char14");
const char15 = document.querySelector(".char15");
const char16 = document.querySelector(".char16");
const char17 = document.querySelector(".char17");
const char18 = document.querySelector(".char18");
const char19 = document.querySelector(".char19");
const char20 = document.querySelector(".char20");
const char21 = document.querySelector(".char21");
const char22 = document.querySelector(".char22");
const char23 = document.querySelector(".char23");
const char24 = document.querySelector(".char24");
const char25 = document.querySelector(".char25");
const char26 = document.querySelector(".char26");
const char27 = document.querySelector(".char27");
const char28 = document.querySelector(".char28");
const char29 = document.querySelector(".char29");
const char30 = document.querySelector(".char30");
const char31 = document.querySelector(".char31");
const char32 = document.querySelector(".char32");
const char33 = document.querySelector(".char33");
const char34 = document.querySelector(".char34");
const char35 = document.querySelector(".char35");
const char36 = document.querySelector(".char36");
const char37 = document.querySelector(".char37");

//var das descrições
const description1 = document.querySelector(".description1");
const description2 = document.querySelector(".description2");
const description3 = document.querySelector(".description3");
const description4 = document.querySelector(".description4");
const description5 = document.querySelector(".description5");
const description6 = document.querySelector(".description6");
const description7 = document.querySelector(".description7");
const description8 = document.querySelector(".description8");
const description9 = document.querySelector(".description9");
const description10 = document.querySelector(".description10");
const description11 = document.querySelector(".description11");
const description12 = document.querySelector(".description12");
const description13 = document.querySelector(".description13");
const description14 = document.querySelector(".description14");
const description15 = document.querySelector(".description15");
const description16 = document.querySelector(".description16");
const description17 = document.querySelector(".description17");
const description18 = document.querySelector(".description18");
const description19 = document.querySelector(".description19");
const description20 = document.querySelector(".description20");
const description21 = document.querySelector(".description21");
const description22 = document.querySelector(".description22");
const description23 = document.querySelector(".description23");
const description24 = document.querySelector(".description24");
const description25 = document.querySelector(".description25");
const description26 = document.querySelector(".description26");
const description27 = document.querySelector(".description27");
const description28 = document.querySelector(".description28");
const description29 = document.querySelector(".description29");
const description30 = document.querySelector(".description30");
const description31 = document.querySelector(".description31");
const description32 = document.querySelector(".description32");
const description33 = document.querySelector(".description33");
const description34 = document.querySelector(".description34");
const description35 = document.querySelector(".description35");
const description36 = document.querySelector(".description36");
const description37 = document.querySelector(".description37");

//var dos links das imagens dos personagens
const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const link3 = document.querySelector("#link3");
const link4 = document.querySelector("#link4");
const link5 = document.querySelector("#link5");
const link6 = document.querySelector("#link6");
const link7 = document.querySelector("#link7");
const link8 = document.querySelector("#link8");
const link9 = document.querySelector("#link9");
const link10 = document.querySelector("#link10");
const link11 = document.querySelector("#link11");
const link12 = document.querySelector("#link12");
const link13 = document.querySelector("#link13");
const link14 = document.querySelector("#link14");
const link15 = document.querySelector("#link15");
const link16 = document.querySelector("#link16");
const link17 = document.querySelector("#link17");
const link18 = document.querySelector("#link18");
const link19 = document.querySelector("#link19");
const link20 = document.querySelector("#link20");
const link21 = document.querySelector("#link21");
const link22 = document.querySelector("#link22");
const link23 = document.querySelector("#link23");
const link24 = document.querySelector("#link24");
const link25 = document.querySelector("#link25");
const link26 = document.querySelector("#link26");
const link27 = document.querySelector("#link27");
const link28 = document.querySelector("#link28");
const link29 = document.querySelector("#link29");
const link30 = document.querySelector("#link30");
const link31 = document.querySelector("#link31");
const link32 = document.querySelector("#link32");

//var dos cartões que sobraram
const cartdbd33 = document.querySelector(".cart-dbd33");
const cartdbd34 = document.querySelector(".cart-dbd34");
const cartdbd35 = document.querySelector(".cart-dbd35");
const cartdbd36 = document.querySelector(".cart-dbd36");
const cartdbd37 = document.querySelector(".cart-dbd37");

//- passo 3: identificar o clique do usuário no botão de troca de tema e fazer as trocas:
buttonChangeTheme.addEventListener("click", () => {
  //- passao 7: Verificar se o body já tem a classe killer-mode
  //var que recebe o true or false do killer-mode
  const killerModeActive = body.classList.contains("killer-mode");
  body.classList.toggle("killer-mode");

  if (killerModeActive) {
    //- passo 8: Remover a classe do killer-mode do body e trocar para o modo survivor.
    body.classList.remove("killer-mode");
    //trocar a imagem do botão de alterar para o logo do survivor
    imageButtonChangeTheme.setAttribute("src", "src/images/Icon_survivor.png");
    //nomes
    names1.textContent = "Dwight Fairfield";
    names2.textContent = "Meg Thomas";
    names3.textContent = "Claudette Morel";
    names4.textContent = "Jake Park";
    names5.textContent = "Nea Karlsson";
    names6.textContent = "Laurie Strode";
    names7.textContent = "Ace Visconti";
    names8.textContent = "William 'Bill' Overbeck";
    names9.textContent = "Feng Min";
    names10.textContent = "David King";
    names11.textContent = "Quentin Smith";
    names12.textContent = "Detective David Tapp";
    names13.textContent = "Kate Denson";
    names14.textContent = "Adam Francis";
    names15.textContent = "Jeffrey 'Jeff' Johansen";
    names16.textContent = "Jane Romero";
    names17.textContent = "Ashley J. Williams";
    names18.textContent = "Nancy Wheeler";
    names19.textContent = "Steve Harrington";
    names20.textContent = "Yui Kimura";
    names21.textContent = "Zarina Kassir";
    names22.textContent = "Cheryl Mason";
    names23.textContent = "Felix Richter";
    names24.textContent = "Élodie Rakoto";
    names25.textContent = "Yun-Jin Lee";
    names26.textContent = "Jill Valentine";
    names27.textContent = "Leon Scott Kennedy";
    names28.textContent = "Mikaela Reid";
    names29.textContent = "Jonah Vasquez";
    names30.textContent = "Yoichi Asakawa";
    names31.textContent = "Haddie Kaur";
    names32.textContent = "Ada Wong";
    names33.style.visibility = "visible";
    names34.style.visibility = "visible";
    names35.style.visibility = "visible";
    names36.style.visibility = "visible";
    names37.style.visibility = "visible";

    //mudança das imagens dos personagens
    char1.setAttribute("src", "./src/images/char-preview_dwight.png");
    char2.setAttribute("src", "./src/images/char-preview_meg.png");
    char3.setAttribute("src", "./src/images/char-preview_claudette.png");
    char4.setAttribute("src", "./src/images/char-preview_jake.png");
    char5.setAttribute("src", "./src/images/char-preview_nea.png");
    char6.setAttribute("src", "./src/images/char-preview_laurie.png");
    char7.setAttribute("src", "./src/images/char-preview_ace.png");
    char8.setAttribute("src", "./src/images/char-preview_william.png");
    char9.setAttribute("src", "./src/images/char-preview_feng.png");
    char10.setAttribute("src", "./src/images/char-preview_david.png");
    char11.setAttribute("src", "./src/images/char-preview_quentin.png");
    char12.setAttribute("src", "./src/images/char-preview_detectivedavid.png");
    char13.setAttribute("src", "./src/images/char-preview_kate.png");
    char14.setAttribute("src", "./src/images/char-preview_adam.png");
    char15.setAttribute("src", "./src/images/char-preview_jeff.png");
    char16.setAttribute("src", "./src/images/char-preview_jane.png");
    char17.setAttribute("src", "./src/images/char-preview_ashley.png");
    char18.setAttribute("src", "./src/images/char-preview_nancy.png");
    char19.setAttribute("src", "./src/images/char-preview_steve.png");
    char20.setAttribute("src", "./src/images/char-preview_yui.png");
    char21.setAttribute("src", "./src/images/char-preview_zarina.png");
    char22.setAttribute("src", "./src/images/char-preview_cheryl.png");
    char23.setAttribute("src", "./src/images/char-preview_felix.png");
    char24.setAttribute("src", "./src/images/char-preview_élodie.png");
    char25.setAttribute("src", "./src/images/char-preview_yunjin.png");
    char26.setAttribute("src", "./src/images/char-preview_jill.png");
    char27.setAttribute("src", "./src/images/char-preview_leon.png");
    char28.setAttribute("src", "./src/images/char-preview_mikaela.png");
    char29.setAttribute("src", "./src/images/char-preview_jonah.png");
    char30.setAttribute("src", "./src/images/char-preview_yoichi.png");
    char31.setAttribute("src", "./src/images/char-preview_haddie.png");
    char32.setAttribute("src", "./src/images/char-preview_ada.png");
    char33.style.visibility = "visible";
    char34.style.visibility = "visible";
    char35.style.visibility = "visible";
    char36.style.visibility = "visible";
    char37.style.visibility = "visible";

    //descrições survivors
    description1.textContent =
      "An unlikely leader forced to rise to the occasion, Dwight Fairfield’s reluctant bravery inspires those around him. Understanding the value of teamwork, Dwight is adept at locating and bolstering the efficiency of his teammates.";
    description2.textContent =
      "Driven by reckless courage, the athletic Meg Thomas has never been afraid to push her limits. Prone to stepping up in the clutch, Meg gets a thrill out of goading Killers into lengthy chases, buying essential time for her teammates.";
    description3.textContent =
      "Claudette understands the value of altruism, using her aptitude for botany to ensure her teammates are prepared for the challenges ahead. An expert healer to herself and others, Claudette’s supportive resence is always welcome.";
    description4.textContent =
      "A solitary specialist, Jake Park’s time in the wilderness has sharpened his survival instincts. Stealthy and resourceful, the only sign of his presence are the Sabotaged Hooks he leaves behind.";
    description5.textContent =
      "At first sight I thought it was a cat that passed me by, just a few meters behind me. A shadow that moved without sound. But yelling is not wise in this place. I have spotted her more times, but just in the peripheral. I still don’t know her name, but she evades the monsters with a certain grace.";
    description6.textContent =
      "I stumbled upon another soul in this doomed corner of the earth. I do not know her name, but there is something about her. I have never crossed paths with her, but she seems as if she's been doing this for far too long. Weary of the environment, clad in a kind of controlled panic, constantly looking over her shoulder, on the lookout.";
    description7.textContent =
      "I have seen a poor new soul in this nightmare. For most of the others trapped here, fear is our common denominator. This man does not follow suit. Instead, he stands defiantly, analyzing his surroundings with an eerie confidence. In the mere glimpses of him I could afford, I saw a crooked smile as he scavenged something on the ground. Just by watching him from afar, I felt him ignite a fleeting spark of hope in my heart just before he melted into the shadows. With the remaining conviction I have left, I do pray that good fortune stays on his side.";
    description8.textContent =
      "Hardened by years of experience, Bill Overbeck knows that survival rarely comes without sacrifice. No matter the cost, he’ll make sure his teammates live to fight another day. It wouldn’t be the first time he was left for dead.";
    description9.textContent =
      "A young woman surprised me the other day. She is another guest in this nightmare I can not seem to wake up from. She came running, passed by a wounded girl and didn’t stop. Just a glance behind her, and she was off again. With a determined look on her face, like she had something important to do. A lone wolf maybe? I am not sure what I should call this new person.";
    description10.textContent =
      "Another man. In this arena I guess I could start to label as “home”. A man with an athletic frame. He carries an impressive stature. He seems untouchable at first glance. But a second look tells me something else. He seems torn. Distraught and broken. Maybe not by body, but by mind. I have seen him outrun the creatures. But also on a hook, with his bowels fleeing his torso. Something unsettling about that sight.";
    description11.textContent =
      "'I saw a young man the other day. He seemed both awake and asleep at the same time. A bit drowsy, but determined. Even though I lacked to see anyone or anything going after him, he would not stop. I have witnessed true fear many times at this place. But this man provides a whole new spectra of fear. What would make a man too afraid to even stop to take a breath? He seems determined to reach the gates. I too had that urge once. But I failed too many times to reach them, too many mistakes and deaths. But this young man is different. Maybe he will actually escape. For real. But he looks tired, so intensely tired.'";
    description12.textContent =
      "I am not a stranger to law enforcement professionals. I have learned to…spot them. To recognize their posture and sway. Now, one seems to inhabit this, my new home. He looks worn down, but just like me, he refuses to simply lay down and await the coming pain and death. The struggle is the only thing that keeps him sane – something to focus on. Just as you can recognize the hardship of a law enforcer, many times you can also spot a man that has experienced what others never come near. Beatings and violence, determination. Maybe this new man seeks justice? Maybe he still carries a badge? Whatever might he be looking for here, at this place that lacks justice or an end?";
    description13.textContent =
      "A ray of sunshine illuminated this cold and gray place - a ray in the form of a woman. I heard her before I saw her, a voice, more beautiful than I had encountered in some time, came drifting through the trees. While a lament might have been more suited to this sepulchral locale, she sang a song of joy, of hope and family. Her warm smile greeted any that joined her at the campfire and, just for moment, they were able to forget which realm they inhabited. As quick as she was to make friends, I got the feeling that to cross her would be a mistake. To remain so positive and upbeat in such a place would require a will of iron. Perhaps less a ray of sunshine then, but a bolt of lightning? Brilliant light and great power that could split the world in two.";
    description14.textContent =
      "The clever and selfless Adam Francis is no stranger to heroism, boldly risking his own life to save others. A dependable leader in the face of danger, Adam’s ability to strategize quickly has been known to pay off, even if it means putting himself in harm’s way.";
    description15.textContent =
      "With a reserved nature often mistaken for stoicism, Jeff Johansen found solace in artistic expression. A simple man with a strong appreciation for home-brewed beer and heavy metal, he’s learned to live with the darkness of his past, holding steadfast in the face of adversity.";
    description16.textContent =
      "Celebrity status never changed Jane Romero, who always preferred to tackle a challenge head on. Blessed with a problem-solver's intuition, her aptitude for working with others is a valued asset. Though words are always her first choice, she’s certainly not afraid to get her hands dirty.";
    description17.textContent =
      "Though he proudly identifies as a self-described “alone wolf,” Ash’s shockingly high pain tolerance and scathing wit have proven invaluable in the face of supernatural danger. Those wheels are always turning, even when the situation appears dire. Never underestimate his mettle.";
    description18.textContent =
      "Studious and rebellious, Nancy Wheeler is a stubborn investigator with an instinct for a good story. When her closest friend, Barb went missing, she did everything she could to unravel the truth and secure justice. A brilliant journalist, she chases stories and follows leads despite the inequality and chauvinism she encounters at the workplace. Pursuing a lead one evening, she fearlessly approaches the Hawkins National Laboratory before suddenly losing consciousness. A moment later she awakens in a strange misty realm with the sound of a familiar roar echoing through the air.";
    description19.textContent =
      "Popular and arrogant, yet compassionate, Steve Harrington is an unlikely mentor and leader. He often acts as a surrogate big brother to a younger boy named Dustin. He even helped him find his slimy inter-dimensional pet Demogorgon, D'Artagnan. His reputation as a protector grew and he soon became a sort of 'babysitter' for a group of kids in Hawkins with a knack for messing around with strange and dangerous things. His courage is unmatched so that he was even able to fend off a Demogorgon when it threatened his friends. One evening he received a call for assistance from his friend Nancy Wheeler. He drove all the way to the Hawkins National Laboratory to see if she was okay. He searched the area but only found her notebook. Before he realised what was happening the ground opened up and a swirl of black mist filled his eyes. When he awakened he was in a strange place that seemed familiar but unfamiliar at the same time.";
    description20.textContent =
      "Quick decisions are second nature to Yui Kimura, who lives the majority of her life at a breakneck pace. Whether riding an adrenaline high during a late-night street race or leading Killers on a long and winding chase, Yui finds a way to win by any means necessary. Quotes right Yui Kimura is a hardened street racer, able to gain advantages for her and her fellow Survivors in challenging situations.";
    description21.textContent =
      "Zarina Kassir stands determined to uncover the truth, regardless of any peril that might arise. A street-smart and thorough documentarian, she’s willing to put herself in harm’s way to achieve her goals -- especially if it means helping those in need.";
    description22.textContent =
      "No stranger to indescribable terror, Cheryl Mason has grown emboldened by the looming presence of evil. Drawing strength from the horrors of her past, she has learned to manipulate powers from beyond to achieve her noble goal.";
    description23.textContent =
      "Often called a visionary for his brilliant architectural work, Felix Richter is as determined as he is debonair. Capable of operating at heightened efficiency under immense pressure, his expertise has proven invaluable – especially when facing a deadline.";
    description24.textContent =
      "Occult investigator Élodie Rakoto has seen first-hand that things are not always as they seem. The comforting rational explanation isn’t always correct, and there’s certainly no reasoning with these merciless Killers. Luckily, she’s got more than a few cunning tricks up her sleeve.";
    description25.textContent =
      "What some call selfish, Yun-Jin Lee calls practical. She didn’t enter the music industry to make friends, though she can appreciate a little collaboration now and again. At the end of the day, she abides by an old classic: if you want something done right, do it yourself.";
    description26.textContent =
      "Bravery comes natural to Jill Valentine, whose heroism proved invaluable during her harrowing time in Raccoon City. Even with a lethal pursuer on her trail, Jill’s survival instincts provide her and her teammates with a few crucial advantages. Don’t expect her to go down without a fight.";
    description27.textContent =
      "Leon Kennedy might be a Rookie, but during that one fateful night, he faced an entire lifetime of horror and brutality. At once resilient and resourceful, Leon is adaptable above all, whether crafting makeshift weaponry or retracing his steps through labyrinthine hallways.";
    description28.textContent =
      "A passion for the mystic arts has proven invaluable for Mikaela Reid. A proud horror aficionado and admirer of the macabre, her supernatural touch has opened the door to new possibilities. Though some were initially wary, teammates quickly took to her alternative methods upon seeing the results.";
    description29.textContent =
      "Jonah Vasquez can tell you first-hand that there’s strength in numbers – literally. A seasoned codebreaker and master of mathematics, Jonah’s logical mind makes for a key addition to any team, multiplying chances of successful teamwork by an exponential degree.";
    description30.textContent =
      "A marine biologist scarred by the haunting memories of his past encounter with Sadako, Yoichi Asakawa has stared into the depths of evil. Blessed with paranormal psychic abilities of his own, his bravery and unwavering resolve makes him a valuable ally against even the darkest forces";
    description31.textContent =
      "Plagued by chilling visions of the inexplicable, Haddie Kaur is driven to brave the perils of the unknown. Possessing the ability to see realms beyond our own, she knows more about the encroaching darkness than most. Perhaps that’s why she’s not afraid to stand face-to-face with danger with flashlight in hand.";
    description32.textContent =
      "Sometimes it’s safer to keep people guessing, and no one knows this better than Ada Wong. Dexterous and enigmatic, Ada’s survival skills make her a valuable ally, provided interests remain aligned.";
    description33.style.visibility = "visible";
    description34.style.visibility = "visible";
    description35.style.visibility = "visible";
    description36.style.visibility = "visible";
    description37.style.visibility = "visible";

   //links imagens dos survivors
    link1.href = "https://deadbydaylight.fandom.com/wiki/Dwight_Fairfield";
    console.log(link1);
    link2.href = "https://deadbydaylight.fandom.com/wiki/Meg_Thomas";
    console.log(link2);
    link3.href = "https://deadbydaylight.fandom.com/wiki/Claudette_Morel";
    console.log(link3);
    link4.href = "hhttps://deadbydaylight.fandom.com/wiki/Jake_Park";
    console.log(link4);
    link5.href = "https://deadbydaylight.fandom.com/wiki/Nea_Karlsson";
    console.log(link5);
    link6.href = "https://deadbydaylight.fandom.com/wiki/Laurie_Strode";
    console.log(link6);
    link7.href = "https://deadbydaylight.fandom.com/wiki/Ace_Visconti";
    console.log(link7);
    link8.href = "https://deadbydaylight.fandom.com/wiki/William_%22Bill%22_Overbeck";
    console.log(link8);
    link9.href = "https://deadbydaylight.fandom.com/wiki/Feng_Min";
    console.log(link9);
    link10.href = "https://deadbydaylight.fandom.com/wiki/David_King";
    console.log(link10);
    link11.href = "https://deadbydaylight.fandom.com/wiki/Quentin_Smith";
    console.log(link11);
    link12.href = "https://deadbydaylight.fandom.com/wiki/Detective_David_Tapp";
    console.log(link12);
    link13.href = "https://deadbydaylight.fandom.com/wiki/Kate_Denson";
    console.log(link13);
    link14.href = "https://deadbydaylight.fandom.com/wiki/Adam_Francis";
    console.log(link14);
    link15.href = "https://deadbydaylight.fandom.com/wiki/Jeffrey_%22Jeff%22_Johansen";
    console.log(link15);
    link16.href = "https://deadbydaylight.fandom.com/wiki/Jane_Romero";
    console.log(link16);
    link17.href = "https://deadbydaylight.fandom.com/wiki/Ashley_J._Williams";
    console.log(link17);
    link18.href = "https://deadbydaylight.fandom.com/wiki/Nancy_Wheeler";
    console.log(link18);
    link19.href = "https://deadbydaylight.fandom.com/wiki/Steve_Harrington";
    console.log(link19);
    link20.href = "https://deadbydaylight.fandom.com/wiki/Yui_Kimura";
    console.log(link20);
    link21.href = "https://deadbydaylight.fandom.com/wiki/Zarina_Kassir";
    console.log(link21);
    link22.href = "https://deadbydaylight.fandom.com/wiki/Cheryl_Mason";
    console.log(link22);
    link23.href = "https://deadbydaylight.fandom.com/wiki/Felix_Richter";
    console.log(link23);
    link24.href = "https://deadbydaylight.fandom.com/wiki/%C3%89lodie_Rakoto";
    console.log(link24);
    link25.href = "https://deadbydaylight.fandom.com/wiki/Yun-Jin_Lee";
    console.log(link25);
    link26.href = "https://deadbydaylight.fandom.com/wiki/Jill_Valentine";
    console.log(link26);
    link27.href = "https://deadbydaylight.fandom.com/wiki/Leon_Scott_Kennedy";
    console.log(link27);
    link28.href = "https://deadbydaylight.fandom.com/wiki/Mikaela_Reid";
    console.log(link28);
    link29.href = "https://deadbydaylight.fandom.com/wiki/Jonah_Vasquez";
    console.log(link29);
    link30.href = "https://deadbydaylight.fandom.com/wiki/Yoichi_Asakawa";
    console.log(link30);
    link31.href = "https://deadbydaylight.fandom.com/wiki/Haddie_Kaur";
    console.log(link31);
    link32.href = "https://deadbydaylight.fandom.com/wiki/Ada_Wong";
    console.log(link32);

      //mostrar os cartões não utilizados novamente
      cartdbd33.style.visibility = "visible";
      cartdbd34.style.visibility = "visible";
      cartdbd35.style.visibility = "visible";
      cartdbd36.style.visibility = "visible";
      cartdbd37.style.visibility = "visible";

  } else {
    //- passo 4: adicionar a classe killer-mode no body.
    body.classList.add("killer-mode");

    //trocar a imagem do botão de alterar para o logo do killer
    imageButtonChangeTheme.setAttribute("src", "src/images/Icon_killer.png");

    //trocar nome
    names1.textContent = "Trapper";
    names2.textContent = "Wraith";
    names3.textContent = "Hillbilly";
    names4.textContent = "Nurse";
    names5.textContent = "Shape";
    names6.textContent = "Hag";
    names7.textContent = "Doctor";
    names8.textContent = "Huntress";
    names9.textContent = "Cannibal";
    names10.textContent = "Nightmare";
    names11.textContent = "Pig";
    names12.textContent = "Clown";
    names13.textContent = "Spirit";
    names14.textContent = "Legion";
    names15.textContent = "Plague";
    names16.textContent = "Ghost Face";
    names17.textContent = "Demogorgon";
    names18.textContent = "Oni";
    names19.textContent = "Deathslinger";
    names20.textContent = "Executioner";
    names21.textContent = "Blight";
    names22.textContent = "Twins";
    names23.textContent = "Trickster";
    names24.textContent = "Nemesis";
    names25.textContent = "Cenobite";
    names26.textContent = "Artist";
    names27.textContent = "Onryō";
    names28.textContent = "Dredge";
    names29.textContent = "Mastermind";
    names30.textContent = "Knight";
    names31.textContent = "Skull Merchant";
    names32.textContent = "Singularity";
    names33.style.visibility = "hidden";
    names34.style.visibility = "hidden";
    names35.style.visibility = "hidden";
    names36.style.visibility = "hidden";
    names37.style.visibility = "hidden";

    //mudança das imagens dos personagens
    char1.setAttribute("src", "./src/images/killer-preview_trapper.png");
    char2.setAttribute("src", "./src/images/killer-preview_wraith.png");
    char3.setAttribute("src", "./src/images/killer-preview_hillbilly.png");
    char4.setAttribute("src", "./src/images/killer-preview_nurse.png");
    char5.setAttribute("src", "./src/images/killer-preview_shape.png");
    char6.setAttribute("src", "./src/images/killer-preview_hag.png");
    char7.setAttribute("src", "./src/images/killer-preview_doctor.png");
    char8.setAttribute("src", "./src/images/killer-preview_huntress.png");
    char9.setAttribute("src", "./src/images/killer-preview_cannibal.png");
    char10.setAttribute("src", "./src/images/killer-preview_nightmare.png");
    char11.setAttribute("src", "./src/images/killer-preview_pig.png");
    char12.setAttribute("src", "./src/images/killer-preview_clown.png");
    char13.setAttribute("src", "./src/images/killer-preview_spirit.png");
    char14.setAttribute("src", "./src/images/killer-preview_legion.png");
    char15.setAttribute("src", "./src/images/killer-preview_plague.png");
    char16.setAttribute("src", "./src/images/killer-preview_ghostface.png");
    char17.setAttribute("src", "./src/images/killer-preview_demogorgon.png");
    char18.setAttribute("src", "./src/images/killer-preview_oni.png");
    char19.setAttribute("src", "./src/images/killer-preview_deathslinger.png");
    char20.setAttribute("src", "./src/images/killer-preview_executioner.png");
    char21.setAttribute("src", "./src/images/killer-preview_blight.png");
    char22.setAttribute("src", "./src/images/killer-preview_twins.png");
    char23.setAttribute("src", "./src/images/killer-preview_trickster.png");
    char24.setAttribute("src", "./src/images/killer-preview_nemesis.png");
    char25.setAttribute("src", "./src/images/killer-preview_cenobite.png");
    char26.setAttribute("src", "./src/images/killer-preview_artist.png");
    char27.setAttribute("src", "./src/images/killer-preview_onryo.png");
    char28.setAttribute("src", "./src/images/killer-preview_dredge.png");
    char29.setAttribute("src", "./src/images/killer-preview_mastermind.png");
    char30.setAttribute("src", "./src/images/killer-preview_knight.png");
    char31.setAttribute("src", "./src/images/killer-preview_skullmerchant.png");
    char32.setAttribute("src", "./src/images/killer-preview_singularity.png");
    char33.style.visibility = "hidden";
    char34.style.visibility = "hidden";
    char35.style.visibility = "hidden";
    char36.style.visibility = "hidden";
    char37.style.visibility = "hidden";

    //descrições killers
    description1.textContent =
      "There is a vast monster of a man with a hideous grin torn across the mask that keeps stalking my every move. Similar to a hunter, he tracks us, priming devastating traps amongst the greenery. Extreme vigilance and a light step is essential in avoiding the blood-curdling clench of a bear trap or the clutches of what I've taken to calling The Miserable Smiling Killer. I have but many times managed to get caught in one of these traps. I have nothing but a fear for the feeling of blunt trap spikes grinding against my bones or for the heavy and deliberate footsteps which always inevitably reveal a plastered, sadistic grin. With the traps and the Trapper, it has so far been a constant battle between looking up and looking down.";
    description2.textContent =
      "There's another apparition, more terrifying than anything I've ever seen, hunting amongst the shadows here. It moves like a silhouette, appearing and disappearing at the sound of a dreaded bell. It's impossible to track it. Several times it has caught me without me even seeing it closing in. Often convinced I have my back covered, it has promptly materialised right behind me to strike from close range. Stay still and watch the fog. Don't move, don't blink and for god's sake don't breathe. If you can control your fear long enough and can show self control, sometimes it is possible to see its shimmer as it glides forward if caught at just the right light. I pray for your safety.";
    description3.textContent =
      "A most terrible man to behold. His physique is all twisted and disfigured as of by some awful accident. He carries a deadly and cruel chainsaw which he wields with devastating violence, seemingly imbuing him with a superhuman speed for a while. His advantage is also a weakness as the loud noise can give away his position. So I have tried to heighten my sense of sound. Honing in on any sound that is not stemming from nature.";
    description4.textContent =
      "A new varmint has entered the arena. I spotted her as she, somehow, moved through a wall. Clad in bandages that tell an untold tale of something horrid. This...nurse as it seems, brings me new angst during my lonely nights, as my mind runs amok.e";
    description5.textContent =
      "Something, or rather someone, is here now. I've never seen this... Shape before. A man hiding behind a mask. He comes with a determination. But more worrying, he comes with an apparent grasp of the hunt. He does not strike me as someone who even went unwillingly to this place. Is there more to this being than I can fathom?e";
    description6.textContent =
      "The Hag specialises in creating a dangerous web of Phantasm Traps, to be triggered by unsuspecting Survivors. She can instantly teleport to a triggered Trap, striking the Survivor that sprung it. Lock down key areas, make rescues a deadly gamble, and end chases quickly with strategic Phantasm Trap placement.";
    description7.textContent =
      "I have difficulty keeping my sanity. Each day, this altering world provides me with new trials. A man wearing the robes of a doctor crossed my path. From afar, I witness him walking around, searching.. But he was not...normal. Eyes and mouth pried open, in a painful and disturbing way. Where do these fiends stem from? I do not trust him, he looks like he wants to bring pain, not healing? I will stay away, it is the wisest thing to do.";
    description8.textContent =
      "A figure clad in the head of a hare. A most disturbing sight. This new foe holds something human within her. Some shards of ordinary life. She seems to be a hunter. I have met many different beings in this place, but this is the first one with a natural skill of hunting. In any other place one could deem it a talent. But her knack for tracking, capturing and killing is something else here. There is something else in her too, she seems to seek something.";
    description9.textContent =
      "Whether Killers perform their heinous acts by the compulsions of their diseased minds, or if they are forced into them by external pressures, has long been a matter of debate. But for one Killer, nature and nurture are inextricably linked. Leatherface kills not from a desire to exert his will over others, to satisfy carnal urges, or even to quiet the voices in his head. He kills because he is scared. Scared that others will hurt him; scared that his family will be displeased with him, scared that their shared willingness to eat human flesh will be discovered.";
    description10.textContent =
      "This place plays tricks on your mind…constantly I question whether I dream or if I am awake. This most recent horrid ghoul seems to bridge that gap – between the states of being awake or asleep. I saw him hunting another poor soul, someone who was not as lucky as me. A man with a hat and a claw clad hand, a scarred man of sorts. He spotted me and what actually happened next is still a mystery to me. Dreams took over, and I was sure to die. But I woke up. Not like in the manner where I awake at the campfire, but instead I just woke up…inside this wretched forest, with memories of nightmares within. I am now afraid to sleep, but also to stay awake.";
    description11.textContent =
      "At first I actually believed that it was a pig that slept in front of me on the ground. An animal that somehow had eluded the banalities of my old life and managed to end up at this forsaken and forgotten place. But then it rose, from crouch to standing, with its lifeless eyes nailed to my person. I ran, as I have so brutally learnt to do. My curiosity halted my escape after a few feet and I hid in a cabinet. The Pig moved like a predator – and I saw: a human body wearing a pig's head as ornament. It walked by the cabinet and its snout was just a few inches away from me. I held my breath, aching for freedom. A sudden sound caught the pig's attention and it walked away. But not without giving me a last, final glance, as if it wanted to inform me that I was given a second chance. I will not get a third.";
    description12.textContent =
      "Using his Afterpiece concoctions, The Clown can steer Survivors into dangerous areas and shorten chases. His purple bottle emits a cloud of noxious gas that disorients, slows down, and hinders Survivors. Throwing the yellow bottle requires foresight, as anyone who passes through the gas experiences a speed burst.";
    description13.textContent =
      "She inherited incredible fury from her ancestors. The wrath that flows through her veins is her legacy. The terrible pain she suffered set it off. Swift and lethal, The Spirit exacts her revenge endlessly.";
    description14.textContent =
      "The Legion are a close-knit group of murderous Killers, linked by the desire to dole out pain in equal measure. Keep the injuries coming with Feral Frenzy, a high-intensity sprint that can set off a devastating chain reaction. Survivors will be constantly tending to their wounds, leaving them vulnerable to be picked off one by one.";
    description15.textContent =
      "Traditional healing methods are ineffective against The Plague’s vile Purge, which can infect generators and Survivors. Pools of Devotion are the only respite from the spreading pestilence. The more Survivors heal, the stronger The Plague’s power becomes, transforming her Purge into a sickening projectile of pain.	";
    description16.textContent =
      "A stealth-focused Killer capable of approaching unseen, The Ghost Face is adept at stalking his prey. Keep tabs on each individual Survivor, patiently marking them for death – provided you can remain hidden. Lie in wait until the perfect time to strike, and down Survivors before they know what hit them.";
    description17.textContent =
      "A blooming mouth full of needle-like teeth for a face, large, curved, razor-sharp claws, and powerful legs to pounce on victims, make The Demogorgon a frightening monster to face in any dimension. It is a nightmare of unrestrained, feral rage as it hunts down its prey and rips it to pieces, devouring every last morsel of flesh and gore, leaving nothing for scavengers. The creature is untouched by any sense of compassion or restraint. Looming over its victim, it shows no doubt or mercy, just the pure instinct of its insatiable blood lust as it delivers the deathblow. A perfect hunter, The Demogorgon is a macabre testament to the horrors lurking in the Upside Down and why it was choice pickings for The Entity.";
    description18.textContent =
      "Redefine wrath with The Oni, a truly formidable force. Injured Survivors leave a trail of Blood Orbs, fuelling The Oni’s rage and sending him into a state of fury. Upon unleashing a bloodcurdling roar, The Oni gains the ability to charge with vengeful purpose, instantly cutting down anyone in his way.";
    description19.textContent =
      "Upon catching prey unaware, the Deathslinger uses his handmade gun – The Redeemer – to skewer fleeing Survivors with a long-distance harpoon. Accurate aim, patient tracking, and sharp predictions are crucial to landing successful shots, but the reward of a Survivor’s scream as they’re reeled in will never sound so sweet.	";
    description20.textContent =
      "Merciless and unforgiving, The Executioner brings his own form of twisted justice to The Fog, tormenting Survivors with hazards around the map. Hooks are an effective tool, but nothing punishes quite like a Cage of Torment. All hope will swiftly fade the moment Pyramid Head raises his mighty blade to deliver the Final Judgment.";
    description21.textContent =
      "Capable of gaining ground on Survivors in mere moments, The Blight’s lethal efficiency must never be underestimated. With the ability to bounce off surfaces and realign his trajectory, his relentless presence forces Survivors into snap decisions. The learning curve may feel steep, but mastering The Blight is a worthwhile pursuit.";
    description22.textContent =
      "Charlotte Deshayes can unleash her conjoined twin brother Victor, falling dormant until he’s finished hunting. Victor moves at high speeds and strikes with a pounce attack that debilitates and injures. Down Survivors with Victor and hook them with Charlotte, an oppressive tandem that can quickly disrupt even the best-laid plans.";
    description23.textContent =
      "Armed with an arsenal of throwing knives, The Trickster overwhelms fleeing Survivors with a relentless barrage of blades. Seemingly safe actions like vaulting windows and dropping Pallets turn into target practice for this twisted K-Pop Idol, whose stylish showmanship is rivalled only by his gleeful bloodlust.";
    description24.textContent =
      "An unstoppable force relentless in his pursuit, nothing can stop The Nemesis from achieving his goal. His sweeping Tentacle infects Survivors with the T-Virus, further enhancing his destructive power in the process. Easily smash through pallets and breakable walls while two A.I-controlled Zombies patrol the map, applying additional pressure.";
    description25.textContent =
      "The Cenobite, also known as Pinhead, specializes in inflicting map-wide suffering. Survivors must find the Lament Configuration lest a Chain Hunt begin, debilitating their movement with a relentless barrage of otherworldly shackles. The Cenobite can also summon a chain to bind Survivors, allowing him to gain ground and inflict punishment.";
    description26.textContent =
      "No matter the distance, The Artist and her murder of Dire Crows pose a constant threat to Survivors. Position up to three Crows and unleash them on a lethal trajectory, swarming and injuring anyone caught in their path. Use her Power to shut down key areas, predict and punish Survivor pathing, and gain valuable map-wide information.";
    description27.textContent =
      "Capable of condemning Survivors to death through a powerful cursed videotape, Sadako’s wrath is inevitable. Her presence conjures several televisions, through which she can teleport and emerge with malevolent purpose. The fleeting glimpse of her approach ensures that a chilling fate is not far behind.";
    description28.textContent =
      "A twisted abomination too disturbing to bear, The Dredge’s malevolence is palpable. All light slowly drains in its presence, surrounding Survivors in darkness. Using lockers as map-wide gateways, it can emerge at any moment, seemingly everywhere at once.	";
    description29.textContent =
      "A visionary as brilliant as he is ruthless, Albert Wesker’s strategic mind is unrivalled. While some plans require intellect, others call for brute force. Rush forward to seize Survivors in your grasp and give them the gift of Uroboros – a necessary step on the path to evolution.";
    description30.textContent =
      "Tarhos Kovács didn’t remember much about his childhood, but what he did remember he would chase his entire life. He remembered the cries and screams in the village. He remembered his mother forcing him to swallow a thick, black fluid like medicine. He remembered collapsing to the hard floor only to awaken in a mass grave, buried under a crush of bodies, with the sound of the village burning in his ears. He remembered pushing, pulling, and climbing to the top of the bloody mass only to be seized by the death, destruction, and silence—the indifferent and impenetrable silence.";
    description31.textContent =
      "The self-made millionaire Adriana Imai came from a humble home in Fortaleza, Brazil. Her father, Seita, moved to Brazil as a young man, hoping to see a side of the world completely different than his hometown in Hokkaido. A talented illustrator, he spent his spare time designing colourful characters and worlds.";
    description32.textContent =
      "HUX-A7-13's AI was activated on September 15th, 2313. Manufactured by Huxlee Industries Ltd., the A7 was the 13th iteration of the fully autonomous mobile humanoid android. With ten times the strength of a human, it was designed to work in conditions too hazardous for human life. Its AI was designed to be self-directing and use machine learning to solve problems on the fly.";
    description33.style.visibility = "hidden";
    description34.style.visibility = "hidden";
    description35.style.visibility = "hidden";
    description36.style.visibility = "hidden";
    description37.style.visibility = "hidden";

    //links imagens dos killers
    link1.href = "https://deadbydaylight.fandom.com/wiki/Evan_MacMillan";
    console.log(link1);
    link2.href = "https://deadbydaylight.fandom.com/wiki/Philip_Ojomo";
    console.log(link2);
    link3.href = "https://deadbydaylight.fandom.com/wiki/Max_Thompson_Jr.";
    console.log(link3);
    link4.href = "https://deadbydaylight.fandom.com/wiki/Sally_Smithson";
    console.log(link4);
    link5.href = "https://deadbydaylight.fandom.com/wiki/Michael_Myers";
    console.log(link5);
    link6.href = "https://deadbydaylight.fandom.com/wiki/Lisa_Sherwood";
    console.log(link6);
    link7.href = "https://deadbydaylight.fandom.com/wiki/Herman_Carter";
    console.log(link7);
    link8.href = "https://deadbydaylight.fandom.com/wiki/Anna";
    console.log(link8);
    link9.href = "https://deadbydaylight.fandom.com/wiki/Bubba_Sawyer";
    console.log(link9);
    link10.href = "https://deadbydaylight.fandom.com/wiki/Freddy_Krueger";
    console.log(link10);
    link11.href = "https://deadbydaylight.fandom.com/wiki/Amanda_Young";
    console.log(link11);
    link12.href = "https://deadbydaylight.fandom.com/wiki/Jeffrey_Hawk";
    console.log(link12);
    link13.href = "https://deadbydaylight.fandom.com/wiki/Rin_Yamaoka";
    console.log(link13);
    link14.href =
      "https://deadbydaylight.fandom.com/wiki/Frank,_Julie,_Susie,_Joey";
    console.log(link14);
    link15.href = "https://deadbydaylight.fandom.com/wiki/Adiris";
    console.log(link15);
    link16.href = "https://deadbydaylight.fandom.com/wiki/Danny_Johnson";
    console.log(link16);
    link17.href = "https://deadbydaylight.fandom.com/wiki/Demogorgon";
    console.log(link17);
    link18.href = "https://deadbydaylight.fandom.com/wiki/Kazan_Yamaoka";
    console.log(link18);
    link19.href = "https://deadbydaylight.fandom.com/wiki/Caleb_Quinn";
    console.log(link19);
    link20.href = "https://deadbydaylight.fandom.com/wiki/Pyramid_Head";
    console.log(link20);
    link21.href = "https://deadbydaylight.fandom.com/wiki/Talbot_Grimes";
    console.log(link21);
    link22.href =
      "https://deadbydaylight.fandom.com/wiki/Charlotte_%26_Victor_Deshayes";
    console.log(link22);
    link23.href = "https://deadbydaylight.fandom.com/wiki/Ji-Woon_Hak";
    console.log(link23);
    link24.href = "https://deadbydaylight.fandom.com/wiki/Nemesis_T-Type";
    console.log(link24);
    link25.href = "https://deadbydaylight.fandom.com/wiki/Elliot_Spencer";
    console.log(link25);
    link26.href = "https://deadbydaylight.fandom.com/wiki/Carmina_Mora";
    console.log(link26);
    link27.href = "https://deadbydaylight.fandom.com/wiki/Sadako_Yamamura";
    console.log(link27);
    link28.href = "https://deadbydaylight.fandom.com/wiki/Dredge";
    console.log(link28);
    link29.href = "https://deadbydaylight.fandom.com/wiki/Albert_Wesker";
    console.log(link29);
    link30.href = "https://deadbydaylight.fandom.com/wiki/Tarhos_Kov%C3%A1cs";
    console.log(link30);
    link31.href = "https://deadbydaylight.fandom.com/wiki/Adriana_Imai";
    console.log(link31);
    link32.href = "https://deadbydaylight.fandom.com/wiki/HUX-A7-13";
    console.log(link32);

    //esconder os cartões não utilizados no modo killer
    cartdbd33.style.visibility = "hidden";
    cartdbd34.style.visibility = "hidden";
    cartdbd35.style.visibility = "hidden";
    cartdbd36.style.visibility = "hidden";
    cartdbd37.style.visibility = "hidden";

  }
});
//Fim da troca de tema.
