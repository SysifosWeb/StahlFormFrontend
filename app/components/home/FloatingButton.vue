<template>
  <!-- Mobile bottom bar -->
  <div
    class="
      fixed bottom-0 left-0 z-50
      flex w-full
      bg-white
      border-t border-gray-200
      shadow-[0_-4px_10px_rgba(0,0,0,0.15)]
      md:hidden
      py-1
    "
  >
    <!-- Llamar -->
    <a
      href="tel:+56512605035"
      class="
        flex-1 flex flex-row items-center justify-center gap-2
        py-3
        text-gray-700
        transition
        hover:bg-gray-50
        border-r border-gray-300
      "
    >
      <svg
        class="w-5 h-5 text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.48 2.53.74 3.88.74a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.67.74 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"
        />
      </svg>
      <span class="text-sm font-medium">Llamar</span>
    </a>

    <!-- WhatsApp -->
    <a
      href="https://wa.me/56993465157?text=Hola,%20quiero%20más%20información"
      target="_blank"
      class="
        flex-1 flex flex-row items-center justify-center gap-2
        py-3
        text-gray-700
        transition
        hover:bg-gray-50
        border-r border-gray-300
      "
    >
      <svg
        class="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
      >
        <path
          fill="#25D366"
          d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1z"
        />
      </svg>
      <span class="text-sm font-medium">WhatsApp</span>
    </a>

    <!-- Correo -->
    <a
      href="mailto:info@faremin.cl"
      class="
        flex-1 flex flex-row items-center justify-center gap-2
        py-3
        text-gray-700
        transition
        hover:bg-gray-50
      "
    >
      <svg
        class="w-5 h-5 text-red-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
        />
      </svg>
      <span class="text-sm font-medium">Correo</span>
    </a>
  </div>
</template>
