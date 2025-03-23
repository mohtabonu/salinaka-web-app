import { featuredCardsWrap, recommendedCardsWrap, links, homePage, featuredPage, recommendedPage, shopPage, shopCardsWarp } from "./elements";
import { glasses } from "./db";
import type { Glasses } from "./type";

const pages: Record<string, HTMLElement> = {
    "home": homePage,
    "featured": featuredPage,
    "recommended": recommendedPage,
    'shop': shopPage
};

document.addEventListener('DOMContentLoaded',function() {
    function createCards() {
        const featuredGlasses = glasses.slice(0, 6);
        const recommendedGlasses = glasses.slice(6, 12);

       
        const generateCardHTML = (object: Glasses) => `
            <div class="border border-1 border-neutral-300 cursor-pointer">
                <div class="bg-neutral-200 px-4 w-auto">
                    <img src="${object.image}" alt="" class="transition-transform duration-300 hover:scale-110">
                </div>
                <div class="py-5 px-5">
                    <h1 class="font-semibold text-[25px]">${object.title}</h1>
                    <p class="font-semibold text-[17px] text-neutral-500 italic">${object.name}</p>
                </div>
            </div>`;

        featuredCardsWrap.forEach(cardWrap => {
            cardWrap.innerHTML = featuredGlasses.map(generateCardHTML).join('');            
        });

        recommendedCardsWrap.forEach(cardWrap => {
            cardWrap.innerHTML = recommendedGlasses.map(generateCardHTML).join('');
        });
    }
    function createShopCards(){
        const generateCardHTML = (object: Glasses) => `
            <div class="cursor-pointer border border-1 border-neutral-400">
                     <div class="bg-neutral-200 px-2">
                         <img src="${object.image}" alt="" class="transition-transform duration-300 hover:scale-110">
                     </div>
                     <div class="bg-white  text-center py-3">
                         <h1 class="font-semibold mb-2">${object.name}</h1>
                         <p class="font-semibold text-neutral-500 italic mb-2">${object.title}</p>
                         <p class="font-semibold mb-2">$${object.price}</p>
                     </div>
                     <button class="bg-black text-white w-full py-2 hover:opacity-80 text-[14px] font-semibold">Add to Basket</button>
            </div>
        `
        shopCardsWarp.innerHTML = glasses.map(generateCardHTML).join('')
    }

   
    document.body.addEventListener("click", (event: Event) => {
        const target = (event.target as HTMLElement).closest("[data-page]") as HTMLElement | null;
        if (!target) return;
    
        Object.values(pages).forEach((page: HTMLElement) => {
            page.style.display = "none";
        });
    
        
        const pageKey = target.dataset.page as keyof typeof pages;
        const selectedPage = pages[pageKey];
    
        if (selectedPage) {
            selectedPage.style.display = "block";
        }
    });
    

  
    createCards()
    createShopCards()
   
})