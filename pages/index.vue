<template>
  <div class="">
    <v-btn class="w-full" color="secondary" @click="veriGetir" >Hello</v-btn>
    <v-text-field label="Label"></v-text-field>
    <pre>
      {{veri}}
    </pre>
  </div>


<!-- Burası yeni yapıda yönlendirme butonları -->
  <div>
    <h1>Burası Main Index Sayfası</h1>
    <button @click="navigateTo('/app/stok')">Stok Uygulamasına Git</button>
    <button @click="navigateTo('/app/dash')">Dashboard Uygulamasına Git</button>
    <button @click="navigateTo('/app/cbs')">CBS Uygulamasına Git</button>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const veri = ref()
const veriGetir = async() => {
  
let { data: departments, error } = await supabase
  .from('departments')
  .select('*')
  veri.value = departments

}


const router = useRouter();
const navigateTo = (path) => {
  router.push(path);
};

</script>

