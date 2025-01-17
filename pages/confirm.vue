<!-- chatgpt yazdığı sayfa -->

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useSupabaseClient } from '#imports';
import { onMounted } from 'vue';

const router = useRouter();
const route = useRoute();
const supabase = useSupabaseClient();

onMounted(async () => {
  const email = route.query.email || '';
  const password = route.query.password || '';

  if (!email || !password) {
    console.error('mail veya şifre eksik');
    router.push('/login'); // Eksik bilgi varsa login sayfasına yönlendir
    return;
  }

  // Supabase ile giriş yap
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.error('Login error:', error.message);
    router.push('/login'); // Hata varsa login sayfasına yönlendir
    return;
  }else{
    const { data:krole, error } = await supabase.from('staff').select('role_id').eq('email', email);
    const { data:grole, errors } = await supabase.from('roles').select('id,name');
    
    if (error) {
      console.error('Error getting staff:', error.message);
      router.push('/login'); // Hata varsa login sayfasına yönlendir
      return;
    }
    if (errors) {
      console.error('Error getting staff:', error.message);
      router.push('/login'); // Hata varsa login sayfasına yönlendir
      return;
    }
    // console.log("role verisi saf hali",krole);
    // console.log("role verisi istediğim hali: ",krole[0].role_id);
    // console.log("tüm roller verisi: ",grole);
    for (let i = 0; i < grole.length; i++) {
      if(grole[i].id === krole[0].role_id){
        router.push(`/dashboard/${grole[i].name}`);
        console.log("gelen rol: ",grole[i].name);
      }
      else{
        console.log("Rol bulunamadı");
      }
    }
  }
  

  // console.log('Login successful');
  // router.push('/dashboard/servis'); // Başarılı giriş sonrası dashboard'a yönlendir
});
</script>

<template>
  <!-- Bu sayfa kullanıcı tarafından görülmeyecek -->
</template>
