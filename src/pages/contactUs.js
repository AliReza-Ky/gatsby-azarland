import React from "react"
import Layout from "../components/layout"
import { Form, Button } from "react-bootstrap"



const Contact=()=>{
    return(
        <div>
            <Layout>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>آدرس ایمیل</Form.Label>
    <Form.Control type="email" placeholder="ایمیل خود را وارد نمایید..." />
    <Form.Text className="text-muted">
    ما هرگز ایمیل شما را با شخص دیگری به اشتراک نمی گذاریم.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>رمز عبور</Form.Label>
    <Form.Control type="password" placeholder="رمز عبور" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check  type="checkbox" label="مرا به خاطر بسپار" />
  </Form.Group>
  <Button variant="primary" type="submit">
    ارسال
  </Button>
</Form>
            </Layout>
        </div>
    )
}
export default Contact