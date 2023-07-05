export const spy = async () => {
  try {
    const _ip_url = "https://geolocation-db.com/json"
    // const _ip_url = "https://api.ipify.org/?format=json"
    const response = await fetch(_ip_url, {
      method: "GET",
    })

    let data = await response.json()
    console.log(data, "resssss===>")
  } catch (error) {
    console.log(error)
  }
}
