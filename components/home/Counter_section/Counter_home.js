import React, {useState} from 'react';
import useTranslation from "next-translate/useTranslation";
import { CounterContainer, CountersContainer, Counter } from './Counter.styled';
import { BodyText4 } from '../../../basic_components/texts/Texts';
import CountUp, { startAnimation } from 'react-countup';
import { Waypoint } from 'react-waypoint';

const Counter_home = (props) => {

  const { t, lang } = useTranslation();
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVWEnter = () => {
    setViewPortEntered(true);
  }

  const title1 = t("home:counter_title1");
  const title2 = t("home:counter_title2");
  const title3 = t("home:counter_title3");


  return (<>
        <CountersContainer {...props}>
            <CounterContainer>
                <h2 style={{color: "white"}}>
                    <Waypoint onEnter={onVWEnter}>
                        <div>
                            {viewPortEntered && <CountUp end={190} duration={3} suffix="+" /> }
                        </div>
                    </Waypoint>
                </h2>
                <p >
                    <BodyText4 style={{color: "white"}}>{title1}</BodyText4>
                </p>
            </CounterContainer>
            <CounterContainer>
                <h2 style={{color: "white"}}>
                    <Waypoint onEnter={onVWEnter} >
                        <div>
                            {viewPortEntered && <CountUp end={925} duration={3} suffix="+" /> }
                        </div>
                    </Waypoint>
                </h2>
                <p >
                    <BodyText4 style={{color: "white"}}>{title2}</BodyText4>
                </p>
            </CounterContainer>
            <CounterContainer >
                <h2 style={{color: "white"}}>
                    <Waypoint onEnter={onVWEnter}>
                        <div>
                            {viewPortEntered && <CountUp end={18} duration={3} suffix="+" /> }
                        </div>
                    </Waypoint>
                </h2>
                <p >
                    <BodyText4 style={{color: "white"}}>{title3}</BodyText4>
                </p>
            </CounterContainer>
        </CountersContainer>

  </>
  )
}

export default Counter_home;