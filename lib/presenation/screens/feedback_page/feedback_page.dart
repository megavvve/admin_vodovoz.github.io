import 'package:adminkigwater/data/datasources/remote/appwrite.dart';
import 'package:adminkigwater/injection_container.dart';
import 'package:adminkigwater/presenation/screens/feedback_page/widget/feedback_card.dart';
import 'package:adminkigwater/presenation/widgets/navigation/drawer.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:adminkigwater/domain/entities/feedback.dart' as f;

class FeedbackPage extends StatelessWidget {
  const FeedbackPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: getDrawer(context),
      appBar: AppBar(
        title: Text('Фидбэк', style: TextStyle(fontSize: 24.sp)),
        centerTitle: true,
      ),
      body: FutureBuilder<List<f.Feedback>?>(
        future: getIt<AppWrite>().getFeedbacks(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          if (snapshot.hasError) {
            return Center(child: Text('Ошибка загрузки данных: ${snapshot.error}'));
          }

          if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text('Нет фидбэков.'));
          }

          List<f.Feedback> feedbacks = snapshot.data!;

          return Padding(
            padding: EdgeInsets.symmetric(horizontal: 20.w, vertical: 20.h),
            child: Column(
              children: [
                
                SizedBox(height: 30.h),
                Expanded(
                  child: ListView.builder(
                    itemCount: feedbacks.length,
                    itemBuilder: (context, index) {
                      final feedback = feedbacks[index];
                      return FeedbackCard(feedback: feedback);
                    },
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
