import { Message, appUser, getData } from '@/data';
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState<string>();
  const [group, setGroup] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (id) {
      const res = getData(id as string);
      if (res) {
        setTitle(res.title);
        setGroup(res.group || false);
        setMessages(res.messages);
      }
    }
  });

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.chatHeader}>
          <Link href="/">Back</Link>
          <div className={styles.chatTitle}>{title}</div>
          <div />
        </div>
        {messages.map((message) =>
          <div key={message.id} className={message.author === appUser ? styles.outgoingContainer : styles.incomingContainer}>
            {group && message.author !== appUser && <div className={styles.author}>{message.author}</div>}
            <div className={styles.messageWrapper}>
              <div className={message.author === appUser ? styles.outgoingBody : styles.incomingBody}>
                {message.body}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
