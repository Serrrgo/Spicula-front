'use client';

import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { faqData } from './sectionFAQ/faq.data';
import { titleFont } from '@/fonts';

const SectionFAQ = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [answerHTML, setAnswerHTML] = useState(faqData[activeIndex].answer);
	useEffect(() => {
		setAnswerHTML(faqData[activeIndex].answer);
	}, [activeIndex]); // Обновляем ответ при смене activeIndex
	return (
		<section className='sectionFAQ'>
			<div className=' title sectionFAQ__title'>
				<h2 className={titleFont.className}>FAQ</h2>
			</div>
			<span />
			{faqData.map((item, i) => (
				<span
					className='sectionFAQ__quest'
					key={i}
				>
					<h4
						className={`sectionFAQ__quest_title ${i == activeIndex ? 'active' : ''}`}
						onClick={e => setActiveIndex(i)}
					>
						{item.question}
						<Icon
							className='sectionFAQ__quest_title_icon'
							icon='la:angle-left'
							height='unset'
						/>
					</h4>
				</span>
			))}
			<TransitionGroup component={null}>
				<CSSTransition
					key={activeIndex}
					timeout={500}
					classNames='fade'
				>
					<div className='sectionFAQ__answer'>
						<p dangerouslySetInnerHTML={{ __html: answerHTML }} />
					</div>
				</CSSTransition>
			</TransitionGroup>
		</section>
	);
};

export default SectionFAQ;
