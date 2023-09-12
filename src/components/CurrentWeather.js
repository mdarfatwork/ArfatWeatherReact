const CurrentWeather = ({data}) => {
    const style = {
        container: `mx-2`,
        weather: `max-w-[400px] rounded-xl shadow-[10px_-2px_20px_2px_rgba(0,0,0,30%)] text-black bg-gradient-to-r from-[#FFFFFE] to-[#FFECD2] mx-auto mt-[30px] px-[20px] pb-[20px] `,
        top: `flex justify-between items-center`,
        city: `text-[#696868] font-semibold text-xl leading-none m-[0] mb-[8px] tracking-[1px]`,
        weatherDescription: `font-normal text-sm leading-none m-[0]`,
        weattgerIcon: `w-[100px]`,
        bottom: `flex justify-between items-center`,
        temperature: `font-semibold text-[70px] w-auto tracking-[-5px] my-[10px] mx-0 text-[#282828]`,
        details: `w-full pl-[20px]`,
        prameterRow: `flex justify-between`,
        prameterLabel: `text-left font-normal text-xse`,
        prameterValue: `text-right font-semibold text-xse`,
    }
    return (
        <div className={style.container}>
        <div className={style.weather}>
            <div className={style.top}>
                <div>
                    <p className={style.city}>{data.city}</p>
                    <p className={style.weatherDescription}>{data.weather[0].description}</p>
                </div>
                <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className={style.weattgerIcon} />
            </div>
            <div className={style.bottom}>
                <p className={style.temperature}>{Math.round(data.main.temp)}°C</p>
                <div className={style.details}>
                    <div className={style.prameterRow}>
                        <span className={style.prameterLabel}>Feels Like</span>
                        <span className={style.prameterValue}>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className={style.prameterRow}>
                        <span className={style.prameterLabel}>Wind</span>
                        <span className={style.prameterValue}>{data.wind.speed} m/s</span>
                    </div>
                    <div className={style.prameterRow}>
                        <span className={style.prameterLabel}>Humidity</span>
                        <span className={style.prameterValue}>{data.main.humidity}%</span>
                    </div>
                    <div className={style.prameterRow}>
                        <span className={style.prameterLabel}>Pressure</span>
                        <span className={style.prameterValue}>{data.main.pressure}mb</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default CurrentWeather;