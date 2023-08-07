import { appUser, chats } from '@/data';
import styles from '@/styles/Home.module.css';
import moment from 'moment';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.inboxHeader}>
        <div className={styles.chatTitle}>Inbox</div>
      </div>
      {chats.map((chat) => {
        const lastMessage = chat.messages[chat.messages.length - 1];
        return <Link href={`/chats/${chat.id}`} key={chat.id} className={styles.summary}>
          <div className={styles.summaryTop}>
            <div className={styles.chatTitle}>{chat.title}</div>
            <div>{moment(lastMessage.createdAt).fromNow()}</div>
          </div>
          {lastMessage.author === appUser && "You: "}
          {lastMessage.body}
        </Link>
      }
      )}
    </main >
  )
}
