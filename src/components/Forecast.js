import { Accordion, AccordionItemHeading, AccordionItem, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const style = {
        container: `my-5`,
        title: `text-2xl font-bold ml-2`,
        dailyItem: `bg-[#f5f5f5] rounded-lg h-[40px] mx-2 mt-[5px] flex items-center cursor-pointer text-sm py-[5px] px-[20px]`,
        iconSmall: `w-[40px]`,
        day: `text-[#212121] flex-1 font-semibold ml-[15px]`,
        description: `flex-1 mr-[15px] text-right`,
        MinMax: `text-[#757575]`,
        dailyDetailsGrid: `grid grid-cols-2 gap-x-15 gap-y-0 py-[5px] px-[15px] flex-1 bg-gradient-to-r from-[#FFFFFE] to-[#FFECD2] m-2 rounded-lg`,
        dailyDetailsGridItems: `items-center flex h-[30px] justify-between mx-2`,
        dailyDetailsGridItemsFirst: `text-[#757575] font-medium`,
        dailyDetailsGridItemsSecond: `text-[#212121] font-semibold`,
    }
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))

    return (
        <>
        <div className={style.container}>
            <label className={style.title}>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className={style.dailyItem}>
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className={style.iconSmall} />
                                    <label className={style.day}>{forecastDays[idx]}</label>
                                    <label className={style.description}>{item.weather[0].description}</label>
                                    <label className={style.MinMax}>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className={style.dailyDetailsGrid}>
                    <div className={style.dailyDetailsGridItems}>
                        <label className={style.dailyDetailsGridItemsFirst}>Pressure</label>
                        <label className={style.dailyDetailsGridItemsSecond}>{item.main.pressure}mb&nbsp;&nbsp;</label>
                    </div>
                    <div className={style.dailyDetailsGridItems}>
                        <label className={style.dailyDetailsGridItemsFirst}>Humidity</label>
                        <label className={style.dailyDetailsGridItemsSecond}>{item.main.humidity}%</label>
                    </div>
                    <div className={style.dailyDetailsGridItems}>
                        <label className={style.dailyDetailsGridItemsFirst}>Cloud</label>
                        <label className={style.dailyDetailsGridItemsSecond}>{item.clouds.all}%&nbsp;&nbsp;</label>
                    </div>
                    <div className={style.dailyDetailsGridItems}>
                        <label className={style.dailyDetailsGridItemsFirst}>Wind Speed</label>
                        <label className={style.dailyDetailsGridItemsSecond}>{item.wind.speed} m/s</label>
                    </div>
                    <div className={style.dailyDetailsGridItems}>
                        <label className={style.dailyDetailsGridItemsFirst}>Sea Level</label>
                        <label className={style.dailyDetailsGridItemsSecond}>{item.main.sea_level} m&nbsp;&nbsp;</label>
                    </div>
                    <div className={style.dailyDetailsGridItems}>
                        <label className={style.dailyDetailsGridItemsFirst}>Feels Like</label>
                        <label className={style.dailyDetailsGridItemsSecond}>{Math.round(item.main.feels_like)}°C</label>
                    </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
            </div>
        </>)
}
export default Forecast;
