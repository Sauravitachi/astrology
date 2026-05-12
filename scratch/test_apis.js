async function test() {
  const signs = ['aries', 'taurus'];
  for (const sign of signs) {
    console.log(`Testing ${sign}...`);
    try {
      const res = await fetch(`https://ohmanda.com/api/horoscope/${sign}`);
      console.log(`Ohmanda ${sign}: ${res.status}`);
      const data = await res.json();
      console.log(data.horoscope ? "Ohmanda OK" : "Ohmanda missing horoscope");
    } catch (e) {
      console.log(`Ohmanda ${sign} error: ${e.message}`);
    }

    try {
      const res = await fetch(`https://freehoroscopeapi.com/api/v1/get-horoscope/daily?sign=${sign}&day=today`);
      console.log(`FreeHoroscope ${sign}: ${res.status}`);
      const data = await res.json();
      console.log(data.data ? "FreeHoroscope OK" : "FreeHoroscope missing data");
    } catch (e) {
      console.log(`FreeHoroscope ${sign} error: ${e.message}`);
    }
  }
}
test();
