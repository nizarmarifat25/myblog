<script setup lang="ts">
import { markRaw } from "vue";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { assignments } from "../data/assignments";
import { ArrowRight, Users, Bot, AppWindow, FileText } from "lucide-vue-next";

const projects = [
  {
    id: 1,
    title: "DDS: Daging di Hari Sabtu",
    role: "Pendiri & Mentor",
    description:
      "Komunitas pembelajaran pemrograman dan sesi berbagi mingguan yang berfokus pada rekayasa perangkat lunak dan pengembangan teknologi.",
    span: "md:col-span-2",
    icon: markRaw(Users),
  },
  {
    id: 2,
    title: "Academic Assistant AI",
    role: "Pengembang Fullstack",
    description:
      "Pengembangan chatbot cerdas berbasis arsitektur Retrieval-Augmented Generation (RAG) untuk sistem informasi akademik kampus.",
    span: "md:col-span-1",
    icon: markRaw(Bot),
  },
];
</script>

<template>
  <div class="container mx-auto px-6 max-w-5xl">
    <section
      class="py-40 md:py-56 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-[1500ms] ease-out"
    >
      <div
        class="inline-flex items-center gap-3 mb-10 px-6 py-2.5 rounded-full border border-white/[0.05] bg-white/[0.02] backdrop-blur-2xl text-[0.7rem] font-medium text-zinc-400 tracking-[0.2em] uppercase shadow-2xl"
      >
        <span class="relative flex h-1.5 w-1.5">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-300"
          ></span>
        </span>
        Mahasiswa Informatika & Software Engineer
      </div>

      <h1
        class="text-6xl md:text-[6.5rem] font-extrabold tracking-tighter mb-10 leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-200 to-zinc-600 drop-shadow-2xl"
      >
        From Logic to Launch.
      </h1>

      <p
        class="text-lg md:text-xl text-zinc-400 max-w-2xl mb-16 leading-relaxed font-light tracking-wide"
      >
        Selamat datang. Saya Muhammad Nizar Marifat. Ruang digital ini
        didedikasikan sebagai portofolio eksplorasi teknologi dan pengarsipan
        riset akademik.
      </p>

      <div class="flex flex-wrap justify-center gap-6 w-full">
        <a href="#proyek">
          <Button
            size="lg"
            class="rounded-full pl-8 pr-6 font-medium tracking-wide shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.15)] hover:-translate-y-1 transition-all duration-700 h-14 bg-white text-black hover:bg-zinc-200 text-sm uppercase group"
          >
            Jelajahi Karya
            <ArrowRight
              class="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              stroke-width="1.5"
            />
          </Button>
        </a>
      </div>
    </section>

    <section id="proyek" class="py-32 scroll-mt-32">
      <div class="mb-20 text-center flex flex-col items-center">
        <h2
          class="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6"
        >
          Proyek & Inisiatif
        </h2>
        <div class="h-[1px] w-12 bg-zinc-700 mb-6"></div>
        <p class="text-base text-zinc-500 font-light tracking-wide">
          Eksplorasi rekayasa perangkat lunak dan kontribusi komunitas.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project.id"
          :class="[project.span, 'relative group']"
        >
          <div
            class="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[2rem] -z-10 blur-2xl"
          ></div>

          <div
            class="h-full p-12 rounded-[2rem] border border-white/[0.04] bg-[#0a0a0c]/80 backdrop-blur-3xl shadow-2xl hover:bg-white/[0.02] hover:border-white/[0.08] hover:-translate-y-2 transition-all duration-[800ms] flex flex-col justify-between cursor-default"
          >
            <div>
              <div class="flex items-center justify-between mb-10">
                <div
                  class="inline-flex px-4 py-2 rounded-full bg-transparent text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-500 border border-white/[0.05]"
                >
                  {{ project.role }}
                </div>
                <div
                  class="p-2 rounded-full bg-white/[0.02] border border-white/[0.05] text-zinc-400 group-hover:text-zinc-100 group-hover:bg-white/[0.05] transition-all duration-500"
                >
                  <component
                    :is="project.icon"
                    class="w-5 h-5"
                    stroke-width="1.5"
                  />
                </div>
              </div>
              <h3
                class="text-3xl font-semibold text-zinc-100 mb-6 tracking-tight"
              >
                {{ project.title }}
              </h3>
              <p class="text-base text-zinc-500 leading-loose font-light">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="tugas" class="py-32 scroll-mt-32 border-t border-white/[0.02]">
      <div class="mb-20 text-center flex flex-col items-center">
        <h2
          class="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6"
        >
          Arsip Akademik
        </h2>
        <div class="h-[1px] w-12 bg-zinc-700 mb-6"></div>
        <p class="text-base text-zinc-500 font-light tracking-wide">
          Dokumentasi analisis dan laporan komprehensif studi informatika.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          v-for="task in assignments"
          :key="task.id"
          class="group relative overflow-hidden rounded-[2.5rem] border border-white/[0.04] bg-[#0a0a0c]/80 backdrop-blur-3xl shadow-2xl hover:border-white/[0.08] hover:-translate-y-2 transition-all duration-[800ms] p-2"
        >
          <div
            class="absolute inset-0 bg-gradient-to-tr from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 blur-3xl"
          ></div>

          <div
            class="h-full bg-transparent rounded-[2rem] p-10 flex flex-col relative z-10"
          >
            <CardHeader class="p-0 mb-10 border-none">
              <div class="flex items-center gap-3 mb-8">
                <FileText class="w-5 h-5 text-zinc-500" stroke-width="1.5" />
                <div
                  class="inline-flex px-4 py-2 rounded-full bg-transparent text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-500 border border-white/[0.05]"
                >
                  {{ task.subject }} &mdash; {{ task.date }}
                </div>
              </div>
              <CardTitle
                class="text-3xl leading-tight font-semibold text-zinc-100 border-none tracking-tight"
                >{{ task.title }}</CardTitle
              >
            </CardHeader>

            <CardContent
              class="p-0 flex-grow flex flex-col justify-between border-none"
            >
              <CardDescription
                class="text-base text-zinc-500 mb-14 line-clamp-3 leading-loose font-light"
              >
                {{ task.summary }}
              </CardDescription>

              <router-link
                :to="'/tugas/' + task.id"
                class="block mt-auto w-full"
              >
                <Button
                  variant="outline"
                  class="w-full h-14 rounded-full font-medium tracking-wide text-sm uppercase border-white/[0.08] bg-transparent text-zinc-300 hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-700 shadow-none flex items-center justify-center gap-3 group/btn"
                >
                  Rincian Arsip
                  <ArrowRight
                    class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                    stroke-width="1.5"
                  />
                </Button>
              </router-link>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  </div>
</template>
