# Phase 2: Nextjs
![image](https://i.pinimg.com/564x/32/9a/d8/329ad85f4ab2047cae13d582274f9270.jpg)

## Kenapa Nextjs?
Nextjs, adalah fullstack framework yang di bangun di atas React. Nextjs memungkinkan kita untuk mengirim hasil konten dari server ke browser atau yang biasa disebut dengan *server side rendering* / *SSR*. Dan ada juga hal yang sudah melekat erat di Nextjs ini salah satunya *file based routing*, penasaran? ikuti terus ya materi-materi **RPN**, semangat. 

## Kekurangan dan kelebihan Nextjs?
![image](https://utfs.io/f/fef3daaf-4eca-4354-9eb6-f43ac7482d5b-1axopr.png)<br/>
*note*: untuk pengetahuan, karena nextjs dibuat di atas react jadi saya memasukkan +- React juga disini.

*React*<br/>
(+)
1. **Komponen Reusable** : yap seperti yang kita tau, cara bermain react yaitu dengan membuat component-component kecil lalu di panggil sesuai dengan kebutuhan.
2. **Lebih Fleksibel** : React tidak memiliki pola arsitekstur khusus, jadi..just do what's on your mind.
3. **Ecosystem yang luas** : React memiliki lebih banyak package / library yang dapat didownload di banding Nextjs.
4. **Komunitas** : Komunitas sangat penting, itu lah kenapa saya masukkan kedalam sebuah keunggulan. Karena tidak menutup kemungkinan bug yang kalian punya akan solve saat bertanya di komunitas.

(-)
1. **SEO** : Karena berjalan di Client side, search engine jadi lebih sulit dalam pencarian indeks konten dan keterlambatan dalam rendering konten di sisi klien
2. **Rawan Bug** : no comment

*Nextjs*<br/>
(+)
1. **SSR/Server Side Rendering** : Seperti yang udah di singgung diawal, Server side rendering pada nextjs adalah fitur paling goks yang ada di nextjs ini. Dengan SSR kalian bisa meningkatkan SEO, karena project kalian akan berjalan di server
2. **SSG/Server Side Generation** : SSG ini 11 12 dengan SSR bedanya SSG ini terkhusus untuk webstatic. Dengan SSG web static kalian akan berjalan dengan sangat amat cepat
3. **File Based Routing** : File based routing adalah, routing dengan bermodalkan File, memudahkan kita dalam memanage sebuah route dan page.
4. **Isomorfik** : Tidak hanya berjalan di server, nextjs juga dapat berjalan di CSR.

(-)
1. **Kompleksitas** : Ya karena nextjs adalah new modernnya react, jadi kalian harus mempelajari dan memahami betul fitur-fiturnya terlebih dahulu. Sebelum membuat sebuah project menggunakan nextjs.
2. **Konfigurasi Tambahan** : no comment

## Main Concepts Nextjs
1. Routes dan pages
2. Navigation
3. Assets and Metadata
4. Pre-rendering and data fetching (SSG, SSR)

<br/><br/>
# ====== Mari kita mulai ======
<br/><br/>


## Install / create Nextjs project
oke, gak usah lama-lama kita langsung saja buat project Nextjs disini, caranya adalah dengan:
```
npx create-next-app@latest rpn-article
```
*note*: rpn-article adalah nama project, jadi kalian bisa ganti dengan apa yang kalian inginkan

![image](https://utfs.io/f/2fd43e83-f566-4fcc-b4c2-103253091283-z2lfui.jpeg)

*note*: untuk sementara ikuti saja seperti gambar diatas.

![image](https://utfs.io/f/34ef797f-64de-4c17-ab0b-b0885a32ffc6-dpnzra.jpg)

setelah install, nanti pada folder `app` kita isinya kurang lebih seperti itu. Oke langsung ke langkah berikutnya<br/>

## Jalankan Nextjs project
setelah install kita jalankan project next kita
```
npm run dev
```

## (1) Routes dan pages
#### Apa itu Routes dan Pages?
*Routes* adalah sebuah endpoint unique yang memiliki dimana tiap tiap route memiliki pages / content yang berbeda<br/>
*Pages* adalah content yang ada di sebuah route
<br/><br/>

#### Bagaimana cara membuat Routes dan Pages?
untuk membuat route pada nextjs sangatlah mudah, cukup membuat folder baru didalam app. Mudah bukan?
oke langsung aja kita buat aja routenya `app/welcome` , dengan ini kamu telah membuat 1 route.<br/>
jika kamu cek di `localhost:3000/welcome` hasilnya akan seperti gambar di bawah <br/><br/>
![image](https://utfs.io/f/a830a2c1-09b6-4e4a-83d3-bb59293a8464-dpnztx.jpg)<br/>
kenapa notfound? ***karena suatu route itu harus memiliki page / content.*** Pada nextjs cukup mudah untuk membuat page / content caranya dengan menambahkan <ins>page.js</ins> pada folder route, dalam contoh ini folder route kita adalah welcome dan hasil nya akan seperti ini `app/welcome/page.js` setelah itu kita isi page.js kita dengan

```html
export default function Page() {
    return <>Hello from Welcome route^^</>
}
```

lalu kita lihat kembali `localhost:3000/welcome`
<br/>
![image](https://utfs.io/f/bab232c7-3ceb-4c33-8dd1-9a5dad8b2ccf-214y.jpeg)<br/>
*note*: jika sudah sesuai dengan gambar di atas, berarti kamu telah berhasil membuat route dan page pada Nextjs project

<br/></br>
## (2) Navigation
#### Apa itu Navigation?
sesuai namanya *Navigation* / navigasi adalah pemindahan pengguna dari *route* satu ke *route* lainnya.
<br/><br/>
#### Bagaimana cara menggunakan Navigation pada Nextjs?
untuk membuat navigation kita bisa membuatnya di server atau client side, kalau di *server side* kita bisa menggunakan tag `Link`, kalau di *client side* kita bisa menggunakan `useRouter()`. Sebelum itu saya ingin kalian download app folder dulu di: https://github.com/Yuta4u/rpn-next-js/blob/main/02-navigation/app.zip <br/> setelah kalian download dan extract app foldernya, kalian ganti app folder kalian dengan app folder yang baru saja kita download.
<br/><br/>
lalu kalian jalankan kembali projectnya, maka tampilannya akan seperti ini
![image](https://utfs.io/f/185d93ab-7eb7-4e30-96ba-80ac7371a6de-8js3ug.jpg)
*note*: jika sudah sesuai, maka bisa lanjut ke step berikutnya
<br/>
#### 📌Link
Link adalah **<ins>SSR Navigate</ins>**<br/>
oke, kita mulai dari *Link* tag terlebih dahulu, cara pakai *Link* tag ini cukup mudah, cukup export lalu kita bungkus trigger dengan *Link* tag, lalu tambahkan href="". Seperti contoh yang ada kalian buka file pada folder Link, `app/link/page.js`<br/>
![image](https://utfs.io/f/8631c9d4-3cbb-4325-bd5d-245928066996-mm8jgz.png)

#### 📌useRouter()
useRouter adalah **<ins>CSR Navigate</ins>**<br/>
selanjutnya untuk navigate di *client side* kalian cukup mengimport
```html
import {useRouter} from "next/navigation"
```
lalu kalian gunakan seperti ini useRouter().push("/"). Tapi agar lebih enak dilihat, use router saya tampung di variabel router, jadi cara atau hasil akhirnya ada seperti gambar di bawah
![image](https://utfs.io/f/bd47bf88-ca2c-4a99-8d96-e55a6f7cf642-5h3g1f.png)
*note*: karena use router ini hanya bisa berjalan di *client side*, kalian harus menambahkan 'use client' dipaling atas pada file yang berjalan di *client side*
<br/>
#### 📌Kesimpulan
-Jika kalian ingin menggunakan yang berhubungan dengan interaksi client atau sebutannya client side, kalian wajib menambahkan 'use client' dipaling atas pada file.<br/>
-Contoh jika kalian ingin menggunakan useState/useEffect/useRouter kalian wajib menambahkan 'use client' pada file.<br/>
-Sebenarnya navigate itu bermacam-macam cuman yang paling umum adalah dengan `Link` untuk *server side* dan `useRouter()` untuk *client side*

<br/></br>
## (3) Assets and Metadata
#### 📌Assets
#### Apa itu *Assets*?
*assets* adalah sekumpulan file statis yang digunakan oleh aplikasi web. Contohnya seperti gambar, font, dan file. 
<br/><br/>

#### Bagaimana cara menggunakan *Assets*?
oke, kita mulai dari Assets dulu ya, assets pada nextjs itu kuncinya ada di folder public. Semua yang berhubungan dengan assets harus ada di dalam folder public ini. langsung aja kita praktekkan.<br/>
buat route baru `/images/page.jsx` lalu copy code dibawah dan paste ke page.jsx

```
import Image from "next/image"

export default function Page() {
  return (
    <Image src="/renkaji.jpg" width={300} height={300} alt={"renkaji img"} />
  )
}
```
jika kalian save, dan lihat ke url `/images`:<br/>
![image](https://utfs.io/f/c28ec5b1-1c87-4cee-a3ff-477b497fa521-flpkus.jpg)
<br/>
kenapa demikian? karena di folder public kita tidak ada gambar renkaji.jpg. Oke sekarang saya pengen kalian download folder public yang sudah disediakan. [https://github.com/Yuta4u/rpn-next-js/blob/main/03-assets-dan-metadata/public.zip]<br/>
kalau sudah, taro folder public yang baru saja kalian download, diluar app kalian(*setara dengan app folder*)<br/>
*note*: pastikan hanya ada 1 folder public, jika ada public folder lain, kalian hapus saja

jika kalian save, dan lihat kembali.<br/>
![image](https://utfs.io/f/29ebf0a6-56ce-4d51-82a9-0a61173aca35-flpkut.jpg)<br/>
*note*: jika gambar sudah muncul, berati kalian bisa lanjut ke langkah selanjutnya.<br/>

oke sekarang saya akan memberi contoh lain bagaimana cara menggunakan public folder dengan mengganti icon web kita.<br/>
pada `main.jsx` kalian copy dan ganti Rootlayoutnya dengan code dibawah.
```
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/rpn-logo.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```
*note*: pastikan ada file dengan nama yang sama pada href. (**disini saya pakai rpn-logo.png**) kalian bisa dapatkan logonya di [https://github.com/Yuta4u/rpn-next-js/blob/main/03-assets-dan-metadata/logo.zip]<br/>
maka hasilnya akan seperti gambar dibawah<br/>
![image](https://utfs.io/f/ca622c7a-2c07-428c-a73d-f6e38d2e2837-flpkuv.jpg)<br/>
*note*: pastikan tidak ada favicon.ico pada project app kita.
<br/><br/>
#### Apa itu *Metadata*?
#### 📌Metadata
*Metadata* dalam Nextjs biasanya mengacu pada informasi tambahan yang disisipkan ke dalam HTML untuk membantu mesin pencari, media sosial, dan browser memahami konten dan tujuan halaman web. Meta data ini mencakup tag seperti title, description, keywords,

#### Bagaimana cara menggunakan *Metadata*?
Metadata biasanya ada pada file yang memiliki tag body, contohnya pada project kita kali ini, tag `<body>` kita kali ini ada di layout.js, jadi kita akan memasukkan *metadata* / informasi tambahan pada file tersebut.<br/><br/>
oke langsung saja kita praktekkan, buka `layout.js` kalian dan ketikkan code di bawah<br/>
![image](https://utfs.io/f/26c845ed-c271-4800-9419-89a26344d069-5h3g0k.png)<br/>
Jika kalian teliti lagi, sebenarnya cuman ada perubahan di metadata. Yup betul, seperti itulah cara pemakaian metadata pada nextjs, sebenarnya masih banyak cara yang lain. Seperti mengimport tag `Head` dll. (kalian bisa explore2 sendiri)<br/><br/>
lalu kalian jalankan dan inspect element pada browser
![image](https://utfs.io/f/34c004d1-0f90-45d0-9d36-f6f22f7541b2-2e8.png)<br/>
*note*: jika kalian sudah melihat metadata yang ditambahkan didalam inspect element, berarti kalian berhasil menambahkan metadata.
<br/><br/>
#### 📌Kesimpulan
1. Nextjs assets kuncinya ada di `public` folder, dan posisinya setara dengan `app` folder.
2. Untuk menambahkan metadata biasanya ada di file yang mempunyai tag `body`.


<br/><br/>
## (4) Pre-rendering and data fetching (SSG, SSR)
#### 📌Pre-rendering (SSG)
#### Apa itu *SSG*?
SSG atau *server side generation* adalah teknik pre-rendering di mana halaman HTML dihasilkan pada saat build time dan bukan saat runtime.

#### Bagaimana cara kerja *SSG*?
cara kerja *SSG* kurang lebih seperti ini:<br/>
![image](https://utfs.io/f/ad046ed8-e0a6-407b-b122-a046ad342cdd-11u91q.png)<br/>
ya, seperti yang kalian lihat,
1. kita akan membuild app kita
2. semua akan di build dan di cek, apakah ada route yang memiliki hit api? jika ada maka akan terjadinya *hit api* saat proses build ini.
3. jika sudah selesai build, maka app bisa di akses dan ketika di akses, dia tidak akan hit api lagi. Itulah kenapa ***SSG*** ini sangat2 cepat karena semua contentnya sudah dibuat sejak awal dan contentnya berupa static, fix dan tidak akan berubah

#### Contoh *SSG*
saya ingin kalian download [https://github.com/Yuta4u/rpn-next-js/blob/main/04-prerendering-datafetching-ssg-ssr/ssg/rpn-article.zip] lalu extract, jika sudah lakukan:
1. npm install 
2. npm run build
3. npm run start
4. lalu buka `localhost:3000` dibrowser kalian, maka harusnya tampilannya akan seperti ini:<br/>
![image](https://utfs.io/f/23d8d299-6e2e-410f-8247-5d447c0c2b29-dbn2fn.jpg)<br/>
nah langkah selanjutnya kalian inspect element lalu<br/>
![image](https://utfs.io/f/3169f262-9aae-4275-a4df-a915dde00800-22a9.png)<br/>
jika sudah ikutin langkah-langkah gambar diatas, maka kita bisa lanjut ke step berikutnya.
oiya mungkin kalian bertanya kenapa harus membuka inspect element?.
jawabnnya adalah *agar kalian bisa melihat jikalau ada terjadinya komunikasi antara browser ke server / api call*.<br/>
lalu, kalian klik tombol posts, jika sudah maka kalian ke bagian inspect kalian, maka tidak akan ada terjadinya api call.<br/>
kenapa demikian? karena sesuai penjelasan diatas, **semua sudah di buat sejak awal build**

<br/><br/>
*Penjelasan code*<br/>
![image](https://utfs.io/f/dad91827-b8df-4853-b77a-fa632683c6a9-tw1hk6..png)<br/>
*note*: function generateStaticParams hanya akan dijalankan saat proses build, jadi saat development, function ini tidak akan berjalan
<br/><br/>
untuk penjelasan functionnya
``` html
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()

  return posts.map((post) => ({
    id: post.id.toString(),
  }))
}
```
posts berisi 100 data array of object, dimana akan kita return dan loop untuk dipanggil id nya, jadi kita akan hit function yang dibawahnya, ya itu function PostPage 100x, yang dimana kita akan mendapatkan 100 page static, ya itu `/posts/1` - `/posts/100` jadi jika kalian mengunjungi `http://localhost:3000/posts/1` sampai `http://localhost:3000/posts/100`, kalian akan merasakan sangat cepat saat berganti page.

<br/><br/>
#### 📌Data-fetching (SSR)
SSR, *server-side rendering* adalah proses merender dibagian server.
#### Bagaimana cara kerja *SSR*?
Cara kerja *SSR* adalah, ketika user request maka server akan mengolah seluruh data dan content di server, dan ketika sudah selesai pengolahan, baru server akan mengirimnya ke user / browser.
#### Contoh *SSR*
Sebagai contoh kita pakai project yang sama yaitu rpn-article saja, nah coba kalian jalankan 
```
npm run dev
```
lalu kalian buka browser dan buka localhost kalian, `localhost:3000`<br/>
lalu kalian buka inspect element dan klik fetch seperti contoh di `SSG`<br/>
lalu kalian klik button posts, nanti kalian akan melihat ada 2 fetch yang muncul<br/>
![image](https://utfs.io/f/1d83bea4-d022-431b-b2db-0516a3018fd0-x1zqoa.png)<br/>
apa kedua fetch tersebut? yup, kedua fetch tersebut adalah data fetch api + content kita yang sudah jadi. Yang sudah di olah di server.

*Penjelasan code*<br/>
![image](https://utfs.io/f/83e12d4f-8d69-4b9c-8bdc-00ddab7f38fa-5h3fxz.png)<br/>
Ya, semua file page.jsx yang tidak memiliki *'use client'* dibagian atas, adalah ***SSR***
Karena page.jsx berjalan di sisi server, Anda bisa langsung melakukan operasi fetch data dari API atau database dalam file tersebut tanpa perlu khawatir tentang keterbatasan atau masalah keamanan yang biasanya ada di sisi klien.

<br/><br/>
## (5) Dynamic Routes
#### 📌Dynamic Routes
#### Apa itu *Dynamic Routes*?
*Dynamic Routes* adalah route yang bergantung pada parameter tertentu. Misalnya, Anda mungkin memiliki rute article yang terlihat seperti ini: /article/:slug, di mana :slug adalah parameter yang berubah tergantung pada posting yang ingin Anda tampilkan. Ini memungkinkan URL yang lebih jelas dan lebih semantik, seperti /article/will-ai-replace-humans untuk posting dengan slug will-ai-replace-humans.
<br/><br/>
#### Apa kegunaan utama *Dynamic Routes*
kegunaan utama *Dynamic routes* adalah untuk membuat url yang bervariasi dengan content yang sama namun dengan data yang berbeda-beda. Contoh ada route `article/roket`, `article/pesawat` dan `article/helikopter` ketiga route memiliki isi content yang sama, yang membedakan hanya datanya saja. Daripada kita membuat routenya statis satu per satu. kita bisa membuatnya hanya dengan `article/[nama-pesawat]`.
<br/><br/>
#### Perbedaan *Routes* dengan *Dynamic Routes*?
Perbedaannya hanya ada pada penamaan, kalau *routes* biasa dia hanya berupa nama folder, contoh *app/article*. Kalau *dynamic routes* kalian harus menambahkan array untuk membungkus nama folder, contoh *app/article/[slug]*.
![image](https://utfs.io/f/652ac916-c381-4b51-ac23-640400835fac-ljzg67.png)<br/>
*note*: untuk dynamic route tidak harus `[slug]`, kalian bisa menggantinya dengan nama parameter yang relevan, contoh `[id]` atau `[name]`
<br/><br/>
#### Cara menggunakan *Dynamic Routes*?
contoh url:`localhost:3000/article/test-route`
lalu pada dynamic route folder kalian cukup tambahkan *params* pada function utama.

```
export default function ArticleDetailPage({ params }) {
  console.log(params, "ini params")
  return <></>
}
```
maka hasil console.lognya akan seperti ini
<br/>
![image](https://utfs.io/f/be6f1571-8046-4d6f-bcfd-0e9c6e4e856a-gpi5b9.jpg)
*note*: slug adalah nama dynamic route folder.





<br/><br/>
oke, selanjutnya seperti biasa saya ingin kalian mendownload zip di sampung [https://github.com/Yuta4u/rpn-next-js/blob/main/05-dynamic-route/rpn-article.zip]
setelah sudah selesai download, kalian:
1. npm install
2. npm run dev
3. lalu buka browser `localhost:3000`

setelah sudah, seharusnya tampilannya akan seperti gambar dibawah
![image](https://utfs.io/f/8c38d758-fd44-45b3-b0c6-3af85b8e8067-2e9.png)
<br/>
lalu jika kalian klik buttonnya, kalian akan di arahkan ke `http://localhost:3000/article/will-ai-replace-humans` yak, udah itu aja, terus apa bedanya dengan dynamic routes?
oke, sekarang kamu ganti dynamic routenya menjadi `/test-route` atau apapun yang kalian mau.
![image](https://utfs.io/f/4d387027-6466-4cf7-91c8-1f10f89de331-22b5.png)
<br/>
oke, sekarang saya ingin kalian lihat code `app/article/[slug]/page.jsx` terlebih dahulu.
<br/>
jika kalian lihat code baris ke 24, kita memanggil mini component yaiitu *ArticleDetailContent*, dimana mini component ini menerima sebuah value yaitu articleSlug, value articleSlug ini akan dipakai untuk *mengambil data berdasarkan* / *select by* slug (baris ke 6).
Oiya didalam data, kita hanya memiliki 5 data. Kalian bisa melihat data-datanya pada gambar dibawah.
```
[
    {
        "id": 1,
        "slug": "will-ai-replace-humans",
        "title": "Will AI Replace Humans?",
        "content": "Since late 2022 AI is on the rise and therefore many people worry whether AI will replace humans. The answer is not that simple. AI is a tool that can be used to automate tasks, but it can also be used to augment human capabilities. The future is not set in stone, but it is clear that AI will play a big role in the future. The question is how we will use it.",
        "date": "2024-07-01",
        "image": "ai-robot.jpg"
    },
    {
        "id": 2,
        "slug": "beaver-plague",
        "title": "A Plague of Beavers",
        "content": "Beavers are taking over the world. They are building dams everywhere and flooding entire cities. What can we do to stop them?",
        "date": "2023-01-02",
        "image": "beaver.jpg"
    },
    {
        "id": 3,
        "slug": "couple-cooking",
        "title": "Spend more time together!",
        "content": "Cooking together is a great way to spend more time with your partner. It is fun and you get to eat something delicious afterwards. What are you waiting for? Get cooking!",
        "date": "2024-03-01",
        "image": "couple-cooking.jpg"
    },
    {
        "id": 4,
        "slug": "hiking",
        "title": "Hiking is the best!",
        "content": "Hiking is a great way to get some exercise and enjoy the great outdoors. It is also a great way to clear your mind and reduce stress. So what are you waiting for? Get out there and start hiking!",
        "date": "2024-01-01",
        "image": "hiking.jpg"
    },
    {
        "id": 5,
        "slug": "landscape",
        "title": "The beauty of landscape",
        "content": "Landscape photography is a great way to capture the beauty of nature. It is also a great way to get outside and enjoy the great outdoors. So what are you waiting for? Get out there and start taking some pictures!",
        "date": "2024-07-24",
        "image": "landscape.jpg"
    }
]
```

<br/> 
mungkin setelah kalian lihat datanya, kalian bisa menebak kenapa outputnya adalah 'tidak ada data'. Benar karena dari 5 data diatas tidak ada yang memiliki value slug 'test-route', itulah kenapa outputnya adalah 'tidak ada data' (baris 10 - 13). 
Coba kalian ganti dynamic routenya menjadi salah satu slug dari 5 data diatas. Contoh, menjadi `localhost:3000/article/landscape` ,maka outputnya akan seperti gambar di bawah.
<br/>

![image](https://utfs.io/f/3dbbe347-8cb7-4ef8-b940-33d2cd56c9ce-22b6.png)
<br/> selamat, kalian sudah menyelesaikan basic nextjs.
## (6) Authentication
#### Apa itu *Authentication*?
Authentication adalah proses untuk memverifikasi identitas seseorang atau entitas sebelum memberikan akses ke sistem, data, atau layanan tertentu. Authentication sendiri memiliki banyak cara, salah satunya adalah dengan password based, jwt token, atau OAuth (Open Authorization) atau aplikasi pihak ketiga, untuk pembelajaran saat ini kita akan menggunakan OAuth sebagai authentication.

seperti biasa, kalian downlaod dulu zip disamping [https://github.com/Yuta4u/rpn-next-js/blob/main/06-authentication/rpn-article.zip]
setelah sudah selesai download, kalian:
1. npm install
2. npm run dev
3. lalu buka browser `localhost:3000`

![image](https://utfs.io/f/c4f54de6-afdc-4907-9024-dc22389142e0-jnoyrt.jpg)
<br/>
jika tampilannya sudah seperti diatas, kalian bisa lanjut ke step berikutnya.

<br/><br/>
oke, pertama-tama saya ingin memperkenalkan package auth kita yaitu clerk, clerk adalah package / libary untuk menghandle authentication. Sebenarnya bukan hanya authentication saja, masih banyak lagi. Cuman kita pakai authnya saja.
oke langsung saja kalian install dulu packagenya didalam folder yang baru kita extract tadi

```html
npm install @clerk/nextjs
```

setelah itu kalian buat file middleware.js
lalu isi dengan:
<br/>

```
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const isProtectedRoute = createRouteMatcher(["/profile"])

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
```
penjelasan code:
<br/>
di file ini lah kita bisa menentukan protected route dan sebagainya. (bawaan dari clerknya, jadi cukup di copy paste dan ikutin saja untuk sekarang)
*note*: posisi file middleware.js harus setara dengan jsconfig.json
<br/><br/>
oke, jika sudah...kita bungkus web kita dengan `<ClerkProvider>`, buka `app/layout.js` lalu bungkus `{children}` dengan `<ClerkProvider>` seperti gambar di bawah
<br/>
![image](https://utfs.io/f/51c450ea-98f1-43b9-ba9d-d624051e09fa-jnoyqx.jpg)
<br/><br/>
lalu langkah terakhir kalian harus membuat `.env.local`, .env ini akan kita pakai sebagai penghubung web kita dengan clerk itu sendiri. Tapi sebelum itu ada beberapa langkah yang harus kalian lakukan:
1. daftar clerk, di *https://clerk.com/*
2. setelah berhasil daftar dan masuk, kalian langsung saja klik *create application*
3. lalu tampilannya akan seperti gambar di bawah,
![image](https://utfs.io/f/ab8092f7-d56b-4b10-8f50-8aeabf7e845b-jnoyqb.jpg)
<br/> jika tampilannya sudah sama, kalian cukup ceklis *github* dan *gmail* saja, lalu isi application name sesuai yang kalian mau (saran, ikutin saja seperti digambar)
4. setelah itu kalian cari *API Keys* di sidebar, lalu kalian copy paste keynya di .env.local (posisi file setara dengan package.json)
<br/>
![image](https://utfs.io/f/c8b52a5f-c900-40a4-b105-0ec052e86927-22b7.png)


















