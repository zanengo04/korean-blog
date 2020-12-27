import React from 'react'
import CommentBox from '../../CommentBox'

export default function Grammar2() {
    return (
        <main>
            <h1>Particle ~도</h1>
            <p className="doubleSpace">
            ~도 is another particle that is very useful in Korean. It has the meaning of “too/as well.” It can replace the subject  particles (는/은) OR the object particles (를/을), depending on what you are saying “too” with. For example:
            <br /><br />
            저도 한국어를 말하다 = I speak Korean as well (In addition to other people)<br />
            (나도 한국어를 말해 / 저도 한국어를 말해요)
            <br /><br />
            which is different from:
            <br /><br />
            저는 한국어도 말하다 = I speak Korean as well (in addition to other languages)<br />
            (나는 한국어도 말해 / 저는 한국어도 말해요)
            <br /><br />
            Make sure you notice the difference between the previous two examples. In English these two are written the same, but sound different when speaking. In the first example, you are emphasizing that YOU also speak Korean, in addition to other people that you are talking about. In the second example, you are emphasizing that (in addition to other languages), you also speak Korean.
            See the two examples below for the same issue:
            <ul>
                <li>
            저도 사과를 먹다 = I eat apples as well
            (나도 사과를 먹어 / 저도 사과를 먹어요)</li>
                <li>저는 사과도 먹다 = I eat apples as well
            (나는 사과도 먹어 / 저는 사과도 먹어요)</li>
            </ul>
            Notice the difference in pronunciation in English. The first one has the meaning of “other people eat some apples, but I too eat some apples.” The second example has the meaning of “I eat some other food as well, but I also eat apples.” It is important to recognize that whatever noun “~도” is attached to is the thing that is being expressed as “too.” More examples:

            <ul>
                <li>나도 그것을 알다 = I know that, too
            (나도 그것을 알아 / 저도 그것을 알아요)</li>
                <li>나도 피곤하다 = I am tired, too
            (나도 피곤해 / 저도 피곤해요)</li>
                <li>나의 딸도 행복하다 = My daughter is happy, too
            (나의 딸도 행복해 / 저의 딸도 행복해요)</li>
            </ul>
            </p>

            <CommentBox />
        </main>
    )
}
