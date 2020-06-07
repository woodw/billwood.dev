<script>
    const url = 'wss://billwood.glitch.me'
    const connection = new WebSocket(url)

    connection.onopen = () => {
        connection.send('hey') 
    }

    connection.onerror = (error) => {
        console.log(`WebSocket error: ${error}`)
    }

    connection.onmessage = (e) => {
        console.log(e.data)
    }
</script>

<style>
</style>

<h1>Incoming Announcment</h1>