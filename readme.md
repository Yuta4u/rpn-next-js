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
4. Styling (Tailwind CSS)
5. Image
6. Client vs Server Components
7. Server Actions (POST, PUT, DELETE)
8. Suspense dan Streaming

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
#### Apa itu *Assets* dan *Metadata*?
#### 📌Assets
*assets* adalah sekumpulan file statis yang digunakan oleh aplikasi web. Contohnya seperti gambar, font, dan file. 

#### 📌Metadata
*Metadata* dalam Nextjs biasanya mengacu pada informasi tambahan yang disisipkan ke dalam HTML untuk membantu mesin pencari, media sosial, dan browser memahami konten dan tujuan halaman web. Meta data ini mencakup tag seperti title, description, keywords,
<br/><br/>

#### Bagaimana cara menggunakan *Assets* dan *Metadata*?
oke, kita mulai dari Assets dulu ya, assets pada nextjs itu kuncinya adalah di folder public. Semua yang berhubungan dengan assets harus ada di dalam folder public ini. langsung aja kita praktekkan
buat route baru `/images/page.jsx` lalu copy code dibawah dan paste ke page.jsx

```
import Image from "next/image"

export default function Page() {
  return (
    <Image src="/renkaji.jpg" width={300} height={300} alt={"renkaji img"} />
  )
}
```
jika kalian save, dan lihat ke url `images`:<br/>
![image](https://utfs.io/f/c28ec5b1-1c87-4cee-a3ff-477b497fa521-flpkus.jpg)
<br/>
kenapa demikian? karena di folder public kita tidak ada gambar renkaji.jpg. Oke sekarang saya pengen kalian download folder public yang sudah disediakan. []




*note*: nextjs akan mencari folder `public` sebagai base atau storage file statis kita. Jadi jika kita membutuhkan file statis, kita cukup memanggil file namenya saja, contoh diatas saya butuh gambar renkaji.jpg, saya cukup menuliskan */renkaji.jpg* saja.




