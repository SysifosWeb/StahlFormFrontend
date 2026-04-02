<script setup>
import { Noticias } from '@/assets/data/noticias.js'

const route = useRoute()
const currentId = computed(() => Number(route.params.id))

const newsItem = computed(() => {
  return Noticias.find((noticia) => noticia.id === currentId.value)
})

// SEO Meta tags
useHead({
  title: () => newsItem.value?.title ? `${newsItem.value.title} | FAREMIN Noticias` : 'Noticia | FAREMIN',
  meta: [
    {
      name: 'description',
      content: () => newsItem.value?.deck || 'Noticias y actualizaciones de FAREMIN'
    },
    {
      name: 'keywords',
      content: () => `noticias FAREMIN, ${newsItem.value?.title}, industria Chile`
    },
    {
      property: 'og:title',
      content: () => newsItem.value?.title
    },
    {
      property: 'og:description',
      content: () => newsItem.value?.deck
    },
    {
      property: 'og:image',
      content: () => newsItem.value?.src
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'article:published_time',
      content: () => newsItem.value?.date
    }
  ]
})

onMounted(() => {
  // Scroll to top on mount
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <section v-if="newsItem" class="py-8 lg:py-12">
      <div class="container mx-auto px-4 max-w-7xl">
        <!-- Header -->
        <header class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
          <!-- Text Content -->
          <div class="flex-1 flex flex-col gap-6">
            <small class="flex items-center gap-2 text-medium font-light mt-2">
              <Icon name="heroicons:calendar-days" size="1.1rem" />
              {{ newsItem.date }}
            </small>
            
            <h1 class="text-3xl lg:text-4xl font-bold text-medium leading-tight">
              {{ newsItem.title }}
            </h1>
            
            <div class="title-accent--special"></div>
            
            <p class="text-lg text-medium font-light leading-relaxed">
              {{ newsItem.deck }}
            </p>
          </div>
          
          <!-- Image -->
          <div class="flex-1 w-full lg:h-[400px]">
            <img 
              :src="newsItem.src" 
              :alt="newsItem.alt" 
              class="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </header>

        <!-- Article Content -->
        <article class="w-full">
          <div
            v-for="(item, index) in newsItem.content"
            :key="index"
            class="mb-8"
          >
            <!-- Paragraphs -->
            <p
              v-if="item.type === 'paragraph'"
              class="text-base lg:text-lg text-medium font-light leading-relaxed mt-2"
            >
              <template
                v-for="(part, partIndex) in item.text.split('#')"
                :key="partIndex"
              >
                <span v-if="partIndex % 2" class="font-bold">{{ part }}</span>
                <span v-else>{{ part }}</span>
              </template>
            </p>

            <!-- Subtitles -->
            <h4
              v-else-if="item.type === 'subtitle'"
              class="text-2xl font-bold text-medium py-4"
            >
              {{ item.text }}
            </h4>

            <!-- Images -->
            <div
              v-else-if="item.type === 'image'"
              class="flex flex-col items-center gap-3 py-6"
            >
              <img
                :src="item.src"
                :alt="item.alt"
                class="w-full lg:w-3/4 rounded-lg shadow-md object-cover"
              />
              <figcaption v-if="item.caption" class="text-sm text-medium font-light text-center italic">
                {{ item.caption }}
              </figcaption>
            </div>

            <!-- Videos -->
            <div
              v-else-if="item.type === 'video'"
              class="flex justify-center py-6"
            >
               <div class="flex flex-col items-center gap-3 w-full lg:w-3/4">
                <video
                  controls
                  muted
                  loop
                  playsinline
                  class="w-full rounded-lg shadow-md"
                >
                  <source :src="item.src + '?v=1'" type="video/mp4" />
                </video>
                <figcaption v-if="item.caption" class="text-sm text-medium font-light text-center italic">
                  {{ item.caption }}
                </figcaption>
              </div>
            </div>

            <!-- Lists -->
            <ul v-if="item.type === 'list'" class="list-disc pl-8 space-y-3 text-medium font-light">
              <li
                v-for="(listItem, listIndex) in item.items"
                :key="listIndex"
                class="text-base lg:text-lg leading-relaxed"
              >
                <span class="font-bold">{{ listItem.split(':')[0] }}:</span>
                {{ listItem.split(':')[1] }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
