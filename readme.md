# Phase 2: Nextjs
![image](https://i.pinimg.com/564x/32/9a/d8/329ad85f4ab2047cae13d582274f9270.jpg)

## Kenapa Nextjs?
Nextjs, adalah fullstack framework yang di bangun di atas React. Nextjs memungkinkan kita untuk mengirim hasil konten dari server ke browser atau yang biasa disebut dengan *server side rendering* / *SSR*. Dan ada juga hal yang sudah melekat erat di Nextjs ini salah satunya *file based routing*, penasaran? ikuti terus ya materi-materi **RPN**, semangat. 

## Main Concepts Nextjs
1. Pages
2. Routing dan Navigation
3. Metadata
4. Styling (Tailwind CSS)
5. Image
6. Client vs Server Components
7. Server Actions (POST, PUT, DELETE)
8. Suspense dan Streaming

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

## (1) Pages dan Routes
untuk membuat route pada nextjs sangatlah mudah, cukup membuat folder baru didalam app. Mudah bukan?
oke langsung aja kita buat aja routenya `app/welcome` , dengan ini kamu telah membuat 1 route.<br/>
jika kamu cek di `localhost:3000/welcome` hasilnya akan seperti gambar di bawah <br/><br/>
![image](https://utfs.io/f/a830a2c1-09b6-4e4a-83d3-bb59293a8464-dpnztx.jpg)<br/>
kenapa notfound? ***karena suatu route itu harus memiliki page / content.*** Pada nextjs cukup mudah untuk membuat page / content caranya dengan menambahkan <ins>page.js</ins> pada folder route, dalam contoh ini folder route kita adalah welcome dan hasil nya akan seperti ini `app/welcome/page.js` <br/>
setelah itu kita isi page js dengan
```html
export default function Page() {
    return <>Hello from Welcome route^^</>
}
```

lalu kita lihat kembali `localhost:3000/welcome`
<br/>
![image](https://utfs.io/f/bab232c7-3ceb-4c33-8dd1-9a5dad8b2ccf-214y.jpeg)<br/>
*note* : jika sudah sesuai dengan gambar di atas, berarti kamu telah berhasil membuat route dan page pada Nextjs project



