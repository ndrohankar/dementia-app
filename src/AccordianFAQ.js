import React, { useState } from 'react';

const AccordionFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: 'What is dementia?', answer: 'Dementia is an umbrella term used to describe a range of neurological conditions affecting the brain that worsen over time. It is the loss of the ability to think, remember, and reason to levels that affect daily life and activities. Some people with dementia cannot control their emotions and other behaviors, and their personality may change.' },
    { question: 'How Is Dementia Treated?', answer: 'Visiting a primary care doctor is often the first step for people who are experiencing symptoms of dementia. Your doctor may refer you to a neurologist, which is a specialist in disorders of the brain and nervous system. Neurologists generally have the expertise needed to diagnose dementia.' },
    { question: 'What is the difference between Alzheimer’s and dementia?', answer: 'Dementia is not a disease itself, but a word used to describe a set of symptoms. Dementia is caused by diseases that affect the brain, and the symptoms of dementia can vary a great deal. They can include problems with memory, decision-making, communication, confusion, changes in mood and behaviour, and hallucinations.Dementia can be caused by a number of different diseases, with Alzheimer’s disease being the most common. Other causes of dementia include vascular dementia, dementia with Lewy bodies and frontotemporal dementia. In some cases, a person’s dementia is caused by more than one disease, such as Alzheimer’s disease and vascular dementia. This is often called mixed dementia.' },
    { question: 'I keep forgetting things, have I got dementia?', answer: 'Most of us forget things every day, like people’s names or where we put our keys, but this is not necessarily a sign of dementia. In dementia, memory loss is more serious than forgetting things every now and then. It is memory loss that starts to interfere with everyday life, for example getting lost when going to the local shop.There are many reasons why people experience memory problems. Some medicines and drugs can affect memory. Depression, anxiety, stress, vitamin deficiency, infections and thyroid problems can also make people forgetful. If you are worried about your memory and it’s getting worse, or getting in the way of everyday life, then you should talk to your doctor.' },
    { question: 'Is dementia becoming more common?', answer: 'Many people are worried that dementia is becoming more common. In fact, the number of people who develop dementia every year is actually falling, and has fallen by about 10% every 10 years since 1980s. This is likely due to people leading healthier lifestyles, and because of better management of medical conditions that can contribute to the development of dementia, like high blood pressure and diabetes. However, in the past, many people who developed dementia never received a diagnosis, which made overall rates seem low.This has started to change and, as a result, the number of people who develop dementia who do receive a diagnosis each year is increasing. Some other factors are contributing to this rise, making dementia seem more common now than it used to be. The UK population is getting older on average (people are living longer). And more people are talking about dementia, with one in two people knowing someone who has had a diagnosis. More than 200,000 people are diagnosed with dementia each year in the UK, and with advances in diagnosis and less social stigma attached to receiving a diagnosis, this figure will continue to rise.' },
    { question: 'Does dementia run in the family?', answer: 'Many of us will have a relative living with the condition – but this does not mean we will develop it too. Most of the genes passed down from our parents only have a small effect on our risk of developing dementia. So, for most people, their likelihood of developing dementia is influenced as much by their age and lifestyle, as their genes.However, in some rare cases, someone may inherit a faulty gene that directly causes a specific type of dementia. Some rare types of young onset Alzheimer’s and frontotemporal dementia are caused by faulty genes which run in families. These directly inherited dementias account for just one in every 100 (1%) cases of dementia, and symptoms often start in a person’s 40s or 50s' },
    { question: 'Is there a link between vaccines and an increased risk of dementia?', answer: 'Small amounts of metals, including mercury and aluminium, are often added to certain vaccines to improve how well the vaccine works (this is known as an ‘adjuvant’). There has been extensive research into the safety of these vaccines. There is no evidence to suggest that the trace amount of metals in vaccines have any long-term health effects. Recent research has even found that people who receive the flu vaccine have a lower risk of Alzheimer’s disease.' },
    { question: 'Should I take aspirin to prevent Alzheimer?', answer: 'This is not recommended. Medicines known as non-steroidal anti-inflammatory drugs (NSAIDs), which include aspirin and ibuprofen, have been tested to find out whether they could reduce Alzheimer’s risk. Clinical trials have found no evidence that low-dose NSAIDs can prevent dementia. There are also concerns about side-effects, which can sometimes be serious, so it is not advised to take these drugs to protect against Alzheimer’s.' },
  ];

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="accordion-faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-faq-item">
          <button
            className="accordion-question"
            onClick={() => handleClick(index)}
          >{openIndex === index ? "-":"+"}
            {faq.question}
          </button>
          {openIndex === index && <p className="accordion-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default AccordionFAQ;
