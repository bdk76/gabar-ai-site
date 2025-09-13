
document.getElementById('y').textContent = new Date().getFullYear();
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  });
});

// Intake form submission via mailto (static hosting)
const form = document.getElementById('demoForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const name = (fd.get('name')||'').trim();
    const company = (fd.get('company')||'').trim();
    const phone = (fd.get('phone')||'').trim();
    const email = (fd.get('email')||'').trim();
    if(!name || !company || !phone || !email){ alert('Please complete all fields.'); return; }
    const subject = encodeURIComponent('Demo Request — Gabar AI');
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nPhone: ${phone}\nEmail: ${email}`);
    window.location.href = `mailto:info@gabar.ai?subject=${subject}&body=${body}`;
  });
}
