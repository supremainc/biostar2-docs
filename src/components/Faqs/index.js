import styles from "./styles.module.css";

/**
 * FAQ 컴포넌트
 * @param {Object} props
 * @param {string|string[]} [props.product] - 필터링할 제품명(들)
 */

export function FaqsItems(data) {
  // FAQ 구조화 데이터 생성 (Google FAQPage Schema)
  
  const faqsData = data.data || [];
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  // console.log(faqStructuredData);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {faqsData.map((faq, idx) => (
        <details className={styles.faq} key={idx}>
          <summary>
            <span className={styles.question}>Q.</span>
            <span dangerouslySetInnerHTML={{__html: faq.question}} />
          </summary>
          <div className={styles.faqBody}>
            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </div>
        </details>
      ))}
    </>
  );
}