import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { axios, formatDate } from '@web/shared'

import './index.scss'
import { useUserStore } from '/src/store/user'

const FeedbackPage: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<R.Feedback[]>([])
  const [feedback, setFeedback] = useState({
    DisplayName: '',
    Email: '',
    Message: ''
  })
  const [s, update] = useState(1)
  const user = useUserStore()

  useEffect(() => {
    axios.get<R.Response<R.Feedback[]>>('/feedbacks').then((f) => {
      setFeedbacks(f.data)
    })
  }, [s])

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFeedback({
      ...feedback,
      [event.target!.name]: event.target.value
    })
  }

  function submitHandler(e: FormEvent) {
    e.preventDefault()
    e.stopPropagation()
    axios
      .post<R.Response<R.Feedback>>('/feedback', {
        data: {
          ...feedback,
          name: user?.Name
        }
      })
      .then((f) => {
        if (!f.err) {
          update(Date.now())
          setFeedback({ ...feedback, Message: '' })
        }
      })
  }

  return (
    <div className="feedback-container">
      <Helmet>
        <title>Feedback</title>
      </Helmet>
      <div className="feedback-open">
        <form className="feedback-form" onSubmit={submitHandler}>
          <h1>Feedback</h1>
          <div className="feedback-form-group">
            <label htmlFor="feedback-name">
              Name<span>*</span>
            </label>
            <input
              type="text"
              id="feedback-name"
              className="input"
              required
              name="DisplayName"
              onChange={handleChange}
              value={feedback.DisplayName}
            />
          </div>
          <div className="feedback-form-group">
            <label htmlFor="feedback-email">Email</label>
            <input
              type="email"
              id="feedback-email"
              className="input"
              name="Email"
              value={feedback.Email}
              onChange={handleChange}
            />
          </div>
          <div className="feedback-form-group">
            <label htmlFor="feedback-message">
              Message<span>*</span>
            </label>
            <textarea
              id="feedback-message"
              className="textarea"
              required
              name="Message"
              onChange={handleChange}
              value={feedback.Message}
            />
          </div>
          <button type="submit" className="button is-black is-fullwidth">
            Send
          </button>
        </form>
      </div>
      <div className="feedback-list">
        <ul>
          {feedbacks?.map((item) => (
            <li key={item.ID} className="feedback-item" id={`feedback-${item.ID}`}>
              <div className="feedback-item__head">
                <span className="feedback-item__name">{item.DisplayName} :</span>
              </div>
              <div className="feedback-item__content">
                <p>{item.Message}</p>
                <p className="feedback-item__time">
                  {formatDate(item.CreatedAt)} | {item.Ip}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FeedbackPage
