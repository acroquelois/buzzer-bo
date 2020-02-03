export const FORCE_DOWNLOAD = {
    methods: {
        forceFileDownload(response,filename){
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', filename)
            document.body.appendChild(link)
            link.click()
        }
    }
}