<template>
    <div>
      <h1>Burası STOK Index Sayfası</h1>
      <button @click="navigateTo('/app/Stok/detay')">Detay Sayfasına Git</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const navigateTo = (path) => {
    router.push(path);
  };
  </script>
  