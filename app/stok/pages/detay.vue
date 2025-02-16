<template>
    <div>
      <h1>Burası STOK Detay Sayfası</h1>
      <button @click="navigateTo('/app/Stok')">Geri Dön</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const navigateTo = (path) => {
    router.push(path);
  };
  </script>
  