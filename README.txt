ผมทำหน้า Font end ไว้ให้เล่นในเบื่องต้นด้วยครับ
เอกสาร er diagram ,Data Dictionary และ script สร้าง DB  อยู่ในตัวของ folder public 

1 npm i 
2 npm run dev 
3 เข้า port 3000 ได้เลยครับ 

Neversitup Backend Test (Nodejs)
การทดสอบมีเวลาให้ 24 ชั่วโมง นับจากเวลาที่ทีมงานส่งโจทย์ให้เมื่อเสร็จแล้วให้ push source code ขึ้น repository ของตัวเอง และส่งกลับมาให้ทีมงานอีกทีครับ 
Expectation ที่ต้องการเห็นในการทดสอบนี้
การวางโครงสร้างโปรเจค
การตีโจทย์ให้ถูกต้องตาม requirement
มี Postman หรือ API Doc อื่น ๆ (Optional)
มี ER Diagram หรือ Diagram อื่น ๆ ที่เกี่ยวข้องกับการวางโครงสร้างโปรเจค
ถ้าใช้ Type Script ภายใต้ framework Nest.js จะพิจารณาเป็นพิเศษ

ให้สร้าง Web services ด้วย node.js สำหรับแอปพลิเคชัน E-Commerce เจ้านึง โดยออกแบบสถาปัตยกรรมของระบบ ให้อยู่ในรูปแบบของ microservices โดยมีฟังก์ชั่นการทำงาน ดังนี้
Authentication
สามารถสมัครสมาชิกได้
มีระบบ Login
User management
เรียกดู Profile ของตัวเอง
เรียกดู Order history ของตัวเอง
Product management
เรียกดู Product ทั้งหมดที่มีในระบบ
สามารถดูข้อมูลของแต่ละ Product ได้
Order management
สร้างรายการคำสั่งซื้อได้
ยกเลิกคำสั่งซื้อ
ดูรายละเอียดคำสั่งซื้อ