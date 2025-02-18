import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:adminkigwater/domain/entities/feedback.dart' as f;

class FeedbackCard extends StatelessWidget {
  final f.Feedback feedback;

  const FeedbackCard({super.key, required this.feedback});
  String getFeedback(String r) {
    switch (r) {
      case "complaint":
        return "Жалоба";

      case "suggestion":
        return "Предложение";
      case "review":
        return "Отзыв";
      default:
        return r;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.symmetric(vertical: 10.h),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(15.sp),
      ),
      elevation: 5,
      child: Padding(
        padding: EdgeInsets.all(16.sp),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              feedback.title,
              style: TextStyle(
                fontSize: 22.sp,
                fontWeight: FontWeight.bold,
                color: Colors.blueAccent,
              ),
            ),
            SizedBox(height: 8.h),
            Text(
              'Тип обращения: ${getFeedback(feedback.type)}',
              style: TextStyle(fontSize: 16.sp, color: Colors.grey[600]),
            ),
            SizedBox(height: 4.h),
            feedback.contact.isNotEmpty
                ? Text(
                    'Контакт: ${feedback.contact}',
                    style: TextStyle(fontSize: 16.sp, color: Colors.grey[600]),
                  )
                : const SizedBox.shrink(),
            SizedBox(height: 12.h),
            feedback.content.isNotEmpty
                ? Text(
                    feedback.content,
                    style: TextStyle(fontSize: 18.sp, color: Colors.black87),
                  )
                : const SizedBox.shrink(),
            SizedBox(height: 12.h),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  feedback.wantResponse
                      ? "Требуется ответ"
                      : "Ответ не требуется",
                  style: TextStyle(
                    fontSize: 16.sp,
                    fontWeight: FontWeight.bold,
                    color: feedback.wantResponse ? Colors.green : Colors.red,
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
