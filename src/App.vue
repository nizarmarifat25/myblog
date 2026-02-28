<script setup lang="ts">
</script>

<template>
  <div class="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-zinc-200 selection:text-zinc-900">
    <div class="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] opacity-50"></div>

    <header class="sticky top-0 z-50 w-full border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl">
      <div class="container mx-auto px-6 h-16 flex items-center justify-between max-w-5xl">
        <a href="/" class="font-extrabold text-xl tracking-tighter">Nizar.</a>
        <nav class="flex items-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          <a href="/" class="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Home</a>
          <a href="#tugas" class="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Tugas</a>
        </nav>
      </div>
    </header>

    <main class="relative z-10">
      <router-view />
    </main>

    <footer class="border-t border-zinc-200/50 dark:border-zinc-800/50 py-10 mt-20">
      <div class="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
        <p>&copy; 2026 Muhammad Nizar Marifat.</p>
        <div class="flex gap-6 mt-4 md:mt-0 font-medium">
          <a href="https://github.com/nizarmarifat25" class="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/nizar-marifat/" class="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</template>