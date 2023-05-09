export default async function sitemap(){
     const routes = [''].map((route) => ({
          url: `https://pranav.ga${route}`,
          lastModified: new Date().toISOString()
     }))

     return [...routes]
}