const vehicles = [
  {title:'HATASIZ BOYASIZ 1.9 DOBLO SX SIFIR VİZELİ KLİMALI', color:'Bordo', price:185000, date:'30 Eylül 2026'},
  {title:'FİAT DUCATO 2.3 HERŞEYİ İLE SIFIR KURTARICI', color:'—', price:645000, date:'30 Eylül 2026'},
  {title:'VW PASSAT B.6 2.0 DİZEL MANUEL SINIF TEMİZ ARAYANLARA', color:'Füme', price:425000, date:'29 Eylül 2026'},
  {title:'PEUGEOT 207.5 ALEV KIRMIZI 1.4 DİZEL', color:'Kırmızı', price:375000, date:'02 Ekim 2026'},
  {title:'2010 CHEVROLET CRUZE 1.6 BENZİN //LPG TEMİZ BAKIMLI', color:'Siyah', price:425000, date:'24 Eylül 2026'},
  {title:'FİAT PALİO 1.3 DİZEL KLİMALI TEK KAPI BAKIMLI TEMİZ', color:'Beyaz', price:159750, date:'21 Eylül 2026'},
  {title:'2005 MODEL OPEL CORSA 1.3 DİZEL ENJOY KLİMALI', color:'Gri', price:349750, date:'22 Eylül 2026'}
];

const grid = document.querySelector('#vehicleGrid');
const search = document.querySelector('#searchInput');
const sort = document.querySelector('#sortSelect');
const storeUrl = 'https://tekdasotomotiv.sahibinden.com';
const money = n => new Intl.NumberFormat('tr-TR').format(n) + ' TL';

function render(){
  let list = vehicles.filter(v => v.title.toLocaleLowerCase('tr-TR').includes(search.value.toLocaleLowerCase('tr-TR')));
  if(sort.value==='priceAsc') list.sort((a,b)=>a.price-b.price);
  if(sort.value==='priceDesc') list.sort((a,b)=>b.price-a.price);
  grid.innerHTML = list.map(v => `
    <article class="vehicle-card">
      <div class="vehicle-media"></div>
      <div class="vehicle-body">
        <h3 class="vehicle-title">${v.title}</h3>
        <div class="vehicle-meta"><span>Renk: ${v.color}</span><span>İlan: ${v.date}</span></div>
        <div class="vehicle-price"><strong>${money(v.price)}</strong><a href="${storeUrl}" target="_blank" rel="noopener">İlanı Aç ↗</a></div>
      </div>
    </article>`).join('');
}
search.addEventListener('input',render);sort.addEventListener('change',render);render();

const menuButton=document.querySelector('.menu-button');
const mobileMenu=document.querySelector('.mobile-menu');
menuButton.addEventListener('click',()=>{const open=mobileMenu.hasAttribute('hidden'); if(open){mobileMenu.removeAttribute('hidden');menuButton.setAttribute('aria-expanded','true')}else{mobileMenu.setAttribute('hidden','');menuButton.setAttribute('aria-expanded','false')}});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileMenu.setAttribute('hidden','')));

document.querySelectorAll('.needs-link').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();const labels={whatsapp:'WhatsApp bağlantısı',phone:'telefon numarası',map:'Google Maps bağlantısı'};alert(`${labels[el.dataset.purpose]} gönderildiğinde buraya ekleyeceğim.`)}));
