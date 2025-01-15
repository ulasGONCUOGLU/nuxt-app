<template>
    <div class="">
      <v-btn class="w-full" color="secondary" @click="veriGetir" >Hello</v-btn>
      <v-text-field label="Label"></v-text-field>
      <pre>
        {{veri}}
      </pre>

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

</script>

