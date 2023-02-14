document.addEventListener("DOMContentLoaded", function() {

    // slå dig løs her... 

    //eksempel på at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))

    let services_section = document.querySelector(".services");
    


    services.forEach((service) => {

        let card = document.createElement("article");
        card.setAttribute("class", "services__card");
        let picture = document.createElement("img");
        let title = document.createElement("h2");
        let card__text = document.createElement("p");
        let card__link = document.createElement("a");

        picture.src = service.illustration;
        title.textContent = service.headline;
        card__text.textContent = service.text;
        card__link.textContent = service.linktext;
        
        card.append(picture);
        card.append(title);
        card.append(card__text);
        card.append(card__link);
        services_section.append(card);
    });

    // header
    
    let hero_section = document.querySelector(".hero");
   
    let hero__card = document.createElement("header");
    hero__card.setAttribute("class", "hero__card")
    let hero__container = document.createElement("div");
    hero__container.setAttribute("class", "hero__container");

    let hero__picture = document.createElement("img");
    let hero__headline = document.createElement("h1");
    let hero__text = document.createElement("p");
    let hero__img = document.createElement("img");
    let hero__button = document.createElement("button");
    let button__text = document.createElement("p");

    hero__picture.src = hero.image;
    hero__headline.textContent = hero.headline;
    hero__text.textContent = hero.copy;
    hero__img.src = hero.icon;
    hero__button.src = hero.icon;
    button__text.textContent = "Explore";


    hero__button.append(hero__img);
    hero__button.append(button__text);
    hero__container.append(hero__headline);
    hero__container.append(hero__text);
    hero__container.append(hero__button);
    hero__card.append(hero__picture);
    hero_section.append(hero__card);
    hero_section.append(hero__container);
    // header end

    // facilities start
    let facilities__section = document.querySelector(".facilities");
    let facilities__headline = document.createElement("h2");
    let facilities__container = document.createElement("div");

    facilities__headline.textContent = facilities.headline;
    facilities__section.append(facilities__headline);
    facilities__section.append(facilities__container);
    facilities__container.setAttribute("class", "facilities__container")
    facilities.options.forEach((option) => {
        let card = document.createElement("article");
        card.setAttribute("class" ,"facilities__card");

        let icon = document.createElement("img");
        let headline = document.createElement("h3");
        let text = document.createElement("p");

        icon.src = option.icon;
        headline.textContent = option.headline;
        text.textContent = option.text;
        
        card.append(icon);
        card.append(headline);
        card.append(text);
        facilities__container.append(card);
    });
    // facilities end

    // sites start
    let sites__section = document.querySelector(".sites");
    let sites__container = document.createElement("div");

    let sites__headline = document.createElement("h2");
    let sites__text = document.createElement("p");
    let sites__buttonimg = document.createElement("img");
    let sites__button = document.createElement("button");
    let sitesButton__text = document.createElement("p");
    sites__text.setAttribute("class", "sites__text");

    sites__headline.textContent = sites.headline;
    sites__text.textContent = sites.text;
    sites__buttonimg.src = sites.btnicon;
    sitesButton__text.textContent ="Start";

    sites__button.setAttribute("class" ,"sites__button");
    sites__button.append(sites__buttonimg);
    sites__button.append(sitesButton__text);

    sites__container.append(sites__headline);
    sites__container.append(sites__text);
    sites__container.append(sites__button);

    sites__section.append(sites__container);

    sites.places.forEach((site) => {

        let card = document.createElement("article");
        card.setAttribute("class", "sites__card");

        let img = document.createElement("img");
        let name = document.createElement("h3");
        let city = document.createElement("p");
        img.src = site.img;
        name.textContent = site.name;
        city.textContent = site.city;

        card.append(img);
        card.append(name);
        card.append(city);
        sites__section.append(card);
    });
    // sites end

    // advantages start
    let adv__section = document.querySelector(".advantages");
    let adv__container = document.createElement("div");
    adv__container.setAttribute("class", "adv__container");
    let adv__header = document.createElement("h2");
    adv__header.textContent ="Our Advantages";
    adv__section.append(adv__header);


    advantages.forEach((advantage) => {

        let card = document.createElement("section");
        card.setAttribute("class", "adv__card");

        let img = document.createElement("img");
        let headline = document.createElement("h3");
        let text = document.createElement("p");

        img.src = advantage.icon;
        headline.textContent = advantage.headline;
        text.textContent = advantage.text;
        
        card.append(img);
        card.append(headline);
        card.append(text);
        adv__container.append(card);
        adv__section.append(adv__container);
    });
    // advantages end

    let footer = document.querySelector("footer");
    let footer__container = document.createElement("div");
    footer__container.setAttribute("class", "footer__motto")
    let footer__links = document.createElement("div");
    footer__links.setAttribute("class", "footer__links")
    let footer__headline = document.createElement("h2");
    let footer__motto = document.createElement("h3");

    footer__headline.textContent = footerElement.headline;
    footer__motto.textContent = footerElement.motto;
    footer__container.append(footer__headline);
    footer__container.append(footer__motto);
    footer__links.append(footer__container);

    footerElement.fields.forEach((field) =>{

        let card = document.createElement("div");
        card.setAttribute("class", "footer__card");

        let headline = document.createElement("h3");
        let text1 = document.createElement("p");
        let text2 = document.createElement("p");
        let text3 = document.createElement("p");
        let text4 = document.createElement("p");
        headline.textContent = field.headline;
        text1.textContent = field.text1;
        text2.textContent = field.text2;
        text3.textContent = field.text3;
        text4.textContent = field.text4;

        card.append(headline);
        card.append(text1);
        card.append(text2);
        card.append(text3);
        card.append(text4);
        footer__links.append(card);
        footer.append(footer__links);

    });

    let bottom__container = document.createElement("div");
    bottom__container.setAttribute("class", "bottom")
    footerElement.bottomfield.forEach((bottomfields) => {
        let card = document.createElement("div");
        card.setAttribute("class", "bottom__elements")
        let bottomtext = document.createElement("p");

        bottomtext.textContent = bottomfields.textlink;

        card.append(bottomtext);
        bottom__container.append(card);
        footer.append(bottom__container);

    });
}) // DOMContentLoaded slut