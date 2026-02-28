<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import { assignments } from '../data/assignments'
import { ArrowLeft, FileText, Download, Calendar } from 'lucide-vue-next'

const route = useRoute()
const task = computed(() => assignments.find(a => a.id === Number(route.params.id)))
</script>

<template>
  <div class="container mx-auto px-6 max-w-4xl py-32 animate-in fade-in slide-in-from-bottom-8 duration-[1500ms] ease-out min-h-[80vh] flex flex-col justify-center">
    <div v-if="task">
      <router-link to="/#tugas" class="inline-flex items-center gap-3 text-zinc-500 hover:text-white transition-colors duration-300 mb-16 text-sm font-medium uppercase tracking-[0.1em]">
        <ArrowLeft class="w-4 h-4" stroke-width="1.5" />
        Kembali ke Beranda
      </router-link>

      <div class="flex items-center gap-4 mb-10">
        <div class="inline-flex px-4 py-2 rounded-full bg-white/[0.02] text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-400 border border-white/[0.05]">
          {{ task.subject }}
        </div>
        <div class="flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-500">
          <Calendar class="w-3.5 h-3.5" stroke-width="1.5" />
          {{ task.date }}
        </div>
      </div>

      <h1 class="text-5xl md:text-6xl font-extrabold tracking-tighter mb-10 leading-[1.1] text-zinc-100">
        {{ task.title }}
      </h1>

      <div class="h-[1px] w-full bg-gradient-to-r from-zinc-800 to-transparent mb-12"></div>

      <div class="max-w-none mb-20">
        <p class="text-lg md:text-xl text-zinc-400 leading-loose font-light tracking-wide">
          {{ task.summary }}
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-6">
        <a :href="task.pdfUrl" download target="_blank" class="block w-full sm:w-auto">
          <Button size="lg" class="w-full sm:w-auto h-16 rounded-full px-10 font-medium tracking-wide text-sm uppercase shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.15)] hover:-translate-y-1 transition-all duration-700 bg-white text-black hover:bg-zinc-200 flex items-center justify-center gap-3 group/btn">
            <Download class="w-5 h-5 group-hover/btn:-translate-y-1 transition-transform duration-300" stroke-width="1.5" />
            Unduh Dokumen Lengkap
          </Button>
        </a>
      </div>
    </div>

    <div v-else class="text-center py-32">
      <FileText class="w-16 h-16 mx-auto text-zinc-700 mb-8" stroke-width="1" />
      <h2 class="text-3xl font-semibold text-zinc-300 mb-6">Arsip Tidak Ditemukan</h2>
      <router-link to="/">
        <Button variant="outline" class="rounded-full px-8 bg-transparent border-white/[0.08] text-zinc-400 hover:text-white h-12">
          Kembali ke Beranda
        </Button>
      </router-link>
    </div>
  </div>
</template>