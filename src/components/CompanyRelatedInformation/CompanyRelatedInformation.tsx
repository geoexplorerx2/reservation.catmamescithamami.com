import { t } from 'i18next';
import React, { useState, FC } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../Modal/Modal';
import SignatureInput from '../SignatureInput/SignatureInput';

interface CompanyRelatedInformationType {
  handleTermsOfServiceAcceptance: (e: boolean) => void;
  handleChange: (event: any, type: any) => void
}


const CompanyRelatedInformation: FC<CompanyRelatedInformationType> = (props) => {
  const { handleTermsOfServiceAcceptance, handleChange: handleGlobalStateChange } = props
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { t } = useTranslation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setIsChecked(e.target.checked)
    setIsModalOpen(true)
  }



  const closeModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false)

    }
  }

  const acceptAndClose = () => {
    setIsModalOpen(false)
    setIsChecked(true)
    handleTermsOfServiceAcceptance(true)

  }

  const ModalContent = () => {

    return (
      <div className='flex flex-col'>
        <h2 className='font-bold py-6'>{t(" HOTELISTAN TOURISM AND HOTEL MANAGEMENT PERSONAL DATA PROTECTION AND PROCESSING POLICY")}</h2>

        <div className='mb-4 text-sm'>

          •	INTRODUCTION <br />
          As Hotelistan Tourism and Hotel Management* (Briefly referred to as ''Company''), we ensure full compliance with Law No. 6698 on the Protection of Personal Data and other regulations regarding the implementation of this law, and we show utmost sensitivity to the security of your personal data. With this consciousness, the processing, storing, and transferring of all types of personal data belonging to individuals obtained during our operations are carried out by the company with compliance to Law No. 6698 on the Protection of Personal Data and the relevant legislation, while adhering to the official requirements. With full awareness of this responsibility as the Data Controller, all necessary administrative and technical security measures are taken to ensure the appropriate level of security for the protection of your personal data.
          <p > •	PURPOSE AND SCOPE OF THE PERSONAL DATA PROTECTION AND PROCESSING POLICY </p> 
          The purpose of the Personal Data Protection and Processing Policy is to ensure compliance with the obligations regarding the regulations on Personal Data Protection. It aims to protect the confidentiality and privacy of personal data collected verbally, in writing, or electronically through automatic or non-automatic methods by the Company, using business operations, branches, agencies, call centers, and similar means, in a lawful manner. The policy also aims to determine internal responsibilities, procedures, internal controls, and measures for the proper conduct of personal data processing activities and to inform individuals whose personal data is processed by our company, ensuring transparency.
          The scope of the Personal Data Protection Policy encompasses all personal data of individuals related to the Company, including but not limited to Company officials, Company shareholders, Employees, Job Applicants, Suppliers, Customers, Potential Customers, Dealers, Members, Subscribers, Visitors, Business Partners, and Relevant Individuals who benefit from our products and services, as well as those who visit our websites and Mobile Applications. In summary, it includes all personal data of all natural persons associated with the Company.
         <p> •	MATTERS RELATED TO THE PROCESSING OF PERSONAL DATA:</p>
         <p>3.1. FUNDAMENTAL PRINCIPLES RELATED TO THE PROCESSING OF PERSONAL DATA</p>
         <p>Our Company processes data in accordance with the provisions of the Constitution of the Republic of Turkey, Law No. 6698 on the Protection of Personal Data, and other applicable laws that it is obligated to comply with within the scope of its activities. Our company has adopted the following fundamental principles in line with these legal requirements.
         <p>3.1.1. Processing in accordance with the Law and Principles of Fairness </p>
          In the processing of personal data, our company acts in accordance with the principles imposed by legal regulations and adheres to the principle of fairness.
          3.1.2. Accuracy and Data Currency
          Our Company ensures that the personal data it processes, in accordance with the Law on the Protection of Personal Data and relevant legislation, is known to be accurate and kept up-to-date, taking into consideration the fundamental rights of data subjects and our legitimate interests.</p>
          <p>3.1.3. Being Processed for Specified, Explicit and Legitimate Purposes</p>
          Our Company processes personal data in a manner that is conducive to the realization of pre-determined purposes, and refrains from processing personal data that is unrelated to and unnecessary for the achievement of those purposes. In this regard, the processing of data is limited to activities and legal obligations. Additional changes to the purpose are only possible to a limited extent and with justification.
          <p> 3.1.4. Being Relevant, Limited, and Proportionate to the Purposes for Which They are Processed
          The achievement of the purposes determined by our company involves the processing of personal data within the framework of legal and legitimate interests. Unnecessary, unrelated, and devoid of any legal or legitimate interests, personal data processing activities are not carried out.</p>
          <p> 3.1.5. Being Stored for the Period Laid Down by Relevant Legislation or the Period Required for the Purpose for Which the Personal Data is Processed
          Our Company stores personal data for the periods specified in the relevant legislation and other laws or for the duration necessary for the purposes for which they were processed. It is processed for the duration required by our company's practices and the customs of commercial operations.
          If the purpose of processing personal data and the storage duration specified by relevant legislation and the company have expired, personal data may be stored for the purpose of being used as evidence in potential legal disputes, asserting rights, or establishing a defense. In this case, the stored data cannot be accessed for any other purpose, and access to the relevant personal data is only granted for use in the respective legal dispute.</p>
          <p>3.2. PURPOSES OF PROCESSING OF PERSONAL DATA
          As a company, we process your personal data for the following purposes (but not limited to):</p>
          
           carrying out the required works and conducting related business processes by our relevant departments to fulfill our operations; undertaking necessary activities and managing relevant business processes to provide individuals with access to the services and products offered by our company; ensuring the legal and commercial-business security of individuals engaged in a business relationship with our company; planning and executing our company's business strategies; planning and executing human resources policies and processes.<br/>
         <br/> •	The planning and execution of activities and operational processes<br/>
          •	The activities being carried out in accordance with the legislation, compliance with the information retention, reporting, and disclosure obligations prescribed by the legislation and relevant authorities<br/>
          •	Ensuring the fulfillment of legal obligations in the manner required or mandated by legal regulations<br/>
          •	The planning and execution of processes related to service and post-sales support services, customer satisfaction, corporate communication activities, customer relationship management, as well as the management of customer demands and complaints;<br/>
          •	The planning or execution of ensuring business continuity and activities;<br/>
          •	The planning, auditing, and execution of processes related to corporate sustainability, corporate governance, strategic planning, and information security;<br/>
          •	The planning and execution of activities related to sales, marketing, and promotion processes of products and services, as well as market research, determining consumer preferences and service understanding, and personalization;<br/>
          •	The execution and implementation of Call Center processes<br/>
          •	The execution of tasks and management of relationships with business partners, dealers, or suppliers;<br/>
          •	The execution of Finance and Accounting Duties<br/>
          •	The execution of Insurance Processes<br/>
          •	The monitoring of contract processes or legal demands;<br/>
          •	The monitoring and execution of legal matters<br/>
          •	The provision of the physical space security of the company headquarters and facilities;<br/>
          •	The provision of legal and commercial security for our company and individuals engaged in business relations with our company;<br/>
          •	The determination and implementation of commercial and business strategies of our company;<br/>
          •	The implementation of the Human Resources Policies of our Company<br/>
          •	The planning and execution of the processes related to the recruitment and separation of company employees, as well as the management of human resources and personnel processes,<br/>
          •	The evaluation of job applications<br/>
          •	The planning and execution of processes related to subcontracted personnel, additional personnel, and foreign personnel,<br/>
          •	The execution of occupational health and safety processes,<br/>
          •	Meeting requests such as transfer, reception, sending of forgotten items<br/>
          •	The Creation and Tracking of Visitor Registers<br/>
          •	The Implementation of Storage and Archiving Activities<br/>

          <br/>Our company, as a general rule, obtains written consent from the data subject (or relevant individuals) for the processing of personal data. Nevertheless, in situations where any of the personal data processing conditions specified in Article 5/2 or Article 6/3 of the Personal Data Protection Law are met, explicit consent is not sought. These conditions are elaborated below in detail.<br/>
          3.3. THE CONDITIONS, METHODS, AND LEGAL JUSTIFICATION FOR THE PROCESSING OF PERSONAL DATA<br/>
          3.3.1. The requirement of obtaining explicit consent from the data subject<br/>
          The processing of personal data is prohibited without obtaining the explicit consent of the data subject. As the protection of personal data is also a constitutional right, our company operates in accordance with the Constitution and ensures that personal data is processed only in the cases prescribed by law or with explicit consent based on the informed and free will of the individual.<br/>
          3.3.2. The Circumstances Under Which Personal Data May Be Processed Without Obtaining The Explicit Consent Of The Data Subject<br/>
          The provision of explicit consent by the data subject enables the lawful processing of personal data. However, personal data may also be processed in the absence of explicit consent if any of the conditions outlined below are met.<br/>
          As a general rule, our company obtains the explicit consent of the data subject for the processing of personal data. Nevertheless, in the presence of any of the conditions for processing personal data without explicit consent, as stated in Article 5/2 and Article 6/ of the Personal Data Protection Law, the explicit consent of the data subject is not obtained, and processing occurs based on these conditions.<br/>
          -The explicit provisions clearly envisaged in the laws<br/>
          In accordance with the law, the personal data of the data subject may be lawfully processed without obtaining explicit consent if such processing is explicitly stipulated.<br/>
          In situations where it is deemed practically impossible to obtain the explicit consent of the data subject<br/>
          In cases where it is physically impossible for the data subject to express their consent or their consent cannot be validly recognized, and when it is necessary to process their personal data in order to protect their own or another person's life or bodily integrity, subject's personal data may be processed.<br/>
          -Direct Relevance to the Formation or Performance of the Contract<br/>
          The processing of personal data is permissible if it is necessary for the establishment or performance of a contract and directly related to the parties of the contract.<br/>
          -Legal Obligation<br/>
          If the processing is mandatory for our company to fulfill its legal obligations, the personal data of the data owner may be processed.
          <br/> -Disclosure of Personal Data by the Data Subject
          <br/> If the data subject has voluntarily made their personal data publicly available, the relevant personal data may be processed.
          <br/> -Mandatory Data Processing for the Establishment or Protection of a Right
          <br/> If data processing is mandatory for the establishment, implementation, or protection of a right, the personal data of the data owner may be processed.
          <br/> -Mandatory Data Processing for the Legitimate Interest of the Company
          <br/> Provided that the fundamental rights and freedoms of the personal data subject are not harmed, the personal data of the data owner may be processed if the data processing is mandatory for the legitimate interests of our Company.
          <br/> Your personal data may vary depending on the services, products, or commercial activities provided by our company. These data may be collected through automated or non-automated methods, including customer conversations, reservation forms, membership forms, subscription forms, agency systems, channels through which our company and authorized organizations and individuals representing our company communicate with the relevant individual or may communicate in the future, within the framework of contractual relationships, by accessing various agents' databases through systems to the extent permitted by the agreements made, by accessing public institution and organization databases within the legal framework and limits drawn, in order to provide information about our communication, services, and products, to conduct surveys, customer satisfaction and marketing activities, through internet websites, mobile applications, and social media accounts, verbally, through offices, branches, facilities, call centers, travel agencies, supplier companies, dealers, and similar means, in written or electronic form. Furthermore, your personal data can also be processed through the use of cookies on our company's website.
          The personal data collected through these methods can be processed and transferred within the scope of the data processing conditions and purposes specified in Articles 5 and 6 of the Personal Data Protection Law (KVK Kanunu).
          <br/> 3.4. IDENTIFICATION AND CLASSIFICATION OF DATA SUBJECT
          In accordance with Article 10 of the Law on Protection of Personal Data (KVK Kanunu), our company informs the relevant individuals and processes their personal data within the legitimate and lawful purposes of personal data processing, based on one or more of the personal data processing conditions specified in Articles 5 and 6 of the KVKK, and in compliance with the principles of lawfulness and fairness stated in Article 4 of the KVKK, primarily regarding the processing of personal data. The processed data is accurate and kept up-to-date when necessary, pursued for specific, clear, and legitimate purposes, and processed in a manner that is relevant, limited, and proportionate to the purpose. Moreover, the processing of data relating to data subjects is carried out in compliance with the general principles specified in the KVKK and all obligations regulated in the KVKK.
          According to our personal data processing policy, which covers the processing of personal data by our company, the data subjects are classified as follows: Company officials, Company shareholders, Employees, Job applicants, Customers, Potential customers, Visitors, Third parties, Members, Subscribers, Business partners, Suppliers, and Dealers. The descriptions for each category are provided below.
          The data subjects whose personal data is processed by our company are classified within the scope specified below. However, individuals who are not included in these categories may also address their requests to our company under the Personal Data Protection Law, and their requests will be evaluated.
          DATA SUBJECTS<br/>


          Company Officials
          <br/>Members of the Board of Directors and other authorized individuals of our company
          <br/>Company Shareholders
          <br/>Individual Shareholders of our company
          <br/>Employees
          <br/> Individuals working within our company
          <br/> Job Applicants
          <br/> Individuals who have applied to our company in any form submitted their resumes and personal information for our company's review
          <br/>Customer
          <br/> Individuals who have used or are using the products and services offered by our company, regardless of whether they have any contractual relationship with our company
          <br/>Potential Customer
          <br/> Individuals who have expressed interest in or have the potential to show interest in using our company's products and services, or who have been evaluated in accordance with commercial customs and fairness principles as having such an interest
          <br/> Visitor/External Participant
          <br/> Individuals who have entered our company's hotels and other establishments for various purposes or have visited our websites
          <br/>Third Parties
          <br/> Other individuals, such as companions, guarantors, family members, and relatives, who are associated with data subjects and are not covered by our company's Personal Data Protection and Processing Policy but are related to protecting the rights of data subjects and their legitimate interests
          <br/> Members/Subscribers
          <br/> Individuals who participate in the Program, which has been created in order to provide benefits such as general and special campaigns, promotions, introductions, and point accumulations in the hotels and establishments owned by our company, with a focus on customer satisfaction, pursuant to a contractual agreement
          <br/> Business Partners, Suppliers
         <br/> Related individuals, including employees of companies engaged in any kind of business relationship (such as business partners, suppliers, etc. without limitation), shareholders, and authorized representatives of these companies
         <br/>  Dealers
         <br/>  Authorized representatives, shareholders, employees, and related individuals of companies engaged in business relationships within the framework of franchise agreements and legal relationships

         <br/>3.5. IDENTIFICATION OF PERSONAL DATA AND ASSOCIATION WITH DATA SUBJECTS
         <br/>3.5.1. Identification of Personal Datas
          Our company processes the personal data specified below, either partially or entirely, in an automated or non-automated manner as part of the data recording system, in accordance with legitimate and lawful purposes of personal data processing, as well as the conditions and fundamental principles stipulated by the Law on Protection of Personal Data (KVK Kanunu). We inform the relevant individuals in accordance with Article 10 of the KVKK regarding the processing of their personal data.

          <br/>PERSONAL DATA


          <br/> Identity Information
          <br/>Documents such as identity card, driver's license, passport, professional identity cards, which contain information such as full name, T.C./Identification number, nationality, place of birth, date of birth, mother's name, father's name, as well as information such as tax number, social security number, signature information, vehicle plate number, etc.
          <br/>Contact Information
          <br/> Address, Phone, Fax, E-mail etc.
          <br/> Family Members and Relatives Information
          <br/>Identity and contact information of the family members, relatives, and other individuals who can be reached in case of emergency, with the purpose of protecting the legal and legitimate interests of the data subject, in relation to the products and services provided by the company
          <br/>Physical Space and Security Information
          <br/>Information regarding the camera recordings taken during entry to and stay within the premises of the businesses owned by the company, as well as information related to recordings and documents taken for security purposes
          <br/>Visual and Audio Information
          <br/> Documents and information such as photographs and camera recordings unrelated to physical space security information, as well as audio recordings that are copies of documents containing personal data, related to the products and services provided by the company
          <br/> Transaction Security Information
          <br/>Information such as login and logout details, password information, IP address information, related to accessing our company's websites and applications
          <br/> Financial Information
          <br/> Bank account number, IBAN number, credit card information, movable and immovable property, assets, income, and any kind of financial documents and information, within the contractual and legal relationship established between the company and the data subject
          <br/> Risk Management Information
          <br/>Information processed through methods compliant with the principle of honesty for managing commercial, technical, and administrative risks
          <br/> Location Information
          <br/>Information regarding the location of employees using company vehicles during the operations carried out by the business units of our company, as well as travel data related to their movements
          <br/> Marketing Information
          <br/>Information regarding the personal data processed for marketing and promotion purposes, which are determined based on the usage habits, preferences, satisfaction, and needs of the data subjects related to the products and services offered by the company, as well as information related to the reports prepared based on this data
          <br/> Personal Information
          <br/>Any and all information related to the personnel rights of our company's employees and individuals who have provided their personal information to our company as job candidates and are in an employment relationship with our company, including personal information, curriculum vitae details, payroll information, and similar records.

          <br/>Legal Transaction Information
          <br/>Information related to the pursuit of our legal receivables and debts, lawsuits and enforcement proceedings related to the fulfillment of our debts, and correspondence with judicial authorities
          <br/>Customer Transaction Information
          <br/>Call center records, invoices, promissory notes, checks, customer request information, dealer order information, request information, and similar records
          <br/> Sensitive Personal Data
          <br/> Data specified in Article 6 of the Law on Protection of Personal Data (KVKK)

          <br/>3.5.2. Association of Personal Data with Data Subjects
          <br/>The personal data processed by our company within the scope of our personal data processing policy are specified below.

          <br/>DATA SUBJECTS

          <br/> PERSONAL DATA

          <br/>Company Officials
          <br/>Identity Information, Contact Information, Physical Space Security Information, Financial Information, Location Information, Family Members Information, Visual and Audio Information, Sensitive Personal Data
          <br/>Company Shareholders
          <br/>Identity Information, Contact Information, Physical Space Security Information, Financial Information, Location Information, Family Members Information, Visual and Audio Information, Sensitive Personal Data
          <br/> Employee
          <br/> Identity Information, Contact Information, Physical Space Security Information, Financial Information, Family Members Information, Visual and Audio Information, Location Information, Employee Personal Information, Legal Transaction Information, Sensitive Personal Data
          <br/> Job Applicants
          <br/>Identity Information, Contact Information, Physical Space Security Information, Financial Information, Family Members Information, Visual and Audio Information, Employee Personal Information, Sensitive Personal Data
          <br/>Customer
          <br/>Identity Information, Contact Information, Physical Space Security Information, Financial Information, Family Members Information, Visual and Audio Information, Marketing Information, Customer Transaction Information, Legal Transaction Information, Sensitive Personal Data
          <br/>Potential Customer
          <br/> Identity Information, Contact Information, Physical Space Security Information, Financial Information, Family Members Information, Visual and Audio Information, Marketing Information, Customer Transaction Information, Sensitive Personal Data
          <br/> Visitor/External Participant
          <br/> Identity Information, Contact Information, Physical Space Security Information, Visual and Audio Information, Customer Transaction Information
          <br/>Third Parties
          <br/>Identity Information, Contact Information, Physical Space Security Information, Family Members Information, Visual and Audio Information,
          <br/>Members/Subscribers
          <br/>Identity Information, Contact Information, Physical Space Security Information, Financial Information, Family Members Information, Visual and Audio Information, Marketing Information, Legal Transaction Information, Sensitive Personal Data
          <br/> Business Partners/Suppliers
          <br/>Identity Information, Contact Information, Physical Space Security Information, Financial Information, Visual and Audio Information, Legal Transaction Information, Sensitive Personal Data
          <br/>Dealers
          <br/>Identity Information, Contact Information, Physical Space Security Information, Financial Information, Visual and Audio Information, Customer Transaction Information, Legal Transaction Information, Sensitive Personal Data

          <br/>3.6. Processing of Sensitive Personal Data
          In Article 6 of the Law on Protection of Personal Data (KVK Kanunu), certain personal data that, when processed unlawfully, may pose a risk of causing harm or discrimination to individuals, is defined as "sensitive personal data''. These data include race, ethnic origin, political opinions, philosophical beliefs, religion, sect or other beliefs, appearance and clothing, membership in associations, foundations or trade unions, health, sexual life, criminal convictions, and security measures-related data, as well as biometric and genetic data.
          Sensitive personal data is processed in the following situations, subject to taking sufficient measures to be determined by the Personal Data Protection Board (Briefly referred to as "Board"):
          <br/>•	Sensitive personal data, except for the individual's health and sexual life, is processed in cases prescribed by the laws;
          <br/>•	Sensitive personal data related to an individual's health and sexual life is processed only by persons or authorized institutions and organizations who are under the obligation of confidentiality, for the purposes of protecting public health, conducting preventive medicine, medical diagnosis, treatment, and care services, planning and managing health services and their financing.
          <br/>If the above-mentioned data processing conditions are not met, our company informs the data subjects and obtains their explicit consent based on clear and informed communication, specifically related to a particular matter, and given freely and voluntarily, for the processing of their data.
          Within this context, the data subjects are informed about the purposes of processing sensitive personal data, to whom and for what purposes it may be transferred, and the method and legal basis of processing, as well as the rights that data subjects have under Article 11 of the Law on Protection of Personal Data, while disclosing the identity of the company.
          3.7. PROCESSING OF SECURITY CAMERA RECORDINGS
          <br/>Our company records visual footage for the purpose of ensuring security at our headquarters, facilities, and establishments. Personal data processing activities carried out by our company through security cameras are conducted in compliance with the Constitution, the Law on Protection of Personal Data, and other relevant legislation.
          <br/>Our company processes video recordings for the purpose of enhancing the quality and reliability of the services provided, ensuring the safety of our company, employees, data subjects, and other individuals, preventing abuses, and ensuring legal and commercial security. This processing is based on the legal grounds stated in Article 5 of the Personal Data Protection Law, which include the "necessity of processing for the data controller to fulfill its legal obligations" and "the necessity of processing for the legitimate interests pursued by our company, provided that it does not harm the fundamental rights and freedoms of the data subject."
          <br/>The aforementioned personal data may be transferred to judicial authorities or relevant law enforcement agencies in cases of resolving legal disputes or when required by applicable legislation.
          <br/> Our company processes personal data in accordance with Article 4 of the Law on Protection of Personal Data, ensuring that the processing is related, limited, and proportionate to the purpose for which the personal data are processed. No video recordings are made in areas that could compromise the privacy and confidentiality of individuals beyond the scope of security purposes. Video recordings are made in general service areas such as the entrances of our headquarters, facilities, and premises, building exteriors, restaurants, cafeterias, lobbies, visitor waiting lounges, elevators, parking lots, security booths, and floor corridors. Data subjects are informed regarding the personal data processing activities conducted within this scope. However, due to the existence of our company's legitimate interests, explicit consent is not obtained.
          <br/> Our company takes necessary technical and administrative measures to ensure the security of personal data obtained through video surveillance activities in compliance with Article 12 of the Law on Protection of Personal Data (KVKK).
          <br/>3.8. PROCESSING OF INTERNET ACCESS LOGS
          <br/>Our company provides internet access to visitors who request it during their stay within our headquarters, facilities, and establishments, in order to ensure security and for the purposes specified in our policy.
          <br/>In this case, the log records related to internet access are kept in accordance with the mandatory provisions of Law No. 5651 and the legislation regulated under this law. These records are processed only when requested by authorized public institutions and organizations or for the purpose of fulfilling our relevant legal obligations during internal audit processes within the company.
          <br/>The Company employees who have access to the mentioned records are only authorized to use them for requests from authorized public institutions and organizations or during audit processes. The records are shared with legally authorized individuals.
          <br/>3.9. PROCESSING OF PERSONAL DATA COLLECTED THROUGH COOKIES
          <br/>Our company utilizes cookies to improve the functionality and usage of our web pages or mobile applications, aiming to enhance your experience and make your time spent on our digital platforms more efficient and enjoyable.
          <br/>In addition, we use certain cookies on our websites and mobile applications to remember your preferences, providing you with an enhanced and personalized experience tailored to your preferences. Personal data is processed and transferred through the cookies on our digital platforms.
          <br/>Our company takes necessary technical and administrative measures to ensure the security of personal data collected through cookies in compliance with Article 12 of the Law on Protection of Personal Data (KVKK).
          <br/>•	MATTERS REGARDING THE TRANSFER OF PERSONAL DATA
          <br/> Our company takes maximum care and attention in sharing personal data of the data subject with domestic and/or foreign entities, by implementing necessary administrative and technical measures in line with the purposes of personal data processing. We conduct our activities in compliance with the current regulations in this regard.
          <br/>In this context, our company may share personal data with our suppliers and business partners (such as software companies providing information systems and technical support, consulting firms, etc.) to the extent necessary for the fulfillment of our services and the fulfillment of legal obligations, in accordance with the purposes stated in our Personal Data Protection and Privacy Policy under Article 4.2. We may also share personal data with the General Directorate of Security and other law enforcement agencies, Social Security Institution, Population Directorate, Revenue Administration, Courts, and other official institutions and organizations, domestic and foreign agents and travel service providers with whom we collaborate, our authorized dealers, consultants including lawyers, tax consultants, and auditors, regulatory and supervisory authorities, domestic and foreign systems and organizations, and/or other companies within our organization. The sharing of personal data will be limited to the purposes specified and within the scope of collaboration with these third parties.
          <br/> In addition, there is a transfer of personal data obtained by our Company due to technical details related to information systems abroad.
          <br/>The aforementioned personal data may be stored and retained, classified based on financial and operational processes and marketing activities, updated at different intervals, and disclosed in accordance with the legislation and privacy principles, as required by the service to be provided, to third Parties, suppliers, service providers, and business partners based on the policies we are bound by. The personal data may also be stored, processed through reporting, and documented in electronic or paper format as a basis for processing, as required by authorities or for other reasons. The transfer of personal data will be carried out in accordance with the requirements and purposes of personal data processing stated in Article 8 of the Law on the Protection of Personal Data regarding the transfer of personal data, as well as Article 9 regarding the transfer of personal data abroad.
          <br/> Our company may transfer personal data and sensitive personal data without the explicit consent of the data subject, provided that the conditions stipulated in Article 5/2 and Article 6/3 of the Law on the Protection of Personal Data are met, and necessary measures prescribed by the Personal Data Protection Board are taken.
          <br/>•	PROTECTION OF PERSONAL DATA SUBJECT'S RIGHTS
          <br/> 5.1. RIGHTS OF PERSONAL DATA SUBJECT
          <br/>Our Company makes the necessary operational information, administrative, and technical arrangements in order to evaluate the requests of the personal data owners regarding their rights and to provide the necessary information to the personal data subjects.
          <br/>In this regard, our company informs the data subjects in accordance with Article 10 of the Personal Data Protection Law (KVKK) during the collection of personal data. In this regard, our company provides information regarding the following matters.
          <br/>•	Identity of the data controller and, if applicable, its representative
          <br/>•	Purpose of processing personal data
          <br/>•	Recipients of processed personal data and the purposes or categories of third parties to whom the data is disclosed
          <br/>•	Method of personal data collection and the legal basis for such collection,
          <br/> •	Rights of the data subject whose personal data is being processed, in accordance with Article 11 of the Personal Data Protection Law (KVKK)
          <br/>Our company operates in accordance with the principles stated in the Constitution and the Personal Data Protection Law (KVKK) during personal data processing activities. We inform data subjects and relevant parties through our Personal Data Protection and Privacy Policy, as well as various accessible and transparent documents. In the event of an information request from a data subject, we provide the necessary information accordingly.
          <br/>If data subjects communicate their requests regarding their rights listed below to our company, their requests will be processed and resolved free of charge within the shortest possible time, and at the latest within thirty days, depending on the nature of the request. However, if the transaction requires an additional cost, our company will charge the fee specified in the tariff determined by the Personal Data Protection Board or other authorities.
          <br/> Data Subjects;
          <br/>•	The right to learn whether personal data is being processed or not,
          <br/> •	The right to request information if personal data has been processed,
          <br/>•	The right to learn the purpose of the processing of personal data and whether they are being used in accordance with that purpose,
          <br/>•	The right to know the third parties to whom personal data is transferred, whether domestically or internationally,
          <br/>•	The right to request the correction of personal data that is incomplete or inaccurate and to request that the third parties to whom the personal data has been transferred be informed about the correction made in this regard,
          <br/> •	The right to request the erasure or destruction of personal data if the reasons that require its processing no longer exist, even if it has been processed in accordance with the Personal Data Protection Law and other relevant laws. Additionally, the right to request that the third parties to whom the personal data has been transferred be informed about the erasure or destruction of the data in this regard,
          <br/>•	The right to object to a decision based solely on automated processing, including profiling, which produces legal effects concerning the individual or significantly affects them,
          <br/>•	If personal data is processed unlawfully and causes harm, the data subject has the right to request the remedy of the damage.
          <br/>5.2. EXERCISING RIGHTS OF THE DATA SUBJECT
          <br/>Data subjects can submit their requests regarding their rights as stated in Article 11 of the Personal Data Protection Law (KVKK) to our company by providing information and documents that enable their identification.
          <br/> Within this framework, the application form available on the website www.novaplazahotel.net can be filled out;
          <br/> •	Personally by the applicant, either by hand delivery or through a notary, to the address "Merkez Mah. Abide-i Hürriyet Cad. No:171/8 Şişli İstanbul."
          <br/>•	By the applicant signing it with a "secure electronic signature" defined in the Law No. 5070 on Electronic Signature and sending it to the company's registered email address kvkk@novaplazahotel.net.
          <br/> Data subjects cannot exercise the right to receive information under Article 11 of the KVKK through third parties. If a third party wishes to make a request on behalf of the data subject regarding their personal data, a special power of attorney specifically issued on behalf of the person making the request must be presented, bearing the wet signature, and notarized.
          <br/> Once the data subject submits their request to our company, we will process the request and respond to it within the shortest possible time and no later than thirty days, depending on the nature of the request.
          <br/>To clarify the information provided in the data subject's application and determine whether the applicant is the data subject, our company may ask additional questions or request further information and documentation from the data subject.
          <br/>In the following cases, the applicant's request may be rejected, with the reasons stated:
          <br/> •	Processing of personal data for official statistics, research, planning, and statistical purposes in a way that makes them anonymous.
          <br/> •	Processing of personal data for artistic, historical, literary, or scientific purposes, or within the scope of freedom of expression, provided that it does not violate national defense, national security, public security, public order, economic security, privacy, or personal rights, or does not constitute a crime.
          <br/> •	Processing of personal data by authorized public institutions and organizations that are granted duties and powers by law, within the scope of preventive, protective, and intelligence activities carried out for ensuring national defense, national security, public security, or economic security.
          <br/> •	Processing of personal data by judicial authorities or enforcement authorities regarding investigation, prosecution, trial, or execution procedures.
          <br/> •	Processing of personal data when it is necessary for the prevention of a crime or for a criminal investigation.
          <br/> •	Processing of personal data that has been made public by the data subject themselves.
          <br/> •	Processing of personal data that is necessary for the performance of supervisory or regulatory tasks by authorized public institutions and organizations or professional organizations with public institution status, or for the conduct of disciplinary investigations or proceedings.
          <br/> •	Processing of personal data for the protection of the state's economic and financial interests in relation to budget, taxation, and financial matters.
          <br/>•	Possibility of the data subject's request obstructing the rights and freedoms of others.
          <br/>•	The information requested by the data subject being public information.
          <br/>5.3. ENSURING THE SECURITY OF PERSONAL DATA
          <br/>Our company pays maximum attention and care to ensure data security. In this regard, the following measures and specified aspects for ensuring "data security" in accordance with Article 12 of the KVKK and other related regulations are taken.
          <br/>•	All necessary technical and administrative measures are taken to prevent the unlawful processing and unauthorized access of personal data and to ensure the confidentiality and protection of personal data.
          <br/>•	Employees are informed that they should not disclose personal data they acquire in violation of the provisions of the KVKK, or use it for purposes inconsistent with the processing purposes, and they are required to comply with this obligation even after they leave their positions.
          <br/>•	As the data controller, our company is obligated to comply with the responsibilities regarding the processing of personal data and is required to adhere to the legal, technical, and administrative measures developed in this regard. This obligation is also contractually imposed on our data processors, such as business partners, suppliers, and consultants, with whom we have a relationship.
          <br/>•	Our company takes appropriate organizational and technical measures to prevent unauthorized access, illegal processing, disclosure, accidental loss, alteration, or destruction of personal data. These measures aim to protect and ensure the confidentiality of personal data.
          <br/> •	Our company conducts or commissions the necessary audits within its own structure. Our company performs necessary internal audits or outsources them to ensure compliance with the provisions of the KVKK within the framework of the company's internal functioning.
          <br/>•	In the event that personal data is unlawfully obtained by others, our company promptly notifies the relevant individual and the Personal Data Protection Board (KVK Kurul) about the incident.
          <br/>•	DELETION, DESTRUCTION, AND ANONYMIZATION OF PERSONAL DATA
          <br/>In accordance with the law and relevant regulations, our company deletes, destroys, or anonymizes personal data when the legal or business process-related retention periods expire, or when the reasons requiring processing no longer exist. This includes record-keeping obligations and retention procedures necessary for evidence purposes. The deletion, destruction, or anonymization of personal data is carried out by our company or upon the request of the data subject.
          <br/> 6.1. DELETION OF PERSONAL DATA
          <br/>Deletion of personal data refers to the process of rendering personal data inaccessible and unusable for the relevant users in any way.
          <br/> In the process of deleting data that is stored in physical and digital environments, whether processed through automated or non-automated methods, our company follows a set procedure. Firstly, we identify the personal data that will be subject to deletion. We then determine the access and permissions of relevant users for each individual personal data. Based on this, we identify and disable the access, retrieval, and reuse rights and methods of the relevant users within the scope of their personal data.
          <br/> Examples of personal data deletion procedures are as follows.
          <br/> •	Erasure: Data in paper format is deleted using the method of blacking out or obscuring the information. The entirety of personal data is made invisible to the relevant users in an irreversible and technologically uninterpretable manner, such as by obliterating and obscuring any association with an identified or identifiable individual through techniques like drawing and painting, ensuring that it cannot be recovered or read.
          <br/> •	Server Deletion: Files stored in digital environments are deleted using the delete command through the operating system or by revoking the user's access rights to the server where the file is located.
          <br/>•	Our company fully complies with the provisions of the Law on the Protection of Personal Data (KVKK) and relevant legislation regarding the deletion of personal data. We have implemented all necessary administrative and technical measures to ensure compliance.
          <br/>6.2. DESTRUCTION OF PERSONAL DATA
          <br/>  The destruction of personal data refers to the process of making personal data completely inaccessible, irretrievable, and unusable by anyone.
          <br/> When personal data is processed through non-automated means and physically stored as part of a data recording system, a system is implemented to physically destroy the personal data in a manner that ensures it cannot be subsequently used.
          <br/>When personal data is processed through fully or partially automated means and stored in digital environments, methods are employed to ensure the data is permanently deleted and cannot be recovered, including the deletion of the data from the relevant software.
          <br/> Our company fully complies with the provisions of the Law on Protection of Personal Data and relevant legislation regarding the destruction of personal data. We have implemented all necessary administrative and technical measures to ensure compliance.
          <br/>6.3. ANONYMIZATION OF PERSONAL DATA
          <br/>Anonymizing personal data refers to the process of rendering personal data incapable of being associated with or identifying a specific or identifiable individual, even through the use of other data. Our company is able to anonymize personal data when the reasons necessitating the processing of such data in compliance with the law no longer exist.
          <br/>In order for personal data to be considered anonymized, it must be rendered incapable of being associated with an identified or identifiable natural person, even through the use of appropriate techniques within the recording medium and relevant field of activity, including the reversal of the anonymization process or data linkage with other information.
          <br/>Data is considered anonymized when it no longer allows the identification of the individual or the distinguishing of an individual within a group, such that it cannot be associated with a specific person and does not indicate or refer to any particular individual. In other words, after the anonymization process, the data that previously allowed the identification of a specific individual has been transformed in such a way that it can no longer be associated with that person and the connection to the individual has been severed.
          <br/>In accordance with Article 28 of the Personal Data Protection Law, anonymized personal data can be processed for purposes such as research, planning, and statistics. Such processing activities are outside the scope of the Personal Data Protection Law, and explicit consent of the data subject will not be required for these anonymized personal data.
          <br/> Our company utilizes methods such as masking, grouping, generalization, derivation, and randomization to anonymize personal data stored in the data recording system. These techniques are employed to sever the connection between the data and the individual, thereby ensuring anonymity.
          <br/>Our company ensures full compliance with the Law on Protection of Personal Data (KVKK) and relevant legislation regarding the anonymization of personal data. We have implemented all necessary administrative and technical measures to achieve compliance in this regard.
          <br/>*Hotelistan Global Travel Services is a registered trademark of Hotelistan Turizm Otelcilik Bilgi İşlem ve Ticaret Limited Şirketi.
          <br/>**This Policy is a fundamental regulation regarding the processing of personal data belonging to our Company, and it has been prepared to be implemented in line with other similar procedures and business processes with overlapping purposes. The processing and protection of personal data are primarily regulated in accordance with the Personal Data Protection Law and the current legislation in force. However, please note that the legal provisions may undergo changes, and our Company reserves the right to make amendments and updates to this Policy accordingly.


        </div>
        <div className='w-full flex justify-end mt-8'>
          {/* <button type="button" onClick={acceptAndClose} className='border border-[#800000] px-8 py-3 rounded-[10px] hover:bg-[#800000] hover:text-white'>
              Accept
          </button> */}
          <span className='text-bold underline' onClick={acceptAndClose} >{t('I_HEREBY_ACCEPT_THE_TERMS_AND_CONDITIONS')}</span>
        </div>

      </div>
    )
  }

  return (
    <div className='container font-poppins h-[calc(100%_-_250px)] overflow-y-scroll scrollbar-hide '>
      {/* <p className='font-bold py-6'>English</p>
      <p className='mb-4 text-sm'>
        So when is it okay to use lorem ipsum? First, lorem ipsum works well for staging. It's like the props in a furniture store—filler text makes it look like someone is home. The same Wordpress template might eventually be home to a fitness blog, a photography website, or the online journal of a cupcake fanatic. Lorem ipsum helps them imagine what the lived-in website might look like.
      </p>
      <p className='mb-4  text-sm'>
        Second, use lorem ipsum if you think the placeholder text will be too distracting. For specific projects, collaboration between copywriters and designers may be best, however, like Karen McGrane said, draft copy has a way of turning any meeting about layout decisions into a discussion about word choice. So don't be afraid to use lorem ipsum to keep everyone focused.
      </p>
      <p className='mb-4  text-sm'>
        One word of caution: make sure your client knows that lorem ipsum is filler text. You don't want them wondering why you filled their website with a foreign language, and you certainly don't want anyone prematurely publishing it.
      </p>

      <p className='font-bold py-6'>Türkçe</p>
      <p className='mb-4  text-sm'>
        So when is it okay to use lorem ipsum? First, lorem ipsum works well for staging. It's like the props in a furniture store—filler text makes it look like someone is home. The same Wordpress template might eventually be home to a fitness blog, a photography website, or the online journal of a cupcake fanatic. Lorem ipsum helps them imagine what the lived-in website might look like.
      </p>
      <p className='mb-4  text-sm'>
        Second, use lorem ipsum if you think the placeholder text will be too distracting. For specific projects, collaboration between copywriters and designers may be best, however, like Karen McGrane said, draft copy has a way of turning any meeting about layout decisions into a discussion about word choice. So don't be afraid to use lorem ipsum to keep everyone focused.
      </p>
      <p className='mb-4  text-sm'>
        One word of caution: make sure your client knows that lorem ipsum is filler text. You don't want them wondering why you filled their website with a foreign language, and you certainly don't want anyone prematurely publishing it.
      </p> */}
      <div className='w-full border-t border-[#CBCBCB] pt-4 my-4'>
        <label>
          <input id="termsOfService" type='checkbox' className='mr-4 rounded-full' checked={isChecked} onChange={handleChange} />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam corporis sint quia minus facilis itaque? Molestias placeat, eligendi consequuntur ut laborum voluptatum aliquam quam debitis. Eveniet nostrum fugit inventore nisi.
        </label>
        <Modal show={isModalOpen} closeModal={closeModal} children={<ModalContent />} />
      </div>
      <SignatureInput onChange={(e: any, inputType: string) => { handleGlobalStateChange(e, inputType) }} />
    </div>
  )
}

export default CompanyRelatedInformation;