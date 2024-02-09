import { Component, OnInit } from '@angular/core';
import { Predict, PredictService } from '@hospital/libs/services';

@Component({
  selector: 'hospital-list-predict',
  templateUrl: './list-predict.component.html',
})
export class ListPredictComponent implements OnInit {
  predict: Predict[] = [];
  selectedDate: string = new Date().toISOString().slice(0, 10);

  constructor(private predictService: PredictService) {}

  ngOnInit() {
    this.getPredict();
  }

  getPredict() {
    this.predictService.getPredict().subscribe((data) => {
      // Lọc các mục dữ liệu có ngày trùng khớp với selectedDate
      this.predict = data.filter(
        (item) => item.createdAt?.slice(0, 10) === this.selectedDate
      );
    });
  }

  dateSelected() {
    this.getPredict();
  }

  previousDay() {
    const selectedDate = new Date(this.selectedDate);
    selectedDate.setDate(selectedDate.getDate() - 1);
    this.selectedDate = selectedDate.toISOString().slice(0, 10);
    this.getPredict();
  }

  nextDay() {
    const selectedDate = new Date(this.selectedDate);
    selectedDate.setDate(selectedDate.getDate() + 1);
    this.selectedDate = selectedDate.toISOString().slice(0, 10);
    this.getPredict();
  }

  setDayOfWeek(dayIndex: number) {
    const today = new Date();
    const diff = dayIndex - today.getDay();
    const selectedDate = new Date(today);
    selectedDate.setDate(today.getDate() + diff);
    this.selectedDate = selectedDate.toISOString().slice(0, 10);
    this.getPredict();
  }
}
